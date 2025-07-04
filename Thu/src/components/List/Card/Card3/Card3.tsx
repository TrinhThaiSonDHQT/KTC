import { FaStar } from 'react-icons/fa';

type props = {
  sale: number;
  image: string;
  shopName: string;
  newPrice: string;
  oldPrice: string;
  saleOff: number;
  title: string;
  sold: number;
};

const Card3 = ({
  sale,
  image,
  shopName,
  newPrice,
  oldPrice,
  saleOff,
  title,
  sold,
}: props) => {
  return (
    <div className="card3 w-[290px] mt-[30px]">
      <div>
        <div className="flex justify-end">
          <span className="text-white bg-orange-400 px-3 py-2 rounded-l">
            -{sale}%
          </span>
        </div>
        <img
          src={image}
          alt="image"
          title="image"
          className="mt-2 mb-[25px]"
        />
      </div>

      <p className="text-xl text-gray-400 font-semibold uppercase mb-[5px]">
        {shopName}
      </p>

      <hr className="mb-[15px] border-1 border-solid border-gray-400" />

      <div className="price flex justify-between items-center mb-[20px] w-[85%]">
        <span className="text-xl font-bold text-green-700">${newPrice}</span>
        <span className="text-l text-gray-400 line-through">${oldPrice}</span>
        <span className="text-l text-red-500">{saleOff}% off</span>
      </div>

      <p className="text-blue-500 text-l font-semibold mb-2">{title}</p>

      <div className="flex text-l gap-2 mb-3">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <span key={index}>
              <FaStar style={{ color: 'yellow' }} />
            </span>
          );
        })}
        <span>
          <FaStar />
        </span>
      </div>

      <div className="progress-bar h-[13px] bg-gray-200 mb-2">
        <div className="bg-yellow-300 w-[80%] h-full"></div>
      </div>

      <span className="text-l text-gray-400">Sold: {sold}</span>
    </div>
  );
};

export default Card3;
