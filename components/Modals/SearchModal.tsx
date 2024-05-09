"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { Dialog } from "@mui/material";

import fetchData from "@/data/dataFetch";
import searchIcon from "@/public/iconsax/search-normal-1.svg";
import closeIcon from "@/public/iconsax/close-circle.svg";
import CheckLengthStr from "../CheckLengthStr";
import { Products } from "../Types/Types";
type Props = {
  open: boolean;
  close: () => void;
};
const SearchModal: React.FC<Props> = ({ open, close }) => {
  const [searchProducts, setSearchProducts] = useState<Products[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [query, setQuery] = useState<{ text: string }>({ text: "" });

  const mostSearched: string[] = [
    "MacBook Pro",
    "AirPods Pro",
    "Samsung S9",
    "Tablet",
    "Xiaomi",
    "JBL speaker",
    "Canon",
    "AirPods Max",
    "Asus",
    "MagSafe",
  ];

  const handleClose = () => {
    close();
    setSearchProducts([]);
  };

  const MostUsedKeyData: string[] = [
    "Tablets",
    "Headphones",
    "Smartohnes",
    "Smartwatch",
    "Laptops",
    "USB Drive",
    "Phone Cases",
  ];

  useEffect(() => {
    const allProducts = async () => {
      const URLgetAllProducts: string = "http://localhost:9000/prodcts";
      const data: Products[] = await fetchData(URLgetAllProducts);
      return setProducts(data);
    };
    allProducts();
  }, []);

  const searched = (event: any) => {
    setQuery({ ...query, text: event.target.value });
    const allproducts = products.filter((p: Products) => {
      return p.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setSearchProducts(allproducts);
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        "& .MuiDialog-paper": {
          width: "50%",
          height: "50%",
          overflowX: "hidden",
        },
      }}
    >
      <div className=" p-3">
        <div className=" flex items-center">
          <div className="pt-2 relative mr-auto text-gray-600">
            <input
              value={query.text}
              onChange={searched}
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
              type="search"
              name="search"
              placeholder="What can we help you to find?"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <Image src={searchIcon} width={20} height={20} alt="img" />
            </button>
          </div>
          <div onClick={handleClose} className=" cursor-pointer">
            <Image src={closeIcon} width={20} height={20} alt="close" />
          </div>
        </div>
        <div>
          {searchProducts.length > 0 && query.text.length > 0 ? (
            <div className=" w-full h-full grid grid-cols-6 gap-2">
              {searchProducts.map((p: Products, index) => (
                <div
                  key={index}
                  className=" rounded-lg  hover:shadow-xl p-1 bg-white cursor-pointer"
                >
                  <div>
                    <img
                      src={p.photo}
                      width="100px"
                      height="200px"
                      className=" rounded-lg"
                    />
                  </div>
                  <h2 className=" text-black">
                    <CheckLengthStr str={p.name} n={15} />
                  </h2>
                </div>
              ))}
            </div>
          ) : (
            <div className=" flex">
              <div className=" m-3">
                <h1 className=" font-bold">The Most Searched Items</h1>
                <div className=" grid grid-cols-2">
                  {mostSearched.map((d: string, index: number) => (
                    <h4 key={index} className=" m-2 text-sm">
                      {d}
                    </h4>
                  ))}
                </div>
              </div>
              <div className=" m-3">
                <h1 className=" font-bold">Moset Used Keyboards</h1>
                <div className=" grid grid-cols-2">
                  {MostUsedKeyData.map((d: string, index: number) => (
                    <h4 key={index} className=" m-2 text-sm">
                      {d}
                    </h4>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default SearchModal;
