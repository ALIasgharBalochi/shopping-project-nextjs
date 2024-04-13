import Image from "next/image";
import image from "@/public/60-603767_laptops-png-transparent-png_prev_ui.png";
const Banner = () => {
  return (
    <div className=" flex w-full justify-around items-center h-[325px]">
      <div className=" flex flex-col">
        <h1 className=" text-3xl mb-6">Teach Hiem</h1>
        <h2 className=" mb-10">
          "join the{" "}
          <span className=" text-secondary-300">digital revolution</span>"
        </h2>
        <button className=" rounded-md bg-secondary-400 text-white px-6 py-2">
          Explore More
        </button>
      </div>
      <div>
        <Image src={image} width={600} height={400} alt="image" />
      </div>
    </div>
  );
};

export default Banner;
