import Link from "next/link";

import { DrawerData } from "@/components/Types/Types";

const DrawerButton: React.FC = () => {
  const DrawerData: DrawerData[] = [
    { name: "Blog", address: "/" },
    { name: "FAQ", address: "/" },
    { name: "Contact us", address: "/" },
  ];

  return (
    <div className="flex flex-col">
      {DrawerData.map((d: DrawerData, index: number) => (
        <Link key={index} href={d.address} className="my-2">
          <button>{d.name}</button>
        </Link>
      ))}
    </div>
  );
};
export default DrawerButton;
