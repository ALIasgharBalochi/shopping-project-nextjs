import Image from "next/image";
import closeIcon from "@/public/iconsax/close-circle.svg";

type Props = {
  closeDrawer: () => void;
};

const DrawerHeaderComponent: React.FC<Props> = ({ closeDrawer }) => {
  return (
    <div className=" flex justify-between">
      <h1>LOGO</h1>
      <button onClick={closeDrawer}>
        <Image src={closeIcon} width={30} height={30} alt="close" />
      </button>
    </div>
  );
};

export default DrawerHeaderComponent;
