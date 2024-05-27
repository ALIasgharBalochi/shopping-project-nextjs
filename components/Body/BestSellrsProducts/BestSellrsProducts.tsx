"use client";
import { useState, useEffect } from "react";
import fetchData from "@/data/dataFetch";
import { Products } from "../../Types/Types";
import NewProductsCardContainer from "../NewProducts/NewProdcutsCard/NewProductsCardContainer";
const BestSellersProducts = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const getData = async () => {
      const URLgetBestSelersProdcuts: string =
        "http://localhost:9000/beastselers";
      const res = await fetchData(URLgetBestSelersProdcuts);
      return setData(res);
    };
    getData();
  }, []);

  return (
    <>
      <div className=" w-full my-3 h-10 flex items-center justify-between border-b-2 border-gray-600">
        <h1 className=" font-bold">Best Sellers</h1>
        <p>View all</p>
      </div>
      <NewProductsCardContainer data={data} />
    </>
  );
};
export default BestSellersProducts;
