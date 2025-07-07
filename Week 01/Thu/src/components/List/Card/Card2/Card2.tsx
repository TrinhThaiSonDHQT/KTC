type props = {
  image: string;
  title: string;
  newPrice: string;
  oldPrice?: string;
  sale?: number;
};

const Card1 = ({ image, title, newPrice, oldPrice, sale }: props) => {
  return (
    <div>
      <div className="relative">
        <img src={image} className="w-[290px] rounded-xl" />
        {sale && (
          <span className="absolute right-0 top-[10%] px-3 py-2 text-l text-white font-semibold bg-orange-500 rounded-xl">
            -{sale} %
          </span>
        )}
      </div>
      <p className="text-l font-semibold">{title}</p>
      <div>
        <span className="text-xl font-semibold text-red-500 mr-2">
          {newPrice}
        </span>
        {oldPrice && (
          <span className="text-gray-400 line-through">{oldPrice}</span>
        )}
      </div>
    </div>
  );
};

export default Card1;
