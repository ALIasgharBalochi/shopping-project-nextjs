import CheckLengthStr from "@/components/CheckLengthStr";
import { Products } from "@/components/Types/Types";
type Props = {
  searchProducts: Products[] | [];
};
const SearchComponent: React.FC<Props> = ({ searchProducts }) => {
  return (
    <>
      <div className=" w-full h-full grid grid-cols-6 gap-2">
        {searchProducts.map((p: Products, index) => (
          <div
            key={index}
            className=" rounded-lg  hover:shadow-xl p-1 bg-white cursor-pointer"
          >
            <div>
              <img
                src={p.photo}
                width="100px"
                height="200px"
                className=" rounded-lg"
              />
            </div>
            <h2 className=" text-black">
              <CheckLengthStr str={p.name} n={15} />
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchComponent;
