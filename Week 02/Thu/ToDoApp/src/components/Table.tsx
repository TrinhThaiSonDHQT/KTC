import { useState } from 'react';
import 'reactjs-popup/dist/index.css';

import type { Task } from '../pages/AllTasks';
import { getTaskByID } from '../services';
import UpdateForm from './UpdateForm';

type Props = {
  tasks: Task[];
  actionSection?: boolean;
};

const Table = ({ tasks, actionSection = false }: Props) => {
  const [task, setTask] = useState<Task | null>(null);

  const showForm = async (taskID: any) => {
    if (actionSection) {
      const res = await getTaskByID(taskID);
      if (!res.ok) {
        throw new Error('Failed to fetch tasks');
      } else {
        const data = await res.json();
        // console.log(data);
        setTask(data);
      }
    }
  };

  const handleHideForm = () => {
    setTask(null);
  };

  // const handleDeleteTask = (
  //   event: React.MouseEvent<HTMLButtonElement>,
  //   taskID: any
  // ) => {
  //   event.stopPropagation();
  // };

  return (
    <>
      {tasks.length > 0 ? (
        <div>
          {task && <UpdateForm task={task} onHideForm={handleHideForm} />}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead>
              <tr className="text-base text-gray-700 uppercase bg-gray-200">
                <th className="px-6 py-2">ID</th>
                <th className="px-6 py-2">Title</th>
                <th className="px-6 py-2">Description</th>
                <th className="px-6 py-2">Status</th>
                <th className="px-6 py-2">Priority</th>
                <th className="px-6 py-2">Due Date</th>
                <th className="px-6 py-2">Assignee</th>
                {actionSection && <th className="px-6 py-2">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <tr
                    key={task.id}
                    className="bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-200"
                    onClick={() => showForm(task.id)}
                  >
                    <td className="px-6 py-4">{task.id}</td>
                    <td className="px-6 py-4">{task.title}</td>
                    <td className="px-6 py-4">{task.description}</td>
                    <td className="px-6 py-4">{task.status}</td>
                    <td className="px-6 py-4">{task.priority}</td>
                    <td className="px-6 py-4">
                      {task.due_date
                        ? new Date(task.due_date).toLocaleDateString()
                        : ''}
                    </td>
                    <td className="px-6 py-4">{task.assignee_id}</td>
                    {actionSection && (
                      <td className="py-4 flex gap-2">
                        <button
                          className="cursor-pointer min-w-[80px] py-2 rounded text-white font- bg-blue-600"
                          onClick={() => showForm(task.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="cursor-pointer min-w-[80px] py-2 rounded text-white font-semibold bg-red-600"
                          // onClick={(e) => handleDeleteTask(e, task.id)}
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <span>You don't have any tasks</span>
      )}
    </>
  );
};

export default Table;
