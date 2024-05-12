import { useState } from "react";
import DialogSearchInput from "./DialogSearchInput";
import { Products } from "@/components/Types/Types";
import SearchComponent from "./SearchComponent";
import MostSearchedComponent from "./MostSearched";
import MostUsedKeyComponent from "./MostUsedComponent";
type Props = {
  close: () => void;
  products: Products[] | [];
};
const DialogContentComponent: React.FC<Props> = ({ products, close }) => {
  const [query, setQuery] = useState<{ text: string }>({ text: "" });
  const [searchProducts, setSearchProducts] = useState<Products[]>([]);

  const searched = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, text: event.target.value });
    const allproducts = products.filter((p: Products) => {
      return p.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setSearchProducts(allproducts);
  };

  const handleClose = () => {
    close();
    setSearchProducts([]);
  };
  return (
    <div className=" p-3">
      <DialogSearchInput
        searched={searched}
        query={query}
        handleClose={handleClose}
      />
      <div>
        {searchProducts.length > 0 && query.text.length > 0 ? (
          <>
            <SearchComponent searchProducts={searchProducts} />
          </>
        ) : (
          <div className=" flex">
            <MostSearchedComponent />
            <MostUsedKeyComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogContentComponent;
