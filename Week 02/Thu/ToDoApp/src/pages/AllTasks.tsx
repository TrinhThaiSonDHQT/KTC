import { useEffect, useState } from 'react';
import { getTasks } from '../services';
import Table from '../components/Table';

export type Task = {
  id: number | null;
  created_time: string;
  updated_time: string;
  deleted_time: string | null;
  created_by: string | number;
  updated_by: 1;
  deleted_by: string | null;
  title: string;
  description: string | null;
  start_date: string;
  due_date: string;
  completed_date: string | null;
  priority: string;
  status: string;
  assignee_id: number | null | undefined;
  parent_id: string | null;
  project_id: string | null;
  comments?: [] | null;
  attachments?: [] | null;
};

const AllTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getAllTasks = async () => {
      const res = await getTasks();
      setTasks(res);
    };

    getAllTasks();
  }, []);

  return (
    <div className="all-tasks">
      {tasks.length > 0 && <Table tasks={tasks} />}
    </div>
  );
};

export default AllTasks;
