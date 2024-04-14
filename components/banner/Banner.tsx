import Image from "next/image";
import image from "@/public/60-603767_laptops-png-transparent-png_prev_ui.png";
const Banner = () => {
  return (
    <div className=" flex w-full justify-around items-center min-[800px]:h-[325px] h-[180px]">
      <div className=" flex flex-col items-center w-[40%]">
        <h1 className=" min-[800px]:text-3xl mb-6">Teach Hiem</h1>
        <h2 className=" mb-10 max-[800px]:text-xs">
          "join the{" "}
          <span className=" text-secondary-300">digital revolution</span>"
        </h2>
        <button className=" rounded-md bg-secondary-400 text-white px-3 max-[800px]:text-xs min-[800px]:px-6 py-2">
          Explore More
        </button>
      </div>
      <div className=" w-[60%]">
        <Image
          src={image}
          className=" max-[800px]:w-[400px] max-[800px]:h-[200px]"
          width={600}
          height={400}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Banner;
