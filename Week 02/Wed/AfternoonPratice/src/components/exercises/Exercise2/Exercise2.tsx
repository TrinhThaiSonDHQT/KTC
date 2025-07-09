import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  conPassword: string;
};

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(2, 'First name must contain at least 2 characters')
      .required('First name is required'),
    lastName: yup
      .string()
      .min(2, 'Last name must contain at least 2 characters')
      .required('Last name  is required'),
    phoneNumber: yup
      .string()
      .matches(/^\d{10,15}$/, 'Phone number must be 10-15 digits')
      .required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/^\S*$/, 'Password must not contain spaces')
      .required('Password is required'),
    conPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  })
  .required();

const Exercise2 = () => {
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
    <div className="flex p-5 gap-[50px]">
      <div className="bg-blue-500 w-[35%] p-[40px] hidden md:block">
        <h1 className="text-white lg:text-xl md:text-lg font-semibold mt-[40px]">
          A few clicks away from creating your Lottery Display
        </h1>
        <img
          src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/lottery-display.svg"
          alt="image"
        />
      </div>

      <div className="flex flex-col flex-1 gap-5 font-bold py-4">
        <h1 className="text-3xl">Register</h1>

        <div className="mt-[30px]">
          <p className="mb-3 text-lg">Manage all you lottery efficiently</p>
          <p className="text-sm text-gray-400">
            Let's get you all set up so you can verify your personal account and
            begin setting up your profile
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="firstName" className="cursor-pointer">
                First Name
              </label>
              <input
                id="firstName"
                {...register('firstName')}
                className="outline-none font-medium p-2 border-1 border-solid border-gray-400 rounded"
                type="text"
              />
              <span className='text-red-600 text- font-medium'>{errors.firstName?.message}</span>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="lastName" className="cursor-pointer">
                Last Name
              </label>
              <input
                id="lastName"
                {...register('lastName')}
                className="outline-none font-medium p-2 border-1 border-solid border-gray-400 rounded"
                type="text"
              />
              <span className='text-red-600 text- font-medium'>{errors.lastName?.message}</span>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="cursor-pointer">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                {...register('phoneNumber')}
                className="outline-none font-medium p-2 border-1 border-solid border-gray-400 rounded"
                type="text"
              />
              <span className='text-red-600 text- font-medium'>{errors.phoneNumber?.message}</span>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="email" className="cursor-pointer">
                Email
              </label>
              <input
                id="email"
                {...register('email')}
                className="outline-none font-medium p-2 border-1 border-solid border-gray-400 rounded"
                type="email"
              />
              <span className='text-red-600 text- font-medium'>{errors.email?.message}</span>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="password" className="cursor-pointer">
                Password
              </label>
              <input
                id="password"
                {...register('password')}
                className="outline-none font-medium p-2 border-1 border-solid border-gray-400 rounded"
                type="password"
              />
              <span className='text-red-600 text- font-medium'>{errors.password?.message}</span>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="conPassword" className="cursor-pointer">
                Confirm Password
              </label>
              <input
                id="conPassword"
                {...register('conPassword')}
                className="outline-none font-medium p-2 border-1 border-solid border-gray-400 rounded"
                type="password"
              />
              <span className='text-red-600 text- font-medium'>{errors.conPassword?.message}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-sm text-gray-400">
                Yes, I want to receive Lottery Display emails
              </span>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-sm text-gray-400">
                I agree all the{' '}
                <strong className="text-blue-500">Term Privacy Policy</strong>{' '}
                and <strong className="text-blue-500">Fees</strong>
              </span>
            </div>
          </div>

          <input
            type="submit"
            className="text-white w-[200px] rounded text-center py-2 bg-blue-600"
            value="Create Account"
          />
        </form>

        <a className="cursor-pointer">
          Already have an account?{' '}
          <strong className="text-blue-500">Log in</strong>
        </a>
      </div>
    </div>
  );
};

export default Exercise2;
