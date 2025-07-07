import Card1 from '../../List/Card/Card1/Card1';
import Card1Props from '../../../props/Card1Props';

const List1 = () => {
  return (
    <div className='list1'>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">TIN MỚI</h2>
        <span className="btn-see-more font-semibold">Xem thêm</span>
      </div>

      {/* Cards */}
      <div className="flex gap-x-6">
        {Object.entries(Card1Props).map(([key, props]) => {
          return <Card1 key={key} {...props} />;
        })}
      </div>
    </div>
    // <div className="container px-3 py-4">
    // </div>
  );
};

export default List1;
