import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="like-button">
      <h1 className="text-3xl font-bold">Like Button</h1>
      {isLiked ? (
        <div className='flex items-center'>
          <span className="mr-2" onClick={handleClick}>
            <AiFillLike />
          </span>
          <span>Thank you!</span>
        </div>
      ) : (
        <div className='flex items-center'>
          <span className="mr-2" onClick={handleClick}>
            <AiOutlineLike />
          </span>
          <span>Click like if this post is useful to you !</span>
        </div>
      )}
    </div>
  );
};

export default LikeButton;
