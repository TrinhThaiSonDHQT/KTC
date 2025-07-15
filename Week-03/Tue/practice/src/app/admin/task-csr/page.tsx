'use client';

import { Task } from '@/types';
import { baseUrl, defaultHeader } from '@/utils/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TasksCSR = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch(`${baseUrl}/workspaces/tasks`, {
        method: 'GET',
        headers: defaultHeader,
      });
      const tasks = await response.json();
      setTasks(tasks);
    };

    getTasks();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tasks CSR</h1>
        <hr className="mb-4 border-gray-200 border-t" />
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task: Task) => (
              <li
                key={task.id}
                className="border-b border-gray-200 py-2 text-gray-800"
              >
                <Link
                  href={`/admin/task-isr/${task.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {task.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-2xl font-semibold">EMPTY</p>
        )}
      </div>
    </div>
  );
};

export default TasksCSR;
