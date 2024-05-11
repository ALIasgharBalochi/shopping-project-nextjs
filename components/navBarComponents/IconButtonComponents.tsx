import Image from "next/image";
import Link from "next/link";
import searchIcon from "@/public/iconsax/search-normal-1.svg";
import AccountMenu from "../Modals/AccountModal/AccoundModal";
import SearchModal from "../Modals/SearchModal";
import { DataButton } from "../Types/Types";
type PropsType = {
  setOpenSearchModal: (arg: boolean) => void;
  openSearchModal: boolean;
  onCloseSearchModal: () => void;
  IconButton: DataButton[];
};
const IconButtonComponents: React.FC<PropsType> = ({
  setOpenSearchModal,
  openSearchModal,
  IconButton,
  onCloseSearchModal,
}) => {
  return (
    <div className=" flex items-center">
      <button
        className="mx-1 max-[800px]:hidden"
        onClick={() => setOpenSearchModal(true)}
      >
        <Image src={searchIcon} width={20} height={20} alt="img" />
      </button>
      <SearchModal open={openSearchModal} close={onCloseSearchModal} />
      {IconButton.map((d: DataButton, index: number) => (
        <Link
          key={index}
          href={d.address}
          className={d.style ? d.style : "mx-1"}
        >
          <Image
            src={d.icon != undefined ? d.icon : " "}
            width={20}
            height={20}
            alt="img"
          />
        </Link>
      ))}
      <AccountMenu />
    </div>
  );
};
export default IconButtonComponents;
