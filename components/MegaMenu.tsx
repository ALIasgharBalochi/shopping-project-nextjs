"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import mobileIcon from "@/public/iconsax/mobile.svg";
import labtopIcon from "@/public/iconsax/monitor.svg";
import headphonsIcon from "@/public/iconsax/headphone.svg";
import keyboardIcon from "@/public/iconsax/keyboard.svg";
import mouseIcon from "@/public/iconsax/mouse.svg";
import caseIcon from "@/public/iconsax/speaker.svg";

import fetchData from "@/data/dataFetch";

type MegaMenuData = {
  icon: string;
  name: string;
  categoriesId: number;
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

const MegaMenuProduct = () => {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [products, setProducts] = useState<Products[]>([]);

  const MegaMenuData: MegaMenuData[] = [
    { icon: mobileIcon, name: "Mobile", categoriesId: 1 },
    { icon: labtopIcon, name: "Laptop", categoriesId: 2 },
    { icon: headphonsIcon, name: "Headphone", categoriesId: 3 },
    { icon: keyboardIcon, name: "Keyboard", categoriesId: 4 },
    { icon: mouseIcon, name: "Mouse", categoriesId: 5 },
    { icon: caseIcon, name: "Case", categoriesId: 6 },
  ];

  useEffect(() => {
    const getData = async () => {
      const URLgetAllProducts: string = "http://localhost:9000/prodcts";
      const res = await fetchData(URLgetAllProducts);
      setAllProducts(res);
    };

    getData();
  }, []);

  const getProducts = (categoriId: number) => {
    const data = allProducts.filter((d: Products) => {
      return d.categorie == categoriId;
    });
    setProducts(data);
  };

  const srt = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <div className="group ">
      <button className=" group-hover:text-primary-100 group-hover:border-spacing-1 group-hover:border-b group-hover:border-primary-100">
        Products
      </button>
      <div className="absolute invisible group-hover:visible mt-[59px] group-hover:inset-1 group-hover:bg-black group-hover:bg-opacity-25">
        <div className=" flex w-full px-24 opacity-0 -mt-5 group-hover:opacity-100">
          <div className=" flex flex-col bg-white  w-[20%] p-2 rounded-bl-lg border-spacing-1 border-r border-black">
            {MegaMenuData.map((d: MegaMenuData, index: number) => (
              <button
                key={index}
                onClick={() => getProducts(d.categoriesId)}
                className=" my-2"
              >
                <div className=" flex flex-row justify-start items-center">
                  <Image
                    src={d.icon ? d.icon : ""}
                    width={20}
                    height={20}
                    alt={d.name}
                  />
                  <h3 className="mx-1 hover:text-primary-75 active:text-primary-75">
                    {d.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
          <div className=" w-[80%] flex bg-white justify-center items-center rounded-br-lg p-2">
            <div className=" rounded-lg w-20 h-20 bg-white text-primary-75 flex justify-center items-center cursor-pointer mx-1">
              <h1>view all</h1>
            </div>
            <div className=" flex justify-center items-center gap-2">
              {products.length > 0 ? (
                <>
                  {products.map((d: Products, index: number) => (
                    <div
                      key={index}
                      className=" rounded-lg  hover:shadow-xl p-1 bg-white cursor-pointer"
                    >
                      <div>
                        <img
                          src={d.photo}
                          width="100px"
                          height="200px"
                          className=" rounded-lg"
                        />
                      </div>
                      <h2 className=" text-black">{srt(d.name, 15)}</h2>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <h1>loading...</h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuProduct;
