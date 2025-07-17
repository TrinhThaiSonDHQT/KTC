import { useEffect, useState } from 'react';
import { useStore } from '../utils/AuthStore';
import type { Task, TaskFormData } from '../types';
import apiClient from '../utils/apiClient';

const TaskDetailModal = () => {
  const { selectedTask, loggedInUser } = useStore();
  const { setSelectedTask, updateTaskInStore } = useStore();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    status: 'Pending',
    priority: 'Low',
    assignee: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTask) {
      setFormData({
        id: selectedTask.id,
        title: selectedTask.title,
        status: selectedTask.status,
        priority: selectedTask.priority,
        assignee: selectedTask.assignee_id,
        description: selectedTask.description,
      });
    }
  }, [selectedTask]);

  if (!selectedTask) return null;

  const handleClose = (): void => {
    setSelectedTask(null);
    setIsEditing(false);
  };

  const handleEdit = (): void => {
    setIsEditing(true);
  };

  const handleSave = async (): Promise<void> => {
    setIsLoading(true);
    try {
      console.log(selectedTask.id);

      const res = await apiClient.patch<Task>(
        `/workspaces/tasks/${selectedTask.id}`,
        {
          ...formData,
        }
      );
      console.log(res);

      const updatedTask: Task = {
        ...selectedTask,
        ...formData,
      };
      updateTaskInStore(updatedTask);
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = (): void => {
    if (selectedTask) {
      setFormData({
        id: selectedTask.id,
        title: selectedTask.title,
        status: selectedTask.status,
        priority: selectedTask.priority,
        assignee: selectedTask.assignee_id,
        description: selectedTask.description,
      });
    }
    setIsEditing(false);
  };

  const handleChange = (field: keyof TaskFormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {isEditing ? 'Edit Task' : 'Task Details'}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{selectedTask.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            {isEditing ? (
              <select
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            ) : (
              <p className="text-gray-900">{selectedTask.status}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            {isEditing ? (
              <select
                value={formData.priority}
                onChange={(e) => handleChange('priority', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            ) : (
              <p className="text-gray-900">{selectedTask.priority}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assignee
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.assignee}
                onChange={(e) => handleChange('assignee', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{selectedTask.assignee_id}</p>
            )}
          </div>

          {selectedTask.description && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <p className="text-gray-900 text-sm">
                {selectedTask.description}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save'}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleClose}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Close
              </button>
              {loggedInUser?.roles.find(
                (role) => role.name === 'Administrators'
              ) && (
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Edit
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailModal;
