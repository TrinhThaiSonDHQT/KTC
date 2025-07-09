import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

type Inputs = {
  userName: string;
  password: string;
};

const schema = yup
  .object({
    userName: yup.string().required('Name is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  })
  .required();

const SignUp = () => {
  const [userName, setUserName] = useState('');
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 text-sm">
      <p>
        Looks like you don't have an account. Let's create a new account for{' '}
        <strong>{userName ? userName : '...'}@gmail.com</strong>
      </p>

      <div className="mt-2">
        <div className="h-[72px] mb-1">
          <div className="flex flex-col px-2 py-1 rounded bg-white focus-within:outline-3 focus-within:outline-green-300">
            <label
              htmlFor="username"
              className="text-gray-500 text-xs font-bold cursor-pointer"
            >
              Name
            </label>
            <input
              id="username"
              {...register('userName')}
              className="outline-none text-black"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <span className="text-red-600">{errors.userName?.message}</span>
        </div>

        <div className="h-[72px]">
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
          {}
          <span className="text-red-600">{errors.password?.message}</span>
        </div>
      </div>

      <p className="font-semibold">
        By selecting Agree and continue below, I agree to{' '}
        <span className="text-green-500">
          Terms of Service and Privacy Policy
        </span>
      </p>

      <input
        type="submit"
        className="block bg-green-400 text-center text-base font-semibold py-3 rounded-lg cursor-pointer"
        value="Agree and continue"
      />
    </form>
  );
};

export default SignUp;
