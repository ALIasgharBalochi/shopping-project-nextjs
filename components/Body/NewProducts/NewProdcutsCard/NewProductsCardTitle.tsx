import { Products } from "@/components/Types/Types";
import CheckLengthStr from "@/components/CheckLengthStr";
type Props = {
  p: Products;
};
const NewProductsCardTitle: React.FC<Props> = ({ p }) => {
  return (
    <h1>
      <CheckLengthStr str={p.name} n={15} />
    </h1>
  );
};

export default NewProductsCardTitle;
