"use client";
import { useEffect, useState } from "react";
import { getPruductsSlider } from "@/data/dataFetch";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

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

const ProductsSlider = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getPruductsSlider();
      return setProducts(res);
    };
    fetch();
  }, []);

  return (
    <div className=" w-full h-60 bg-primary-500 rounded-md py-3 my-4">
      <Grid container sx={{ height: "100%", width: "100%" }}>
        <Grid xs={5} sm={3} md={3} lg={3} xl={3}>
          <div className=" w-full h-full flex flex-col items-center justify-around text-white">
            <div className=" text-center">
              <h1>Products On Sale</h1>
              <h3>Shop Now!</h3>
            </div>
            <button>View</button>
          </div>
        </Grid>
        <Grid xs={7} sm={9} md={9} lg={9} xl={9}>
          <div className=" w-auto h-full overflow-y-auto flex flex-row items-center ">
            {products.length > 0
              ? products.map((p: Products, index: number) => (
                  <div
                    key={index}
                    className=" w-32 h-full flex flex-col items-center bg-white rounded-md py-2 mr-2"
                  >
                    <div className=" w-full flex items-center justify-start ">
                      <span className=" rounded-r-md bg-secondary-100">
                        -50%
                      </span>
                    </div>
                    <img src={p.photo} className=" w-[80px] h-auto" />
                    <h1 className=" text-xs mb-auto">{srt(p.name, 20)}</h1>
                    <div className=" w-full flex flex-row items-center justify-around text-xs">
                      <p>$50.00</p>
                      <p>$25.00</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsSlider;
