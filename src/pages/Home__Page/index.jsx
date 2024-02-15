import React from "react";
import useCustomGetApi from "../../hooks/api/useCustomGetApi";
import Navbar from "../../components/block/Navbar.jsx/Navbar";
import Footer from "../../components/block/Footer";

const HomePage = () => {
  const { data, errors, loading } = useCustomGetApi(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className=" flex flex-col items-center">
        <Navbar/>
      {loading && <p>loading...</p>}
      {data && (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item, index) => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={item.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${item.price}
                </p>
              </div>
              </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default HomePage;
