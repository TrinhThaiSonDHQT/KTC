import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const State2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  
  return (
    <div className="flex justify-center items-center p-4">
      <span className="text-l">Chọn đánh giá của bạn</span>
      <div className="mx-4 flex items-center gap-x-2">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <span
              key={index}
              className={`cursor-pointer text-2xl ${
                index <= selectedIndex ? 'text-amber-400' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <FaStar />
            </span>
          );
        })}
      </div>
      <span className="px-3 py-1 font-semibold bg-green-500 text-white rounded-l">
        Bình thường
      </span>
    </div>
  );
};

export default State2;
