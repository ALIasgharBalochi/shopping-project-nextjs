import Image from "next/image";

import img from "@/public/case-img.png";

const CaseBanner = () => {
  return (
    <div
      id="case-banner"
      className=" w-full h-60 rounded-md flex flex-col items-center"
    >
      <div className=" w-full text-center">
        <p className=" text-secondary-500 font-bold">Case mbs1200</p>
      </div>
      <div className=" w-full h-40 flex items-center justify-around">
        <div className=" text-center min-[800px]:text-xs">
          <h1 className=" text-primary-200">Digital Edotion + 2TB</h1>
          <button className=" bg-primary-400 py-2 px-4 min-[800px]:text-sm min-[800px]:px-3 rounded-md text-white">
            Buy Now
          </button>
        </div>
        <Image
          src={img}
          className=" w-1/4 min-[900px]:w-2/5 h-auto"
          alt="img"
        />
      </div>
    </div>
  );
};

export default CaseBanner;
