import CheckLengthStr from "@/components/CheckLengthStr";
import { Products } from "@/components/Types/Types";
import NewProdcutsCardImage from "./NewProdcutsCardImage";
import NewProductsCardTitle from "./NewProductsCardTitle";
import NewProductsCardDetails from "./NewProductsCardDetails";
type Props = {
  p: Products;
};
const NewProductsCard: React.FC<Props> = ({ p }) => {
  return (
    <div className=" p-1 bg-white rounded-md w-full h-full ">
      <NewProdcutsCardImage p={p} />
      <hr className=" my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-50 dark:via-neutral-900" />
      <NewProductsCardTitle p={p} />
      <NewProductsCardDetails />
    </div>
  );
};
export default NewProductsCard;
