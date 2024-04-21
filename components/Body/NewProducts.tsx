"use client";
import { useState, useEffect } from "react";

import { getNewProducts } from "@/data/dataFetch";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Star } from "@mui/icons-material";

type Products = {
  id: string;
  name: string;
  photo: string;
  photos: string[];
  color: string[];
  price: number;
  categorie: number;
  description: string;
  specifications: object[];
};

const srt = (str: string, n: number) => {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
};

const NewProducts = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getNewProducts();
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
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        {data.length > 0
          ? data.map((p: Products, index: number) => (
              <Grid
                key={index}
                xs={6}
                sm={6}
                md={3}
                sx={{
                  height: "12rem",
                  width: "15rem",
                  padding: ".2rem",
                }}
              >
                <div className=" p-1 bg-white rounded-md w-full h-full ">
                  <div className=" w-full flex justify-center">
                    <img src={p.photo} className="w-[100px] h-auto" />
                  </div>
                  <hr className=" my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-50 dark:via-neutral-900" />
                  <h1>{srt(p.name, 15)}</h1>
                  <div className=" flex justify-between w-full">
                    <p>$100.00</p>
                    <p className=" flex items-center text-primary-600">
                      <Star />
                      4.5
                    </p>
                  </div>
                </div>
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default NewProducts;
