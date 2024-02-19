import React from "react";
import useCustomGetApi from "../../../../hooks/api/useCustomGetApi";
import Bullets from "../../../../components/UI/Bullets";
const PopularSection = () => {
  const { data, loading, errors } = useCustomGetApi(
    "https://fakestoreapi.com/products"
  );
  return (
    <>
      {loading && <p>loading...</p>}
          <div className="w-[80vw] mt-5">
          <Bullets name={'Popular'}/>
        {data && (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 max-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((item, index) => (
              <div key={item.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item.image}
                    className="h-full w-full max-h-full object-fill object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex  justify-between max-sm:flex-col">
                  <div>
                    <p className="text-sm max-sm:text-xs text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.title}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PopularSection;
