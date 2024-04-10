import Image from "next/image";

import { Dialog } from "@mui/material";

import searchIcon from "@/public/iconsax/search-normal-1.svg";
import closeIcon from "@/public/iconsax/close-circle.svg";
import { useState } from "react";

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

  const MostUsedKeyData: string[] = [
    "Tablets",
    "Headphones",
    "Smartohnes",
    "Smartwatch",
    "Laptops",
    "USB Drive",
    "Phone Cases",
  ];

  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        "& .MuiDialog-paper": {
          minWidth: "50%",
          minHeight: "50%",
        },
      }}
    >
      <div className=" p-3">
        <div className=" flex items-center">
          <div className="pt-2 relative mr-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
              type="search"
              name="search"
              placeholder="What can we help you to find?"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <Image src={searchIcon} width={20} height={20} alt="img" />
            </button>
          </div>
          <div onClick={close} className=" cursor-pointer">
            <Image src={closeIcon} width={20} height={20} alt="close" />
          </div>
        </div>
        <div>
          {searchProducts.length > 0 ? (
            <>
              <div></div>
              <div></div>
            </>
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
