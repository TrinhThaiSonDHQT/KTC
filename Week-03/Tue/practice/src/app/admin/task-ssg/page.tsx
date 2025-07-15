import Link from 'next/link';
import { Task } from '@/types';
import { baseUrl, defaultHeader } from '@/utils/constants';

// SSG to fetch tasks
// This function will run at build time to fetch data before rendering the page
// This page will be statically generated and served as a static HTML file
// It will not change unless the build is triggered again
// This is useful for pages that do not change often, like task listings
export const dynamic = 'force-static';

export default async function Index() {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    method: 'GET',
    headers: defaultHeader,
  });
  const tasks = await response.json();
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tasks SSG</h1>
        <hr className="mb-4 border-gray-200 border-t" />
        <ul>
          {tasks.map((task: Task) => (
            <li
              key={task.id}
              className="border-b border-gray-200 py-2 text-gray-800"
            >
              <Link
                href={`task-isr/${task.id}`}
                className="text-blue-600 hover:underline"
              >
                {task.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
