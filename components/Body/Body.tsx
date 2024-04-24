import BestSellersProducts from "./BestSellrsProducts";
import BlogsComponent from "./BlogsCompoentes";
import CaseBanner from "./caseBanner";
import CategoriesComponent from "./CategoresComponent";
import HeadphoneComponent from "./HeadphoneComponent";
import IphoneBannerComponent from "./iphoneBanner";
import NewProducts from "./NewProducts";
import ProductsSlider from "./ProductsSlider";
import TopBrandsComponent from "./TopBrands";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
const Body = () => {
  return (
    <div className=" px-[5rem] max-[500px]:px-[2rem]">
      <CategoriesComponent />
      <ProductsSlider />
      <NewProducts />
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid xs={12} sm={12} md={8}>
          <div className=" min-[800px]:p-2">
            <IphoneBannerComponent />
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className=" min-[800px]:p-2">
            <CaseBanner />
          </div>
        </Grid>
      </Grid>
      <BestSellersProducts />
      <TopBrandsComponent />
      <HeadphoneComponent />
      <BlogsComponent />
    </div>
  );
};

export default Body;
