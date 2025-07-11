import { useEffect, useState } from 'react';
import { getTasks } from '../services';
import Table from '../components/Table';

export type Task = {
  id?: string | number;

  title: string;
  description?: string;

  start_date: Date;
  due_date?: Date;

  status: 'to_do' | 'in_progress' | 'done';
  completed_date?: Date;
  priority: 'low' | 'medium' | 'high';

  assignee_id?: number;

  created_by?: number;
  created_time: Date;

  updated_by?: number;
  updated_time: Date;
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
