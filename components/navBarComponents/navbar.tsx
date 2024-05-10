"use client";
import { useState } from "react";

import bagIcon from "@/public/iconsax/bag.svg";

import MenuIcon from "@mui/icons-material/Menu";

import DrawerComponent from "../Drawer/Drawer";
import SearchMobileComponent from "../SearchMobile";

import { DataButton } from "../Types/Types";
import IconButtonComponents from "./IconButtonComponents";
import LogoComponent from "./LogoComponent";
import LinkButton from "./LinkButton/LinkButton";
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const onCloseSearchModal = () => {
    setOpenSearchModal(false);
  };

  const IconButton: DataButton[] = [{ icon: bagIcon, address: "/" }];

  return (
    <>
      <div className=" min-[800px]:px-24 px-16 flex justify-between items-center h-16 border-spacing-1 min-[800px]:border-b border-primary-75">
        <LogoComponent style="max-[800px]:hidden" text="LOGO" />
        <div
          onClick={() => setOpenDrawer(true)}
          className=" min-[800px]:hidden"
        >
          <MenuIcon />
        </div>
        <LinkButton />
        <LogoComponent style="min-[800px]:hidden" text="LOGO" />
        <IconButtonComponents
          onCloseSearchModal={onCloseSearchModal}
          openSearchModal={openSearchModal}
          IconButton={IconButton}
          setOpenSearchModal={setOpenSearchModal}
        />
      </div>
      <div className="min-[800px]:hidden px-16">
        <SearchMobileComponent />
      </div>
      <DrawerComponent openDrawer={openDrawer} closeDrawer={onCloseDrawer} />
    </>
  );
};
export default Navbar;
