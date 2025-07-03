type props = {
  content: string;
  index: number;
  selectedButton: number;
  onClickButton: (index: number) => void;
};

const Button = ({ content, index, selectedButton, onClickButton }: props) => {
  return (
    <span
      className={`px-4 py-2 border-1 border-solid border-gray-400 cursor-pointer ${
        index === selectedButton ? 'active' : ''
      }`}
      onClick={() => onClickButton(index)}
    >
      {content}
    </span>
  );
};

export default Button;
