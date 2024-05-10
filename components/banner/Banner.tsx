import BannerContentComponent from "./BannerContentComponent";
import BannerImage from "./BannerImage";
const Banner = () => {
  return (
    <div className=" flex w-full justify-around items-center min-[800px]:h-[325px] h-[180px]">
      <BannerContentComponent />
      <BannerImage />
    </div>
  );
};

export default Banner;
