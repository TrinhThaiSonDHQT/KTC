import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import image1 from '../../../assets/images/images-list-5/1.jpg';
import image2 from '../../../assets/images/images-list-5/2.jpg';
import image3 from '../../../assets/images/images-list-5/3.jpg';
import image4 from '../../../assets/images/images-list-5/4.jpg';
import image5 from '../../../assets/images/images-list-5/5.jpg';
import Thumbnail from './Thumbnail';
import { useState } from 'react';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      id: 0,
      src: image5,
    },
    {
      id: 1,
      src: image1,
    },
    {
      id: 2,
      src: image2,
    },
    {
      id: 3,
      src: image3,
    },
    {
      id: 4,
      src: image4,
    },
  ];

  const handleClick = (event: string) => {
    if (event === 'previous') {
      if (index > 0) {
        setIndex((prev) => prev - 1);
      }
    } else {
      if (index < 4) {
        setIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="slider">
      <p className="text-3xl font-bold ">Slide with Thumb</p>

      {/* Image */}
      <div className="flex items-center justify-center">
        <span
          className={`previous-button px-2 py-4 rounded bg-gray-300  ${
            index === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={() => handleClick('previous')}
        >
          <GrFormPrevious />
        </span>
        <img src={images[index]['src']} alt="image" />
        <span
          className={`next-button px-2 py-4 rounded bg-gray-300  ${
            index === 4 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={() => handleClick('next')}
        >
          <GrFormNext />
        </span>
      </div>

      {/* Thumbnail */}
      <div className="flex justify-center items-center gap-3">
        {images.map((item) => {
          return (
            <Thumbnail
              key={item.id}
              image={item.src}
              isShowing={index === item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
