"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import getAllProducts from "@/data/dataFetch";

import SearchIcon from "@/public/iconsax/search-normal-1.svg";

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

const SearchMobileComponent = () => {
  const [searchProducts, setSearchProducts] = useState<Products[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [query, setQuery] = useState<{ text: string }>({ text: "" });

  const MostUsedKeyData: string[] = [
    "Tablets",
    "Headphones",
    "Smartohnes",
    "Smartwatch",
    "Laptops",
    "USB Drive",
    "Phone Cases",
  ];

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

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllProducts();
      setProducts(res);
    };
    fetch();
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
    <div className="group pt-2 relative mx-auto text-gray-600 ">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
        type="search"
        name="search"
        value={query.text}
        onChange={searched}
        placeholder="What can we help you to find?"
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <Image src={SearchIcon} width={20} height={20} alt="img" />
      </button>
      <div className=" invisible group-hover:visible absolute bg-white p-3 h-screen w-full">
        {searchProducts.length > 0 && query.text.length > 0 ? (
          <div className="w-full h-full grid grid-cols-3 gap-2">
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
          <div className=" flex flex-col text-black">
            <h2 className=" font-bold my-2">The Most Searched Items</h2>
            <div className=" grid grid-cols-2 grid-rows-5">
              {mostSearched.map((i: string, index: number) => (
                <p key={index}>{i}</p>
              ))}
            </div>
            <h2 className=" font-bold my-2">Most used keywords</h2>
            <div className=" grid grid-cols-2 grid-rows-4">
              {MostUsedKeyData.map((i: string, index: number) => (
                <p key={index}>{i}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchMobileComponent;
