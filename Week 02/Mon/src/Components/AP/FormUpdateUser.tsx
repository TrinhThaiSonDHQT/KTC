import { useState } from 'react';
import type { User } from './AP';

type Props = {
  user?: User | null;
  onHideForm: () => void;
  onUpdateUserInfo?: (user: any) => void;
  onCreatUser?: (user: any) => void;
  typeOfForm: string;
};

const FormUpdateUser = ({
  user,
  onHideForm,
  onUpdateUserInfo,
  onCreatUser,
  typeOfForm,
}: Props) => {
  const [userInputs, setUserInputs] = useState({
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    phoneNumber: user?.phoneNumber,
    address: user?.address,
    email: user?.email,
    birthday: user?.birthday,
  });

  const formHandling = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (typeOfForm === 'Create New User') {
      if (onCreatUser) {
        onCreatUser(userInputs);
      }
    } else {
      if (onUpdateUserInfo) {
        onUpdateUserInfo(userInputs);
      }
    }
  };

  return (
    <form className="w-[400px] mx-auto bg-slate-800 p-3 rounded flex flex-col gap-3">
      {/* Button hide form */}
      <div className="flex justify-end">
        <strong
          className="text-3xl text-white cursor-pointer"
          onClick={onHideForm}
        >
          x
        </strong>
      </div>

      {/* First name */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={userInputs.firstName}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        <label
          htmlFor="floating_first_name"
          className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          First name
        </label>
      </div>

      {/* Last name */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_last_name"
          id="floating_last_name"
          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={userInputs.lastName}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <label
          htmlFor="floating_last_name"
          className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Last name
        </label>
      </div>

      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={userInputs.email}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>

      {/* Phone number */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="floating_phone"
          id="floating_phone"
          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={userInputs.phoneNumber}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
        <label
          htmlFor="floating_phone"
          className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone number (123-456-7890)
        </label>
      </div>

      {/* Address */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_address"
          id="floating_address"
          className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={userInputs.address}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, address: e.target.value }))
          }
        />
        <label
          htmlFor="floating_address"
          className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address
        </label>
      </div>
      <button
        type="submit"
        className="capitalize text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue- cursor-pointer"
        onClick={(e) => formHandling(e)}
      >
        {typeOfForm}
      </button>
    </form>
  );
};

export default FormUpdateUser;
