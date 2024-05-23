import { Star } from "@mui/icons-material";

const NewProductsCardDetails: React.FC = () => {
  return (
    <div className=" flex justify-between w-full">
      <p>$100.00</p>
      <p className=" flex items-center text-primary-600">
        <Star />
        4.5
      </p>
    </div>
  );
};
export default NewProductsCardDetails;
