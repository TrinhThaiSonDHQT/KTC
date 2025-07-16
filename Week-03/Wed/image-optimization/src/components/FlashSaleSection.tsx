import ProductList from './ProductList';

const FlashSaleSection = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Khuyến mãi Online</h2>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
              FLASH SALE
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
              GIÁ SỐC
            </span>
          </div>
          <div className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
            ONLINE ONLY
          </div>
          <div className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">
            GIẢM ĐẾN 35%
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-6">
        {[
          'Điện Thoại',
          'Apple',
          'Laptop',
          'Phụ Kiện',
          'Đồng Hồ',
          'PC, Máy in',
        ].map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              index === 0
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Countdown Timer */}
      <div className="flex items-center space-x-4 mb-6">
        {[
          { label: 'Sắp diễn ra', time: '09:00', active: true },
          { label: 'Sắp diễn ra', time: '12:00', active: false },
          { label: 'Sắp diễn ra', time: '15:00', active: false },
          { label: 'Sắp diễn ra', time: '18:00', active: false },
        ].map((slot, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg text-center ${
              slot.active
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            <div className="text-sm">{slot.label}</div>
            <div className="font-bold">{slot.time}</div>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <ProductList />
    </section>
  );
};

export default FlashSaleSection;
