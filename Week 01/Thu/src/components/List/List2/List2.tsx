import Card2 from '../Card/Card2/Card2';
import Card2Props from '../../../props/Card2Props';

const List2 = () => {
  return (
    <div className='list2'>
      <h2 className="text-2xl font-semibold mb-4">PHỤ KIỆN TƯƠNG THÍCH</h2>
      {/* Cards */}
      <div className="flex gap-x-6">
        {Object.entries(Card2Props).map(([key, props]) => {
          return <Card2 key={key} {...props} />;
        })}
      </div>
    </div>
  );
};

export default List2;
