import DrawerAccordionDetails from "./DrawerAccordionDetails";
import { AccordianData } from "@/components/Types/Types";

import mobileIcon from "@/public/iconsax/mobile.svg";
import labtopIcon from "@/public/iconsax/monitor.svg";
import headphonsIcon from "@/public/iconsax/headphone.svg";
import keyboardIcon from "@/public/iconsax/keyboard.svg";
import mouseIcon from "@/public/iconsax/mouse.svg";
import caseIcon from "@/public/iconsax/speaker.svg";

const DrawerAccordionContent: React.FC = () => {
  const AccordianData: AccordianData[] = [
    { icon: mobileIcon, name: "Mobile", address: "/" },
    { icon: labtopIcon, name: "Laptop", address: "/" },
    { icon: headphonsIcon, name: "Headphone", address: "/" },
    { icon: keyboardIcon, name: "Keyboard", address: "/" },
    { icon: mouseIcon, name: "Mouse", address: "/" },
    { icon: caseIcon, name: "Case", address: "/" },
  ];
  return (
    <>
      {AccordianData.map((d: AccordianData, index: number) => (
        <DrawerAccordionDetails index={index} d={d} />
      ))}
    </>
  );
};

export default DrawerAccordionContent;
