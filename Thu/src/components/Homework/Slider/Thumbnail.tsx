const Thumbnail = ({
  image,
  isShowing,
}: {
  image: string;
  isShowing: boolean;
}) => {
  return (
    <div
      className={`thumbnail border-1 border-solid ${
        isShowing ? 'border-red-400' : 'border-gray-400'
      }`}
    >
      <img src={image} alt="image" className="w-[60px] h-[60px]"/>
    </div>
  );
};

export default Thumbnail;
