import MegaMenuProduct from "../../MegaMenu";
import DataButtonComponent from "./DataButton";

const LinkButton: React.FC = () => {
  return (
    <div className="max-[800px]:hidden flex">
      <MegaMenuProduct />
      <DataButtonComponent />
    </div>
  );
};
export default LinkButton;
