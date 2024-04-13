"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import bagIcon from "@/public/iconsax/bag.svg";
import searchIcon from "@/public/iconsax/search-normal-1.svg";

import MenuIcon from "@mui/icons-material/Menu";

import DrawerComponent from "../Drawer/Drawer";
import MegaMenuProduct from "../MegaMenu";
import AccountMenu from "../Modals/AccoundModal";
import SearchModal from "../Modals/SearchModal";
import SearchMobileComponent from "../SearchMobile";

type DataButton = {
  name?: string;
  icon?: string;
  address: string;
  style?: string;
};

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const onCloseSearchModal = () => {
    setOpenSearchModal(false);
  };
  const dataButton: DataButton[] = [
    { name: "Home", address: "/" },
    { name: "Blog", address: "/" },
    { name: "FAQ", address: "/" },
    { name: "Contact Us", address: "/" },
  ];

  const IconButton: DataButton[] = [{ icon: bagIcon, address: "/" }];

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
        <div className=" flex items-center">
          <button
            className="mx-1 max-[800px]:hidden"
            onClick={() => setOpenSearchModal(true)}
          >
            <Image src={searchIcon} width={20} height={20} alt="img" />
          </button>
          <SearchModal open={openSearchModal} close={onCloseSearchModal} />
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
          <AccountMenu />
        </div>
      </div>
      <div className="min-[800px]:hidden px-16">
        <SearchMobileComponent />
      </div>
      <DrawerComponent openDrawer={openDrawer} closeDrawer={onCloseDrawer} />
    </>
  );
};

export default Navbar;
