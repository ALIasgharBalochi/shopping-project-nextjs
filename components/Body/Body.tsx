import CategoriesComponent from "./CategoresComponent";
import NewProducts from "./NewProducts";
import ProductsSlider from "./ProductsSlider";
const Body = () => {
  return (
    <div className=" px-[5rem] max-[500px]:px-[2rem]">
      <CategoriesComponent />
      <ProductsSlider />
      <NewProducts />
    </div>
  );
};

export default Body;
