"use client";
import { useEffect, useState } from "react";
import fetchData from "@/data/dataFetch";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Products } from "@/components/Types/Types";
import ProductsComponent from "./Products";
import TextComponent from "./TextComponent";

const ProductsSlider = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const URLgetProductsSlider: string =
        "http://localhost:9000/pruductsslider";
      const res = await fetchData(URLgetProductsSlider);
      return setProducts(res);
    };
    fetch();
  }, []);

  return (
    <div className=" w-full h-60 bg-primary-500 rounded-md py-3 my-4">
      <Grid container sx={{ height: "100%", width: "100%" }}>
        <TextComponent />
        <ProductsComponent products={products} />
      </Grid>
    </div>
  );
};

export default ProductsSlider;
