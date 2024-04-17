"use client";
import { useEffect, useState } from "react";

import { getAllCategores } from "@/data/dataFetch";

type CategoreiType = {
  id: number;
  name: string;
  photo: string;
};
const CategoriesComponent = () => {
  const [data, setData] = useState<CategoreiType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getAllCategores();
      return setData(res);
    };

    getData();
  }, []);

  return (
    // <div className=" flex flex-row items-center justify-center w-full px-16 max-[800px]:grid max-[800px]:grid-cols-3 max-[800px]:grid-rows-2 gap-2">
    //   {data.length > 0
    //     ? data.map((c: CategoreiType, index: number) => (
    //         <div
    //           key={index}
    //           className=" min-[800px]:w-[200px] min-[800px]:h-[150px] w-[100%] h-[75px] rounded-lg hover:shadow-xl p-2 m-2 bg-white cursor-pointer flex flex-col justify-between items-center"
    //         >
    //           <img
    //             src={c.photo}
    //             className=" rounded-lg min-[800px]:w-[80%] max-[800px]:w-[50%]"
    //           />
    //           <h2 className=" text-black">{c.name}</h2>
    //         </div>
    //       ))
    //     : null}
    // </div>
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
