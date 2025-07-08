import { useEffect, useState } from 'react';

type Category = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const ProductPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<null | number>(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const handleFilter = async (categoryId: number) => {
    setSelectedCategory((prev) => {
      if (prev === categoryId) {
        return null;
      } else return categoryId;
    });

    setPageIndex(1);
  };

  // Get list of categories
  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/categories');

      if (!res.ok) {
        throw new Error('Error');
      }

      const data = await res.json();
      if (data.length > 0) {
        const myCategories = data.map((item: any) => {
          return {
            id: item.id,
            name: item.name,
          };
        });
        // console.log(myCategories);

        if (myCategories.length > 0) {
          setCategories(myCategories);
        }
      }
    };

    getCategories();
  }, []);

  // Get list of products base on category
  useEffect(() => {
    const getProducts = async () => {
      const baseUrl = 'https://api.escuelajs.co/api/v1';
      let subUrl = '/products';

      if (selectedCategory) {
        subUrl = `/categories/${selectedCategory}/products`;
      }
      let url = baseUrl + subUrl;
      // console.log(url);

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Error');
      }
      const data = await res.json();
      // console.log(data);

      if (data.length > 0) {
        const limit = 12;
        const offset = (pageIndex - 1) * limit;
        const stop = offset + limit;
        const myProducts = [];
        for (let i = offset; i < stop; i++) {
          if (data[i]) {
            myProducts.push({
              id: data[i].id,
              name: data[i].title,
              image: data[i].images[0],
              price: data[i].price,
            });
          }
        }
        // console.log(myProducts);
        setProducts(myProducts);

        // Calculate the number of pages
        const pages = data.length / limit;
        setNumberOfPages(pages);
      }
    };

    getProducts();
  }, [selectedCategory, pageIndex]);

  return (
    <div className="product-page grid grid-cols-5 p-5">
      {/* Filter */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Bộ lọc</h2>
        {categories.map((item: Category) => {
          return (
            <div className="flex items-center" key={item.id}>
              <input
                type="checkbox"
                id={`${item.id}`}
                name={item.name}
                value={item.name}
                className="mr-3"
                checked={selectedCategory === item.id}
                onChange={() => handleFilter(item.id)}
              />
              <label htmlFor={item.name} className="text-gray-400">
                {item.name}
              </label>
              <br></br>
            </div>
          );
        })}
      </div>

      {/* List of products */}
      <div className="col-span-4 ">
        <h2 className="text-2xl font-bold mb-2">Danh sách sản phẩm</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
          {products.map((item) => {
            return (
              <a
                key={item.id}
                className="flex flex-col col-span-1 cursor-pointer border-1 border-solid border-gray-400 p-3 rounded-2xl "
              >
                <img
                  src={item.image}
                  className="w-[180px] h-[180px] mx-auto"
                  alt={item.name}
                />
                <span className="font-semibold">{item.name}</span>
                <span className="font-semibold text-red-500">
                  ${item.price}
                </span>
              </a>
            );
          })}
        </div>

        {/* Pagination  */}
        <div className="mt-3 flex items-center justify-center gap-3">
          {Array.from({ length: Math.ceil(numberOfPages) }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded cursor-pointer ${
                pageIndex === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setPageIndex(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
