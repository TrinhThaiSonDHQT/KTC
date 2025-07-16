import { categories } from '@/data';

const Navigator = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100`}
            >
              <category.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
