import Image from "next/image";

import apple from "@/public/apple.png";
import samsung from "@/public/samsung.png";
import sony from "@/public/sony.png";
import canon from "@/public/canon.png";

type Data = {
  icon: any;
};

const TopBrandsComponent = () => {
  const data: Data[] = [
    { icon: apple },
    { icon: samsung },
    { icon: sony },
    { icon: canon },
  ];
  return (
    <>
      <div className=" w-full my-3 h-10 flex items-center justify-start border-b-2 border-gray-600">
        <h1 className=" font-bold">Top Brads</h1>
      </div>
      <div className=" w-full h-auto flex items-center justify-evenly">
        {data.map((d: Data, index: number) => (
          <div key={index} className=" flex items-center justify-center">
            <Image
              src={d.icon}
              className=" w-32 max-[800px]:w-20 h-auto"
              alt="logo"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopBrandsComponent;
