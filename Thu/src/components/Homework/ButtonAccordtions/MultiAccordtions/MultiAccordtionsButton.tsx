import { useState } from 'react';

type props = {
  buttonName: string;
  content: string;
};

const MultiAccordtionsButton = ({ buttonName, content }: props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div
        className={`flex justify-center py-2 uppercase text-xl font-bold ${
          isClicked
            ? 'text-white bg-green-500'
            : 'text-gray-500 bg-gray-100'
        }`}
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <span>{buttonName}</span>
      </div>
      {isClicked && (
        <div className={`content text-l text-gray-400 text-center`}>
          <span>{content}</span>
        </div>
      )}
    </div>
  );
};

export default MultiAccordtionsButton;
