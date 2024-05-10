import Link from "next/link";

import { DataButton } from "@/components/Types/Types";

const DataButtonComponent: React.FC = () => {
  const dataButton: DataButton[] = [
    { name: "Home", address: "/" },
    { name: "Blog", address: "/" },
    { name: "FAQ", address: "/" },
    { name: "Contact Us", address: "/" },
  ];
  return (
    <>
      {dataButton.map((d: DataButton, index: number) => (
        <Link key={index} href={d.address} className=" mx-3">
          <button className="hover:text-primary-100 hover:border-spacing-1 hover:border-b hover:border-primary-100">
            {d.name}
          </button>
        </Link>
      ))}
    </>
  );
};
export default DataButtonComponent;
