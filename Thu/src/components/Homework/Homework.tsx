import ButtonAccordtions from './ButtonAccordtions/ButtonAccordtions';
import LikeButton from './LikeButton/LikeButton';
import Rating from './Rating/Rating';
import Slider from './Slider/Slider';

const Homework = () => {
  return (
    <div className="howework flex flex-col gap-3">
      <h1 className="text-3xl font-bold flex justify-center">
        Homework Session 2
      </h1>

      {/* Like button */}
      <LikeButton />

      {/* Rating */}
      <Rating />

      {/* Slide with thumb */}
      <Slider />

      {/* Button Accordtions */}
      <ButtonAccordtions />
    </div>
  );
};

export default Homework;
