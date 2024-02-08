import React from "react";
import useCustomGetApi from "../../hooks/api/useCustomGetApi";

const HomePage = () => {
  const { data, errors, loading } = useCustomGetApi(
    "https://fakestoreapi.com/products"
  );

  return (
    <div>
      home page
      {loading && <p>loading...</p>}
      {data && (
        <ol>
          {data.map((item, index) => (
            <ul key={index}>
              <li>{item.title}</li>
              <li>{item.price}</li>
              <li>{item.description}</li>
            </ul>
          ))}
        </ol>
      )}
    </div>
  );
};

export default HomePage;
