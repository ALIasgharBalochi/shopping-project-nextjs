import CategoriesComponent from "./CategoresComponent";
import HeadphoneComponent from "./HeadphoneComponent";
import IphoneBannerComponent from "./iphoneBanner";
import NewProducts from "./NewProducts";
import ProductsSlider from "./ProductsSlider";
import TopBrandsComponent from "./TopBrands";
const Body = () => {
  return (
    <div className=" px-[5rem] max-[500px]:px-[2rem]">
      <CategoriesComponent />
      <ProductsSlider />
      <NewProducts />
      <IphoneBannerComponent />
      <TopBrandsComponent />
      <HeadphoneComponent />
    </div>
  );
};

export default Body;
