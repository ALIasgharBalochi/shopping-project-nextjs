"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import fetchData from "@/data/dataFetch";
import searchIcon from "@/public/iconsax/search-normal-1.svg";
import { Products } from "../../Types/Types";
import DialogSearch from "./DialogSearch/DialogSearch";

const SearchModal: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const onCloseSearchModal = () => {
    setOpenSearchModal(false);
  };

  useEffect(() => {
    const allProducts = async () => {
      const URLgetAllProducts: string = "http://localhost:9000/prodcts";
      const data: Products[] = await fetchData(URLgetAllProducts);
      return setProducts(data);
    };
    allProducts();
  }, []);

  return (
    <>
      <button
        className="mx-1 max-[800px]:hidden"
        onClick={() => setOpenSearchModal(true)}
      >
        <Image src={searchIcon} width={20} height={20} alt="img" />
      </button>
      <DialogSearch
        open={openSearchModal}
        close={onCloseSearchModal}
        products={products}
      />
    </>
  );
};

export default SearchModal;
