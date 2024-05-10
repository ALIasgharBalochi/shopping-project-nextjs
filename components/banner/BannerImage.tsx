import Image from "next/image";
import image from "@/public/60-603767_laptops-png-transparent-png_prev_ui.png";
const BannerImage: React.FC = () => {
  return (
    <div className=" w-[60%]">
      <Image
        src={image}
        className=" max-[800px]:w-[400px] max-[800px]:h-[200px]"
        width={600}
        height={400}
        alt="image"
      />
    </div>
  );
};

export default BannerImage;
