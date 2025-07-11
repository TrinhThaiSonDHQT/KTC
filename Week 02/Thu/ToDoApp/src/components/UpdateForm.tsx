import { useState, type FormEvent } from 'react';
import type { Task } from '../pages/AllTasks';

type Props = {
  task: Task;
  onHideForm: () => void
};

const UpdateForm = ({ task, onHideForm }: Props) => {
  const [updateTask, setUpdateTask] = useState<Task | {}>({
    id: task.id,
    created_time: task.created_time,
    updated_time: task.updated_time,
    deleted_time: task.deleted_time,
    created_by: task.created_by,
    updated_by: 1,
    deleted_by: task.deleted_by,
    title: task.title,
    description: task.description,
    start_date: task.start_date,
    due_date: task.due_date,
    completed_date: task.completed_date,
    priority: task.priority,
    status: task.status,
    assignee_id: task.assignee_id,
    parent_id: task.parent_id,
    project_id: task.project_id,
    comments: task.comments,
    attachments: task.attachments,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[500px] bg-slate-800 text-white p-4 rounded-2xl absolute top-0 left-[50%] translate(-50%, -50%)">
      <button onClick={onHideForm} className='cursor-pointer self-end text-2xl'>
        <strong>X</strong>
      </button>
      {Object.entries(updateTask).map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-1">
            <label htmlFor={item[0]} className="cursor-pointer font-semibold">
              {item[0]}
            </label>
            <input
              id={item[0]}
              // {...register('firstName')}
              className=" p-2 border-1 border-solid border-slate-300 rounded"
              type="text"
              value={`${item[1]}`}
            />
            <span className="text-red-600">
              {/* {errors.firstName?.message} */}
            </span>
          </div>
        );
      })}

      <button type='submit' className='cursor-pointer text-xl font-semibold px-3 py-2 bg-blue-500 rounded-xl w-fit self-center'>Update Task</button>
    </form>
  );
};

export default UpdateForm;
