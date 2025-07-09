import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import avatar from '../../assets/images/black-woman.webp';

type Inputs = {
  password: string;
};

const schema = yup
  .object({
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 text-sm"
    >
      <div className="flex items-center gap-4">
        <img
          className="w-[50px] h-[50px] rounded-[50%]"
          src={avatar}
          alt="avatar"
        />
        <div>
          <p className="font-bold">Jane Dow</p>
          <p className="text-gray-300">jane.doe@gmail.com</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className="h-[65px]">
          <div className="flex flex-col px-2 py-1 rounded bg-white focus-within:outline-3 focus-within:outline-green-300">
            <label
              htmlFor="password"
              className="text-gray-500 text-xs font-bold cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
              {...register('password')}
              className="outline-none text-black"
              type="password"
            />
          </div>
          {/* errors will return when field validation fails  */}
          <span className="text-red-600">{errors.password?.message}</span>
        </div>

        <input
          type="submit"
          className="block w-full bg-green-400 text-center text-base font-semibold py-3 rounded-lg cursor-pointer"
          value="Continue"
        />
      </div>

      <a className="text-green-500 font-semibold">Forgot your password?</a>
    </form>
  );
};

export default Login;
