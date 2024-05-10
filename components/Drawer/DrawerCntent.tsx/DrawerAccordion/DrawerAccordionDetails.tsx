import Image from "next/image";
import Link from "next/link";
import { AccordionDetails } from "@mui/material";
type Props = {
  index: number;
  d: {
    address: string;
    icon: any;
    name: string;
  };
};
const DrawerAccordionDetails: React.FC<Props> = ({ index, d }) => {
  return (
    <Link key={index} href={d.address}>
      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Image src={d.icon ? d.icon : ""} width={20} height={20} alt={d.name} />
        <h3 className="mx-1">{d.name}</h3>
      </AccordionDetails>
    </Link>
  );
};
export default DrawerAccordionDetails;
