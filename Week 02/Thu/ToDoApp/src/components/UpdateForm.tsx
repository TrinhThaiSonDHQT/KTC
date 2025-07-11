import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import type { Task } from '../pages/AllTasks';
import { createTask, updateTask } from '../services';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

type Props = {
  task?: Task;
  onHideForm?: () => void;
  hasCreateTask?: boolean;
};

const schema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  start_date: yup
    .string()
    .required('Start date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date'),
  due_date: yup
    .string()
    .optional()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date')
    .test(
      'due_date-after-start_date',
      'Due date must be after start date',
      function (value) {
        if (!value) return true;
        const { start_date } = this.parent;
        return new Date(value) >= new Date(start_date);
      }
    ),
  description: yup
    .string()
    .optional()
    .max(500, 'Description must be less than 500 characters'),
  status: yup
    .mixed<'to_do' | 'in_progress' | 'done'>()
    .required('Status is required')
    .oneOf(['to_do', 'in_progress', 'done'], 'Please select a valid status'),
  priority: yup
    .mixed<'low' | 'medium' | 'high'>()
    .required('Priority is required')
    .oneOf(['low', 'medium', 'high'], 'Please select a valid priority'),
  assignee_id: yup
    .number()
    .min(1, 'Assignee ID must be a positive number')
    .test('assignee_id', 'Assignee ID cannot be empty if provided', (value) => {
      if (!value) return true;
      return !isNaN(Number(value)) && Number(value) >= 1;
    })
    .required('assignee_id is required!'),
});

const UpdateForm = ({ task, onHideForm, hasCreateTask = false }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    if (hasCreateTask) {
      try {
        const res = await createTask(data);
        // console.log(res);
        if (res.error) {
          toast.error('Error!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        }

        toast.success('Create task sucessfully!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      } catch (error) {}
    } else {
      if (task && task.id) {
        try {
          if (typeof task.id === 'number') {
            const res = await updateTask(task.id, data);
            if (res.error || res.message) {
              toast.error('Error!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
              });
            } else {
              toast.success('Update task sucessfully!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
              });
              navigate('/all-tasks');
            }
          }
        } catch (error) {
          console.error('Error creating task:', error);
          alert('Failed to create task. Please try again.');
        }
      }
    }
  };

  useEffect(() => {
    const assignTaskValue = async () => {
      if (task && task.id) {
        reset({
          title: task.title,
          start_date: task.start_date
            ? task.start_date.toString().split('T')[0]
            : '', // Format date to YYYY-MM-DD
          due_date: task.due_date ? task.due_date.toString().split('T')[0] : '', // Format date to YYYY-MM-DD

          description: task.description,
          status: task.status,
          priority: task.priority,
          assignee_id: task.assignee_id,
        });
      }
    };

    assignTaskValue();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-[450px] bg-slate-800 text-white p-4 rounded-2xl "
    >
      {onHideForm && (
        <button
          onClick={onHideForm}
          className="cursor-pointer self-end text-2xl"
        >
          <strong>X</strong>
        </button>
      )}

      {/* Title */}
      <div className="flex flex-col gap-1">
        <label className="cursor-pointer font-semibold" htmlFor="title">
          Title:
        </label>
        <input
          className=" p-2 border-1 border-solid border-slate-300 rounded"
          {...register('title')}
          type="text"
          id="title"
          name="title"
          placeholder="Enter task title"
        />
        {errors.title && (
          <p className="error text-red-500 font-semibold">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <label className="cursor-pointer font-semibold" htmlFor="description">
          Description:
        </label>
        <input
          className=" p-2 border-1 border-solid border-slate-300 rounded"
          {...register('description')}
          type="text"
          id="description"
          name="description"
          placeholder="Enter task description"
        />
        {errors.description && (
          <p className="error text-red-500 font-semibold">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* start_date */}
      <div className="flex flex-col gap-1">
        <label className="cursor-pointer font-semibold" htmlFor="start_date">
          Start Date:
        </label>
        <input
          className="p-2 border-1 border-solid border-slate-300 rounded color-white"
          {...register('start_date')}
          type="date"
          id="start_date"
          name="start_date"
          placeholder="YYYY-MM-DD"
        />
        {errors.start_date && (
          <p className="error text-red-500 font-semibold">
            {errors.start_date.message}
          </p>
        )}
      </div>

      {/* due_date */}
      <div className="flex flex-col gap-1">
        <label className="cursor-pointer font-semibold" htmlFor="due_date">
          Due Date:
        </label>
        <input
          className=" p-2 border-1 border-solid border-slate-300 rounded"
          {...register('due_date')}
          type="date"
          id="due_date"
          name="due_date"
          placeholder="YYYY-MM-DD"
        />
        {errors.due_date && (
          <p className="error text-red-500 font-semibold">
            {errors.due_date.message}
          </p>
        )}
      </div>

      {/* Status */}
      <div className="flex flex-col gap-1">
        <label className="cursor-pointer font-semibold" htmlFor="status">
          Status:
        </label>
        <select
          {...register('status')}
          id="status"
          name="status"
          className="p-2 border-1 border-solid border-slate-300 rounded"
        >
          <option className="text-slate-800" value="to_do">
            To Do
          </option>
          <option className="text-slate-800" value="in_progress">
            In Progress
          </option>
          <option className="text-slate-800" value="done">
            Done
          </option>
        </select>
        {errors.status && (
          <p className="error text-red-500 font-semibold">
            {errors.status.message}
          </p>
        )}
      </div>

      {/* Priority */}
      <div className="flex flex-col gap-1">
        <label className="cursor-pointer font-semibold" htmlFor="priority">
          Priority:
        </label>
        <select
          {...register('priority')}
          id="priority"
          name="priority"
          className=" p-2 border-1 border-solid border-slate-300 rounded"
        >
          <option className="text-slate-800" value="low">
            Low
          </option>
          <option className="text-slate-800" value="medium">
            Medium
          </option>
          <option className="text-slate-800" value="high">
            High
          </option>
        </select>
        {errors.priority && (
          <p className="error text-red-500 font-semibold">
            {errors.priority.message}
          </p>
        )}
      </div>

      {/* Assignee Id */}
      <div className="flex flex-col gap-1">
        <label className="cursor-pointer font-semibold" htmlFor="assignee_id">
          Assignee ID:
        </label>
        <input
          className=" p-2 border-1 border-solid border-slate-300 rounded"
          {...register('assignee_id')}
          type="text"
          id="assignee_id"
          name="assignee_id"
          placeholder="Enter assignee ID"
        />
        {errors.assignee_id && (
          <p className="error text-red-500 font-semibold">
            {errors.assignee_id.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="cursor-pointer text-xl font-semibold px-6 py-3 bg-blue-500 rounded-xl w-fit self-center"
      >
        {hasCreateTask ? 'Create Task' : 'Update Task'}
      </button>
    </form>
  );
};

export default UpdateForm;
