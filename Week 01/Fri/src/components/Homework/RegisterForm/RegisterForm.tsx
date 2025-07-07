import { useState } from 'react';

const RegisterhForm = () => {
  const [nameField, setNameField] = useState({ value: '', error: '' });
  const [emailField, setEmailField] = useState({ value: '', error: '' });
  const [passwordField, setPasswordField] = useState({ value: '', error: '' });
  const [conPasswordField, setConPasswordField] = useState({
    value: '',
    error: '',
  });
  const [pNumberField, setPNumberField] = useState({ value: '', error: '' });
  const [birthdayField, setBirthdayField] = useState({ value: '', error: '' });

  const handleSubmitForm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    let isValid = true;

    // Name validation
    const username = nameField.value;
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!username || !nameRegex.test(username)) {
      isValid = false;
      setNameField((prev) => ({ ...prev, error: 'Please Enter Your Name!' }));
    } else {
      setNameField((prev) => ({ ...prev, error: '' }));
    }

    // Email validation
    const email = emailField.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      isValid = false;
      setEmailField((prev) => ({ ...prev, error: 'Please Enter Your Email!' }));
    } else {
      setEmailField((prev) => ({ ...prev, error: '' }));
    }

    // Password validation
    const password = passwordField.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      isValid = false;
      setPasswordField((prev) => ({
        ...prev,
        error:
          'Password must contain at least 8 characters, one letter, one digit!',
      }));
    } else {
      setPasswordField((prev) => ({ ...prev, error: '' }));
    }

    // Confirm Password validation
    const confirmPassword = conPasswordField.value;
    if (!confirmPassword || confirmPassword !== password) {
      isValid = false;
      setConPasswordField((prev) => ({
        ...prev,
        error: 'Confirm Password Is Invalid!',
      }));
    } else {
      setConPasswordField((prev) => ({ ...prev, error: '' }));
    }

    // Phone validation (optional, but must be valid if provided)
    const phone = pNumberField.value;
    const phoneRegex = /^\d{10}$|^\d{3}-\d{3}-\d{4}$/;
    if (!phone && !phoneRegex.test(phone)) {
      isValid = false;
      setPNumberField((prev) => ({
        ...prev,
        error: 'Invalid Phone Number!',
      }));
    } else {
      setPNumberField((prev) => ({ ...prev, error: '' }));
    }

    // Birthday validation (optional, but must be valid if provided)
    const birthday = birthdayField.value;
    let birthdayErrorMessage = '';
    if (birthday) {
      const today = new Date();
      const birthDate = new Date(birthday);
      if (birthDate >= today) {
        isValid = false;
        birthdayErrorMessage = 'Invalid Date';
      }
      setBirthdayField((prev) => ({ ...prev, error: birthdayErrorMessage }));
    } else {
      isValid = false;
      birthdayErrorMessage = 'Please Enter Your Name';
      setBirthdayField((prev) => ({ ...prev, error: birthdayErrorMessage }));
    }

    // // Country validation
    // const country = document.getElementById('country').value.trim();
    // if (!country) {
    //   document.getElementById('countryError').classList.remove('hidden');
    //   isValid = false;
    // }

    // // Bio validation
    // const bio = document.getElementById('bio').value.trim();
    // if (!bio) {
    //   document.getElementById('bioError').classList.remove('hidden');
    //   isValid = false;
    // }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h1>

        <form id="registrationhtmlForm" noValidate>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your Name"
              onChange={(e) =>
                setNameField((prev) => ({ ...prev, value: e.target.value }))
              }
            />
            <p id="nameError" className="text-red-500 text-xs mt-1 capitalize">
              {/* Please Enter Your Name */}
              {nameField.error}
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your email"
              onChange={(e) =>
                setEmailField((prev) => ({ ...prev, value: e.target.value }))
              }
            />
            <p id="emailError" className="text-red-500 text-xs mt-1 capitalize">
              {/* Please Enter Your Email */}
              {emailField.error}
            </p>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your password"
              onChange={(e) =>
                setPasswordField((prev) => ({ ...prev, value: e.target.value }))
              }
            />
            <p
              id="passwordError"
              className="text-red-500 text-xs mt-1 capitalize"
            >
              {/* Please Enter Your password */}
              {passwordField.error}
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirm password"
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              confirm password <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="confirm password"
              name="confirm password"
              required
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm password"
              onChange={(e) =>
                setConPasswordField((prev) => ({
                  ...prev,
                  value: e.target.value,
                }))
              }
            />
            <p
              id="confirmPasswordError"
              className="text-red-500 text-xs mt-1 capitalize"
            >
              {/* Confirm password is invalid! */}
              {conPasswordField.error}
            </p>
          </div>

          {/* Phone number */}
          <div className="mb-4">
            <label
              htmlFor="phone number"
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone number"
              name="phone number"
              required
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=" Enter your phone number"
              onChange={(e) =>
                setPNumberField((prev) => ({ ...prev, value: e.target.value }))
              }
            />
            <p
              id="pNumberError"
              className="text-red-500 text-xs mt-1 capitalize"
            >
              {/* Please Enter Your phone number */}
              {pNumberField.error}
            </p>
          </div>

          {/* Birthday */}
          <div className="mb-4">
            <label
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              birthday <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="birthday"
              name="birthday"
              required
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="YYYY-MM-DD"
              onChange={(e) =>
                setBirthdayField((prev) => ({ ...prev, value: e.target.value }))
              }
            />
            <p
              id="birthdayError"
              className="text-red-500 text-xs mt-1 capitalize"
            >
              {/* Invalid date! */}
              {birthdayField.error}
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
              name="gender"
              value="female"
              className="ml-4"
            />
            <label htmlFor="female" className="ml-2">
              Female
            </label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              className="ml-4"
            />
            <label htmlFor="other" className="ml-2">
              Other
            </label>
            <p
              id="genderError"
              className="text-red-500 text-xs mt-1 capitalize hidden"
            >
              Please select your gender.
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
              name="country"
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select your country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
            </select>
            <p id="countryError" className="text-red-500 text-xs mt-1 hidden">
              Please select a valid country.
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
                  name="dance"
                  value="Dance"
                  className="mr-1"
                />
                <label htmlFor="dance">Dance</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="music"
                  name="music"
                  value="Music"
                  className="mr-1"
                />
                <label htmlFor="music">Music</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="sports"
                  name="sports"
                  value="Sports"
                  className="mr-1"
                />
                <label htmlFor="sports">Sports</label>
              </li>
            </ul>
            <p id="hobbiesError" className="text-red-500 text-xs mt-1 hidden">
              Hobbies are required.
            </p>
          </div>

          {/* { Bio } */}
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio <span className="text-red-500">*</span>
            </label>
            <textarea
              id="bio"
              name="bio"
              required
              className="mt-1 block w-full px-3 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter your bio"
              rows={4}
              maxLength={300}
            ></textarea>
            <p id="bioError" className="text-red-500 text-xs mt-1 hidden">
              Bio is required.
            </p>
          </div>

          {/* { Submit Button  } */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={(e) => handleSubmitForm(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterhForm;
