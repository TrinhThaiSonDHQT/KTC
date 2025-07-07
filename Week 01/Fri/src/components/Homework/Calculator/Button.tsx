type props = {
  content: string | number;
  onHandleClick: (content: string | number) => void;
};

const Button = ({ content, onHandleClick }: props) => {
  return (
    <button
      className="bg-white px-4 py-2 rounded w-[20%] cursor-pointer"
      onClick={() => onHandleClick(content)}
    >
      {content}
    </button>
  );
};

export default Button;
