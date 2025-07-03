// import './Card1.css';

type props = {
  image: string;
  title: string;
  views: number;
};

const Card1 = ({ image, title, views }: props) => {
  return (
    <div>
      <img src={image} className='w-[290px] rounded-xl'/>
      <p className='text-l font-semibold'>{title}</p>
      <span className='text-sm text-red-400'>{views} lượt xem</span>
    </div>
  );
};

export default Card1;
