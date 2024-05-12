import Image from "next/image";
import closeIcon from "@/public/iconsax/close-circle.svg";
import searchIcon from "@/public/iconsax/search-normal-1.svg";
type Props = {
  query: {
    text: string;
  };
  searched: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
};
const DialogSearchInput: React.FC<Props> = ({
  query,
  searched,
  handleClose,
}) => {
  return (
    <div className=" flex items-center">
      <div className="pt-2 relative mr-auto text-gray-600">
        <input
          value={query.text}
          onChange={searched}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
          type="search"
          name="search"
          placeholder="What can we help you to find?"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <Image src={searchIcon} width={20} height={20} alt="img" />
        </button>
      </div>
      <div onClick={handleClose} className=" cursor-pointer">
        <Image src={closeIcon} width={20} height={20} alt="close" />
      </div>
    </div>
  );
};

export default DialogSearchInput;
