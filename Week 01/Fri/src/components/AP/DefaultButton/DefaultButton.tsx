type props = {
  name: string;
  onClick?: () => void;
};

const DefaultButton = ({ name, onClick }: props) => {
  return (
    <button
      className="uppercase text-xl font-semibold bg-green-600 px-4 py-2 text-white rounded-xl cursor-pointer"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default DefaultButton;
