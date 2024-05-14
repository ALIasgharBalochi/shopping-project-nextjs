"use client";
import { useEffect, useState } from "react";

import fetchData from "@/data/dataFetch";
import { CategoreiType } from "../../Types/Types";
import CategoresContentComponent from "./CategoresContentComponent";
const CategoriesComponent: React.FC = () => {
  const [data, setData] = useState<CategoreiType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const URLgetAllproducts: string = "http://localhost:9000/categories";
      const res = await fetchData(URLgetAllproducts);
      return setData(res);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-row items-center gap-4 overflow-y-auto ">
      {data.length > 0 ? <CategoresContentComponent data={data} /> : null}
    </div>
  );
};

export default CategoriesComponent;
