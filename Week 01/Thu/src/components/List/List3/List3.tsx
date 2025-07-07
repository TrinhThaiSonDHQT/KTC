import Card3 from '../Card/Card3/Card3';
import Card3Props from '../../../props/Card3Props';

const List3 = () => {
  return (
    <div className="list3">
      <div className="header flex justify-between items-center">
        <div>
          <span className="text-xl mr-[30px]">Deal of the day</span>
          <span className="text-xl font-semibold text-white px-6 py-2 bg-orange-500">
            End in 16:17:17:39
          </span>
        </div>
        <span className="text-l" style={{ borderBottom: '1px solid blue' }}>
          View all
        </span>
      </div>

      <hr className="my-4 border-1 border-solid border-gray-200" />

      <div className='flex justify-between items-center'>
        {Object.entries(Card3Props).map(([key, props]) => {
          return <Card3 key={key} {...props} />;
        })}
      </div>
    </div>
  );
};

export default List3;
