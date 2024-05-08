"use client";
import { useEffect, useState } from "react";

import fetchData from "@/data/dataFetch";

type CategoreiType = {
  id: number;
  name: string;
  photo: string;
};
const CategoriesComponent = () => {
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
      {data.length > 0 ? (
        <>
          {data.map((c: CategoreiType, index: number) => (
            <div
              key={index}
              className=" w-44 h-44 flex flex-col bg-white p-2 rounded-md justify-around items-center "
            >
              <div className=" w-[100px] h-[auto]">
                <img
                  src={c.photo}
                  className=" w-full h-auto"
                  alt="categories"
                />
              </div>
              <div>
                <h2 className=" text-black">{c.name}</h2>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default CategoriesComponent;
