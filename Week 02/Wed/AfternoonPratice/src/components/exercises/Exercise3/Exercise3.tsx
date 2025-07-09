import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    userName: yup
      .string()
      .min(2, 'First name must contain at least 2 characters')
      .required('First name is required'),
    password: yup
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/^\S*$/, 'Password must not contain spaces')
      .required('Password is required'),
  })
  .required();

const Exercise3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:h-screen w-full lg:px-5">
        <div className="flex items-center justify-center bg-[#ECF1F4] w-full lg:w-[70%] h-[90vh] sm:h-[100vh] lg:h-[90%]">
          <div className="flex flex-col items-center w-[80%] md:w-[55%] h-[80%] md:h-[55%] sm:items-start">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Set Your Partner
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Recruiment on Auto-Pilot
            </p>
            <img
              src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/grovia.png"
              className="w-[90%] mx-auto"
            />
          </div>
        </div>

        <form
          className="rounded max-w-[450px] w-[80%] md:w-[60%] lg:flex-1"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="flex items-center gap-2 mb-6">
            <img
              src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/grovia.png"
              alt="Grovia"
              className="w-[40px] h-[40px] rounded-2xl"
            />
            <span className="text-xl font-semibold">Grovia</span>
          </div>
          <h2 className="text-2xl font-bold text-[#E94B35] mb-2">Login</h2>
          <p className="mb-6 text-gray-700 font-semibold">
            Login to your account
          </p>
          <p className="mb-6 text-gray-500 text-sm">
            Thank you for get back to Grovia, lets access our the best
            recommendation contact for you.
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="Email or Phone Number"
              {...register('userName', { required: true })}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E94B35]"
            />
            <span className="text-red-500 text-xs">
              {errors.userName?.message}
            </span>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E94B35]"
            />
            <span className="text-red-500 text-xs">
              {errors.password?.message}
            </span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2 accent-[#E94B35]" />
              Remember me
            </label>
            <a
              href="#"
              className="text-[#E94B35] text-sm font-semibold hover:underline"
            >
              Reset Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#E94B35] text-white py-2 rounded font-bold text-lg hover:bg-[#d13e2b] transition"
          >
            SIGN IN
          </button>
          <p className="mt-6 text-center text-sm">
            Don&apos;t have an account yet?{' '}
            <a
              href="#"
              className="text-[#E94B35] font-semibold hover:underline"
            >
              Join Grovia Now!
            </a>
          </p>
        </form>
        {/* <div className="flex lg:flex-1 items-start justify-end">
        </div> */}
      </div>

  );
};

export default Exercise3;
