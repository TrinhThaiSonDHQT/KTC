import type { ReactNode } from 'react';

type props = {
  exerciseName: string;
  children: ReactNode;
};

const ExerciseLayout = ({ exerciseName, children }: props) => {
  return (
    <div className="layout">
      <p className='text-2xl font-bold mb-[10px]'>{exerciseName}</p>
      {children}
      <hr className='mt-[10px]'/>
    </div>
  );
};

export default ExerciseLayout;
