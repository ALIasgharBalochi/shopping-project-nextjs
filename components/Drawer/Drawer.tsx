import {
  Accordion,
  Drawer,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import closeIcon from "@/public/iconsax/close-circle.svg";
import Image from "next/image";
import Link from "next/link";

import mobileIcon from "@/public/iconsax/mobile.svg";
import labtopIcon from "@/public/iconsax/monitor.svg";
import headphonsIcon from "@/public/iconsax/headphone.svg";
import keyboardIcon from "@/public/iconsax/keyboard.svg";
import mouseIcon from "@/public/iconsax/mouse.svg";
import caseIcon from "@/public/iconsax/speaker.svg";

type OpenDrawer = {
  openDrawer: boolean;
  closeDrawer: () => void;
};

type DrawerData = {
  name: string;
  address: string;
};

type AccordianData = {
  icon: string;
  name: string;
  address: string;
};
const DrawerComponent = (props: OpenDrawer) => {
  const { openDrawer, closeDrawer } = props;

  const DrawerData: DrawerData[] = [
    { name: "Blog", address: "/" },
    { name: "FAQ", address: "/" },
    { name: "Contact us", address: "/" },
  ];

  const AccordianData: AccordianData[] = [
    { icon: mobileIcon, name: "Mobile", address: "/" },
    { icon: labtopIcon, name: "Laptop", address: "/" },
    { icon: headphonsIcon, name: "Headphone", address: "/" },
    { icon: keyboardIcon, name: "Keyboard", address: "/" },
    { icon: mouseIcon, name: "Mouse", address: "/" },
    { icon: caseIcon, name: "Case", address: "/" },
  ];

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={closeDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: "70%",
          p: "2rem",
        },
      }}
    >
      <div className=" flex justify-between">
        <h1>LOGO</h1>
        <button onClick={closeDrawer}>
          <Image src={closeIcon} width={30} height={30} alt="close" />
        </button>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Products
          </AccordionSummary>
          {AccordianData.map((d: AccordianData, index: number) => (
            <Link key={index} href={d.address}>
              <AccordionDetails
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Image
                  src={d.icon ? d.icon : ""}
                  width={20}
                  height={20}
                  alt={d.name}
                />
                <h3 className="mx-1">{d.name}</h3>
              </AccordionDetails>
            </Link>
          ))}
        </Accordion>
        <div className="flex flex-col">
          {DrawerData.map((d: DrawerData, index: number) => (
            <Link key={index} href={d.address} className="my-2">
              <button>{d.name}</button>
            </Link>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
