"use client";
import Image from "next/image";

import { Dialog } from "@mui/material";

import getAllProducts from "@/data/dataFetch";
import searchIcon from "@/public/iconsax/search-normal-1.svg";
import closeIcon from "@/public/iconsax/close-circle.svg";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  close: () => void;
};

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

const SearchModal = (props: Props) => {
  const { open, close } = props;

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
      const data: Products[] = await getAllProducts();
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

  const srt = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
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
                  <h2 className=" text-black">{srt(p.name, 15)}</h2>
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
