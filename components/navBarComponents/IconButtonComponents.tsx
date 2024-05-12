import Image from "next/image";
import Link from "next/link";
import AccountMenu from "../Modals/AccountModal/AccoundModal";
import SearchModal from "../Modals/SearchModal/SearchModal";
import { DataButton } from "../Types/Types";
type PropsType = {
  IconButton: DataButton[];
};
const IconButtonComponents: React.FC<PropsType> = ({ IconButton }) => {
  return (
    <div className=" flex items-center">
      {/* button search modal */}
      <SearchModal />
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
