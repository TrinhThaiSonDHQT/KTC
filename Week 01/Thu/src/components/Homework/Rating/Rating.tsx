import { useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';

const Rating = () => {
  const [rating, setRating] = useState(-1);

  const handleClick = (index: number) => {
    setRating(index);
  };

  return (
    <div className="rating">
      <p className="text-3xl font-bold ">Rating</p>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <span
              key={index}
              className={`${
                index <= rating ? 'text-yellow-300' : ''
              } cursor-pointer text-3xl`}
              onClick={() => handleClick(index)}
            >
              {index <= rating ? <IoMdStar /> : <IoMdStarOutline />}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
