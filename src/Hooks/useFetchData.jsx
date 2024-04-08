import { useState } from "react";
import { useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
      const res = await fetch('/data.json');
      const jsonData = await res.json();
      setData(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, []);

      
  return {data}
}

export default useFetchData
