import { useEffect, useState } from "react";

const useCustomApi = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setErrors(`Error : ${error.message}`);
    }
  };
  const get = (url, options = {}) => {
    useEffect(() => {
      fetchData(url, options);
    }, [url, options]);
  };
  const post = (url, options = {}) => {
    useEffect(() => {
      fetchData(url, options);
    }, [url, options]);
  };
  return { data, errors, get, post };
};

export default useCustomApi;
