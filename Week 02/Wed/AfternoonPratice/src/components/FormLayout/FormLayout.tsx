import { IoIosArrowBack } from 'react-icons/io';
import background from '../../assets/images/black-woman.webp';

type props = {
  title: string;
  children: React.ReactNode;
};

const FormLayout = ({ title, children }: props) => {
  return (
    <div
      className="w-[320px] h-fit min-h-[570px] rounded-2xl p-3 text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <IoIosArrowBack color="white" size={25} />
      </div>
      <p className='mt-[100px] mb-[15px] text-3xl font-bold'>{title}</p>
      <div className='backdrop-grayscale bg-white/20 p-3 rounded-xl'>{children}</div>
    </div>
  );
};

export default FormLayout;
