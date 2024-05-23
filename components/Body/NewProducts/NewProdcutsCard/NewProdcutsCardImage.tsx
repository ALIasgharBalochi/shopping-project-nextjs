import { Products } from "@/components/Types/Types";

type Props = {
  p: Products;
};
const NewProdcutsCardImage: React.FC<Props> = ({ p }) => {
  return (
    <div className=" w-full flex justify-center">
      <img src={p.photo} className="w-[100px] h-auto" />
    </div>
  );
};
export default NewProdcutsCardImage;
