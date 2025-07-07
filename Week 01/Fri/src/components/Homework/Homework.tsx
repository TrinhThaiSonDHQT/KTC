import Calculator from './Calculator/Calculator';
import Cart from './Cart/Cart';
import RegisterhForm from './RegisterForm/RegisterForm';

const Homework = () => {
  return (
    <div className="flex flex-col gap-3 py-4  ">
      <Cart />
      <hr className="mt-3 mb-6" />
      <Calculator />
      <hr className="mt-3 mb-6" />
      <RegisterhForm />
    </div>
  );
};

export default Homework;
