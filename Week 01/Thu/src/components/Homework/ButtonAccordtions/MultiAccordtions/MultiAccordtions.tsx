import { useState } from 'react';
import MultiAccordtionsButton from './MultiAccordtionsButton';

const MultiAccordtions = () => {
  const [index, setIndex] = useState(0);

  const contents = [
    {
      id: 0,
      buttonName: 'History',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    },
    {
      id: 1,
      buttonName: 'AppRoach',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    },
    {
      id: 2,
      buttonName: 'Culture',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    },
    {
      id: 3,
      buttonName: 'Method',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    },
  ];

  return (
    <div className="single-accordtions w-[50%] flex flex-col gap-3 mt-[10px]">
      <p className="text-l">Multi Accordtions</p>
      {contents.map((item) => {
        return (
          <MultiAccordtionsButton
            key={item.id}
            buttonName={item.buttonName}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default MultiAccordtions;
