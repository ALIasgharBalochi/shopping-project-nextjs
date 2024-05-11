import { MenuItem } from "@mui/material";
import Image from "next/image";
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
type Props = {
  handleClose: () => void;
};
const AccountModalMenuItem: React.FC<Props> = ({ handleClose }) => {
  const AccountMenuData: AccoundMenuType[] = [
    { icon: userAccountIcon, name: "Ali Balochi", address: "/" },
    { icon: bagOrdersIcon, name: "Orders", address: "/" },
    { icon: heartIcon, name: "Wish List", address: "/" },
    { icon: dolarIcon, name: "Payments", address: "/" },
    { icon: logOutIcon, name: "Log out", address: "/" },
  ];
  return (
    <>
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
    </>
  );
};
export default AccountModalMenuItem;
