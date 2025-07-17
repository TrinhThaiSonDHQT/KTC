'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Plus, Eye, Edit, Trash2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import TaskModal from '@/components/ui/TaskModal';
import TaskDetailModal from '@/components/ui/TaskDetailModal';
import DeleteTaskDialog from '@/components/ui/DeleteTaskDialog';
import { Task } from '@/types';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Design Homepage',
        description:
          'Create a modern and responsive homepage design for the company website',
        status: 'in-progress',
        priority: 'high',
        dueDate: '2024-01-25',
        createdAt: '2024-01-15',
        updatedAt: '2024-01-16',
      },
      {
        id: '2',
        title: 'Database Migration',
        description:
          'Migrate user data from old database to new PostgreSQL instance',
        status: 'pending',
        priority: 'medium',
        dueDate: '2024-01-30',
        createdAt: '2024-01-14',
        updatedAt: '2024-01-14',
      },
      {
        id: '3',
        title: 'API Documentation',
        description:
          'Write comprehensive API documentation for the REST endpoints',
        status: 'completed',
        priority: 'low',
        dueDate: '2024-01-20',
        createdAt: '2024-01-10',
        updatedAt: '2024-01-18',
      },
    ];

    setTimeout(() => {
      setTasks(mockTasks);
      setFilteredTasks(mockTasks);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchTerm, tasks]);

  const handleCreateTask = (
    taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
    };
    setTasks((prev) => [...prev, newTask]);
    setIsCreateModalOpen(false);
  };

  const handleUpdateTask = (
    taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    if (!selectedTask) return;

    const updatedTask: Task = {
      ...selectedTask,
      ...taskData,
      updatedAt: new Date().toISOString().split('T')[0],
    };

    setTasks((prev) =>
      prev.map((task) => (task.id === selectedTask.id ? updatedTask : task))
    );
    setIsEditModalOpen(false);
    setSelectedTask(null);
  };

  const handleDeleteTask = () => {
    if (!selectedTask) return;

    setTasks((prev) => prev.filter((task) => task.id !== selectedTask.id));
    setIsDeleteDialogOpen(false);
    setSelectedTask(null);
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Create Task
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredTasks.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <p className="text-gray-500 mb-4">No tasks found</p>
                <Button onClick={() => setIsCreateModalOpen(true)}>
                  Create your first task
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{task.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {task.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedTask(task);
                        setIsDetailModalOpen(true);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedTask(task);
                        setIsEditModalOpen(true);
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedTask(task);
                        setIsDeleteDialogOpen(true);
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(task.status)}>
                      {task.status.replace('-', ' ')}
                    </Badge>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <TaskModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateTask}
        title="Create New Task"
      />

      <TaskModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedTask(null);
        }}
        onSubmit={handleUpdateTask}
        title="Edit Task"
        initialData={selectedTask}
      />

      <TaskDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedTask(null);
        }}
        task={selectedTask}
      />

      <DeleteTaskDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedTask(null);
        }}
        onConfirm={handleDeleteTask}
        taskTitle={selectedTask?.title || ''}
      />
    </div>
  );
}
