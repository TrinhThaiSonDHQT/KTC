import FormLayout from '../../FormLayout/FormLayout';
import SignUp from '../../SignUp/SignUp';
import Login from '../../Login/Login';

const Exercise1 = () => {
  return (
    <div className="m-5 bg-[#F8C0BD] rounded-xl flex items-center justify-center gap-6 py-7">
      <FormLayout title="Sign up">
        <SignUp />
      </FormLayout>

      <FormLayout title="Login">
        <Login />
      </FormLayout>
    </div>
  );
};

export default Exercise1;
