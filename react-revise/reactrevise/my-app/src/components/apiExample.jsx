import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // console.log(data)
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {data?.map((d) => (
          <div style={{ border: "1px solid #66666" }} key={d.id}>
            <div>
              <img width={200} height={100} src={d.image} alt={d.title} />
              <p>{d.title}</p>
              <p>{d.price}</p>
              <p>{d.description}</p>
              <p>{d.category}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataFetching;
