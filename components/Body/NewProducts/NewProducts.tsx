"use client";
import { useState, useEffect } from "react";
import fetchData from "@/data/dataFetch";
import { Products } from "@/components/Types/Types";
import NewProductsCardContainer from "./NewProdcutsCard/NewProductsCardContainer";
const NewProducts = () => {
  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
    const getData = async () => {
      const URLgetNewProducts: string = "http://localhost:9000/newProducts";
      const res = await fetchData(URLgetNewProducts);
      return setData(res);
    };

    getData();
  }, []);

  return (
    <>
      <div className=" w-full my-3 h-10 flex items-center justify-between border-b-2 border-gray-600">
        <h1 className=" font-bold">New Products</h1>
        <p>View all</p>
      </div>
      <NewProductsCardContainer data={data} />
    </>
  );
};

export default NewProducts;
