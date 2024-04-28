import Image from "next/image";

import lagt from "@/public/days-return.png";
import g from "@/public/original-products.png";
import fso from "@/public/express-delivery.png";
import suport from "@/public/support.png";

type Data = {
  img: any;
  name: string;
};
const SuportedComponent = () => {
  const data: Data[] = [
    { img: lagt, name: "Latest and Greatest Tech " },
    { img: g, name: "Guarantee" },
    { img: fso, name: "Free Shipping Over 1000$" },
    { img: suport, name: "24/7 Support" },
  ];
  return (
    <div className=" flex flex-row justify-evenly my-5 w-full items-center max-[768px]:flex-col max-[768px]:items-start">
      {data.map((d: Data, index: number) => (
        <div
          key={index}
          className=" flex flex-col max-[768px]:flex-row items-center justify-center text-center"
        >
          <Image src={d.img} width={50} height={50} alt={d.name} />
          <p className=" text-sm">{d.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SuportedComponent;
