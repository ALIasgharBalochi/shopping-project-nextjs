import { useState } from "react";

import Image from "next/image";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import userIcon from "@/public/iconsax/user.svg";
import logOutIcon from "@/public/iconsax/logout.svg";
import userAccountIcon from "@/public/iconsax/profile-circle.svg";
import bagOrdersIcon from "@/public/iconsax/bag-2.svg";
import heartIcon from "@/public/iconsax/heart.svg";
import dolarIcon from "@/public/iconsax/dollar-circle.svg";

type AccoundMenuType = {
  icon: string;
  name: string;
  address: string;
};

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const AccountMenuData: AccoundMenuType[] = [
    { icon: userAccountIcon, name: "Ali Balochi", address: "/" },
    { icon: bagOrdersIcon, name: "Orders", address: "/" },
    { icon: heartIcon, name: "Wish List", address: "/" },
    { icon: dolarIcon, name: "Payments", address: "/" },
    { icon: logOutIcon, name: "Log out", address: "/" },
  ];

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Image src={userIcon} width={20} height={20} alt="img" />
          </IconButton>
        </Tooltip>
      </Box>

      <div
        className={
          open
            ? "absolute visible mt-[59px] inset-1 bg-black bg-opacity-25"
            : "invisible"
        }
      >
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              width: 200,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {AccountMenuData.map((d: AccoundMenuType, index: number) => (
            <MenuItem key={index} onClick={handleClose}>
              <Image
                className=" mr-3"
                src={d.icon}
                width={20}
                height={20}
                alt={d.name}
              />
              <h3>{d.name}</h3>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default AccountMenu;
