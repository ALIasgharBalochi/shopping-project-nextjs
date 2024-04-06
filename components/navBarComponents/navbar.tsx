"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import bagIcon from "@/public/iconsax/bag.svg";
import searchIcon from "@/public/iconsax/search-normal-1.svg";
import userIcon from "@/public/iconsax/user.svg";

import MenuIcon from "@mui/icons-material/Menu";

import DrawerComponent from "../Drawer/Drawer";
import MegaMenuProduct from "../MegaMenu";

type DataButton = {
  name?: string;
  icon?: string;
  address: string;
  style?: string;
};

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const dataButton: DataButton[] = [
    { name: "Home", address: "/" },
    // { name: "Products", address: "/", style: "products" },
    { name: "Blog", address: "/" },
    { name: "FAQ", address: "/" },
    { name: "Contact Us", address: "/" },
  ];

  const IconButton: DataButton[] = [
    { icon: searchIcon, address: "/", style: "max-[800px]:hidden mx-1" },
    { icon: bagIcon, address: "/" },
    { icon: userIcon, address: "/" },
  ];

  return (
    <>
      <div className=" min-[800px]:px-24 px-16 flex justify-between items-center h-16 border-spacing-1 min-[800px]:border-b border-primary-75">
        <div className=" max-[800px]:hidden">
          <h1>LOGO</h1>
        </div>
        <div
          onClick={() => setOpenDrawer(true)}
          className=" min-[800px]:hidden"
        >
          <MenuIcon />
        </div>
        <div className="max-[800px]:hidden flex">
          <MegaMenuProduct />
          {dataButton.map((d: DataButton, index: number) => (
            <Link key={index} href={d.address} className=" mx-3">
              <button className="hover:text-primary-100 hover:border-spacing-1 hover:border-b hover:border-primary-100">
                {d.name}
              </button>
            </Link>
          ))}
        </div>
        <div className=" min-[800px]:hidden">
          <h1>LOGO</h1>
        </div>
        <div className=" flex">
          {IconButton.map((d: DataButton, index: number) => (
            <Link
              key={index}
              href={d.address}
              className={d.style ? d.style : "mx-1"}
            >
              <Image
                src={d.icon != undefined ? d.icon : " "}
                width={20}
                height={20}
                alt="img"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className=" min-[800px]:hidden px-16">
        <div className="pt-2 relative mx-auto text-gray-600">
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
      </div>
      <DrawerComponent openDrawer={openDrawer} closeDrawer={onCloseDrawer} />
    </>
  );
};

export default Navbar;
