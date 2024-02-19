import React from "react";
import useCustomGetApi from "../../../../hooks/api/useCustomGetApi";
import Bullets from "../../../../components/UI/Bullets";
import { BsHeart } from "react-icons/bs";
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
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
            {data.map((item, index) => (
              <div key={item.id} className="bg-slate-100 rounded-lg">
                <div className=" flex gap-3 w-full overflow-hidden rounded-md bg-slate-100 px-5 py-5 lg:h-80">
                  <div>
                    <img
                    src={item.image}
                    className="h-full w-full max-h-full object-fill object-center lg:h-full lg:w-full"
                  /></div>
                  <div><BsHeart/></div>
                </div>
                <div className="mt-4 flex  justify-between max-sm:flex-col px-5">
                  <div >
                    <p className="text-sm max-sm:text-xs  text-gray-700">
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
