import Ex4 from './Ex4/Ex4';
import Ex1 from './Ex1/Ex1';
import Ex2 from './Ex2/Ex2';
import Ex3 from './Ex3/Ex3';
import ExerciseLayout from './ExerciseLayout/ExerciseLayout';
import Ex5 from './Ex5/Ex5';
import Ex7 from './Ex7/Ex7';
import Ex10 from './Ex10/Ex10';

const exercises = [
  {
    id: 1,
    component: <Ex1 />,
  },
  {
    id: 2,
    component: <Ex2 />,
  },
  {
    id: 3,
    component: <Ex3 />,
  },
  {
    id: 4,
    component: <Ex4 />,
  },
  {
    id: 5,
    component: <Ex5 />,
  },
  {
    id: 7,
    component: <Ex7 />,
  },{
    id: 10,
    component: <Ex10 />,
  },
];

const AP = () => {
  return (
    <div className="ap flex flex-col gap-3 p-4">
      {exercises.map((item, index) => {
        return (
          <ExerciseLayout exerciseName={`Exercise ${item.id}`} key={index}>
            {item.component}
          </ExerciseLayout>
        );
      })}
    </div>
  );
};

export default AP;
