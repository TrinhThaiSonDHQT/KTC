import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './App.css';

type Inputs = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  birthday: string;
  gender: string;
  country: string;
  hobbies: (string | undefined)[] | undefined;
  bio: string | undefined;
};

const schema = yup
  .object({
    userName: yup
      .string()
      .required('Full Name is required')
      .min(3, 'Full Name must be at least 3 characters.'),
    email: yup
      .string()
      .required('Email is required')
      .email('Must be a valid email format.'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters.')
      .matches(/[A-Za-z]/, 'Password must contain letters.')
      .matches(/[0-9]/, 'Password must contain numbers.'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match.'),
    phoneNumber: yup
      .string()
      .required('Phone Number is required')
      .matches(/^\d{10,}$/, 'Phone Number must be at least 10 digits.'),
    gender: yup
      .string()
      .required('Gender is required')
      .oneOf(['male', 'female', 'other'], 'Must select a gender.'),
    birthday: yup
      .string()
      .required('Date of Birth is required')
      .test('age', 'User must be at least 18 years old.', (value) => {
        if (!value) return false;
        const today = new Date();
        const dob = new Date(value);
        const age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        return (
          age > 18 || (age === 18 && m >= 0 && today.getDate() >= dob.getDate())
        );
      }),
    country: yup
      .string()
      .required('Country is required')
      .notOneOf([''], 'Must select a country.'),
    hobbies: yup
      .array()
      .of(yup.string())
      .min(1, 'Must select at least one hobby.'),
    bio: yup
      .string()
      .max(300, 'Bio must be at most 300 characters.')
      .notRequired(),
  })
  // .shape({
  //   hobbies: yup
  //     .array()
  //     .of(yup.string())
  //     .min(1, 'Must select at least one hobby.'),
  // })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h1>

        <form
          id="registrationhtmlForm"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 "
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your Name"
              {...register('userName')}
            />
            <p id="nameError" className="text-red-500 text-xs mt-1 ">
              {/* Please Enter Your Name */}
              <span>{errors.userName?.message}</span>
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 "
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your email"
              {...register('email')}
            />
            <p id="emailError" className="text-red-500 text-xs mt-1 ">
              {/* Please Enter Your Email */}
              <span>{errors.email?.message}</span>
            </p>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 "
            >
              password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="password"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your password"
              {...register('password')}
            />
            <p
              id="passwordError"
              className="text-red-500 text-xs mt-1 "
            >
              {/* Please Enter Your password */}
              <span>{errors.password?.message}</span>
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirm password"
              className="block text-sm font-medium text-gray-700 "
            >
              confirm password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="confirm password"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm password"
              {...register('confirmPassword')}
            />
            <p
              id="confirmPasswordError"
              className="text-red-500 text-xs mt-1 "
            >
              {/* Confirm password is invalid! */}
              <span>{errors.confirmPassword?.message}</span>
            </p>
          </div>

          {/* Phone number */}
          <div className="mb-4">
            <label
              htmlFor="phone number"
              className="block text-sm font-medium text-gray-700 "
            >
              phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone number"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your phone number"
              {...register('phoneNumber')}
            />
            <p
              id="pNumberError"
              className="text-red-500 text-xs mt-1 "
            >
              {/* Please Enter Your phone number */}
              <span>{errors.phoneNumber?.message}</span>
            </p>
          </div>

          {/* Birthday */}
          <div className="mb-4">
            <label
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700 "
            >
              birthday <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="birthday"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="YYYY-MM-DD"
              {...register('birthday')}
            />
            <p
              id="birthdayError"
              className="text-red-500 text-xs mt-1 "
            >
              {/* Invalid date! */}
              <span>{errors.birthday?.message}</span>
            </p>
          </div>

          {/* Gender  */}
          <div className="mb-4">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male" className="ml-2">
              Male
            </label>
            <input
              type="radio"
              id="female"
              value="female"
              className="ml-4"
              {...register('gender')}
            />
            <label htmlFor="female" className="ml-2">
              Female
            </label>
            <input
              type="radio"
              id="other"
              value="other"
              className="ml-4"
              {...register('gender')}
            />
            <label htmlFor="other" className="ml-2">
              Other
            </label>
            <input
              type="radio"
              id="other"
              value="other"
              className="ml-4"
              {...register('gender')}
            />
            <p
              id="genderError"
              className="text-red-500 text-xs mt-1 "
            >
              {/* Please select your gender. */}
              <span>{errors.gender?.message}</span>
            </p>
          </div>

          {/* Country  */}
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register('country')}
            >
              <option value="">Select your country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
            </select>
            <p id="countryError" className="text-red-500 text-xs mt-1">
              {/* Please select a valid country. */}
              <span>{errors.country?.message}</span>
            </p>
          </div>

          {/* Hobbies  */}
          <div className="mb-4">
            <ul className="text-sm font-medium text-gray-700 flex flex-col gap-y-2">
              <p>Hobbies (Optional)</p>
              <li>
                <input
                  type="checkbox"
                  id="dance"
                  {...register('hobbies')}
                  value="Dance"
                  className="mr-1"
                />
                <label htmlFor="dance">Dance</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="music"
                  {...register('hobbies')}
                  value="Music"
                  className="mr-1"
                />
                <label htmlFor="music">Music</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="sports"
                  {...register('hobbies')}
                  value="Sports"
                  className="mr-1"
                />
                <label htmlFor="sports">Sports</label>
              </li>
            </ul>
            <p id="hobbiesError" className="text-red-500 text-xs mt-1">
              {/* Hobbies are required. */}
              <span>{errors.hobbies?.message}</span>
            </p>
          </div>

          {/* { Bio } */}
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              {...register('bio')}
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your bio"
              rows={4}
              maxLength={300}
            ></textarea>
            <p id="bioError" className="text-red-500 text-xs mt-1">
              {/* Bio is required. */}
              <span>{errors.bio?.message}</span>
            </p>
          </div>

          {/* { Submit Button  } */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
