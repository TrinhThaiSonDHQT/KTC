import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../components/Table';
import type { Task } from './AllTasks';
import { getUserTasks } from '../services';

const MyTasks = () => {
  const { id } = useParams();
  const [userTasks, setUserTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getAllUserTasks = async () => {
      if (id) {
        const res = await getUserTasks(Number.parseInt(id));
        setUserTasks(res);
      }
    };

    getAllUserTasks();
  }, []);

  return (
    <div>
      <Table tasks={userTasks} actionSection={true}/>
    </div>
  );
};

export default MyTasks;
