import CategoriesComponent from "./CategoresComponent";
import HeadphoneComponent from "./HeadphoneComponent";
import NewProducts from "./NewProducts";
import ProductsSlider from "./ProductsSlider";
import TopBrandsComponent from "./TopBrands";
const Body = () => {
  return (
    <div className=" px-[5rem] max-[500px]:px-[2rem]">
      <CategoriesComponent />
      <ProductsSlider />
      <NewProducts />
      <TopBrandsComponent />
      <HeadphoneComponent />
    </div>
  );
};

export default Body;
