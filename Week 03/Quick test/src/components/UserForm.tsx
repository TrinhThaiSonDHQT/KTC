import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { UserContext } from '../contexts';

const schema = yup
  .object({
    name: yup
      .string()
      .min(2, 'Minimum 2 characters')
      .required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    age: yup
      .number()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .positive('Age must be positive')
      .integer('Invalid age'),
  })
  .required();

const UserForm = () => {
  const userContext = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    // console.log(data);
    const user = { ...data };
    user.id = crypto.randomUUID();
    // console.log(user);
    userContext?.setUsers((prev) => [...prev, user]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] rounded-lg p-4 flex flex-col gap-3 bg-gray-100"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border-1 border-solid border-gray-400 rounded-lg p-2"
          {...register('name')}
          type="text"
          placeholder="Enter your name"
        />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="border-1 border-solid border-gray-400 rounded-lg p-2"
          {...register('email')}
          type="text"
          placeholder="Enter your email"
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          className="border-1 border-solid border-gray-400 rounded-lg p-2"
          {...register('age')}
          type="text"
          placeholder="Enter your age"
        />
        <p className="text-red-500">{errors.age?.message}</p>
      </div>

      <input
        type="submit"
        className="bg-blue-500 text-xl font-semibold text-white px-4 py-2 rounded-xl w-fit mx-auto cursor-pointer"
        value="Submit"
      />
    </form>
  );
};

export default UserForm;
