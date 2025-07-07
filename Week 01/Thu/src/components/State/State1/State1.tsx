import { useState } from 'react';
import Button from './Button/Button';
import './State1.css';

const State1 = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const buttons = ['Đen', 'Hồng', 'Xanh'];

  const handleClickButton = (index: number) => {
    setSelectedButton(index)
  }

  return (
    <div className="state1 mx-auto flex gap-x-2 items-center text-xl">
      <span>Màu: </span>
      {buttons.map((item, idx) => (
        <Button
          key={idx}
          content={item}
          selectedButton={selectedButton}
          index={idx}
          onClickButton={handleClickButton}
        />
      ))}
    </div>
  );
};

export default State1;
