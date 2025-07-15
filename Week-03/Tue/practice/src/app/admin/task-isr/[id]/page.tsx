import { baseUrl, defaultHeader } from '@/utils/constants';

// export const dynamic = 'force-dynamic';
export const revalidate = 10;
export const dynamicParams = true;
export const dynamic = 'force-static';

export default async function TaskISRDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: 'GET',
    headers: defaultHeader,
  });
  const task = await response.json();
  // console.log(task);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tasks SSR</h1>
        <hr className="mb-4 border-gray-200 border-t" />
        <div className="p-3 rounded-lg">
          <p className="text-lg">
            <span className="font-semibold">ID:</span> {task.id}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Title:</span> {task.title}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Description:</span>{' '}
            {task.description}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Start date:</span>{' '}
            {task.start_date.toLocaleString()}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Due data:</span>{' '}
            {task.due_date.toLocaleString()}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Priority:</span> {task.priority}
          </p>
        </div>
      </div>
    </div>
  );
}
