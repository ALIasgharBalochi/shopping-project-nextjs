import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Products } from "@/components/Types/Types";
import CheckLengthStr from "@/components/CheckLengthStr";
type Props = {
  products: Products[] | [];
};
const ProductsComponent: React.FC<Props> = ({ products }) => {
  return (
    <Grid xs={7} sm={9} md={9} lg={9} xl={9}>
      <div className=" w-auto h-full overflow-y-auto flex flex-row items-center ">
        {products.length > 0
          ? products.map((p: Products, index: number) => (
              <div
                key={index}
                className=" w-32 h-full flex flex-col items-center bg-white rounded-md py-2 mr-2"
              >
                <div className=" w-full flex items-center justify-start ">
                  <span className=" rounded-r-md bg-secondary-100">-50%</span>
                </div>
                <img src={p.photo} className=" w-[80px] h-auto" />
                <h1 className=" text-xs mb-auto">
                  <CheckLengthStr str={p.name} n={20} />
                </h1>
                <div className=" w-full flex flex-row items-center justify-around text-xs">
                  <p>$50.00</p>
                  <p>$25.00</p>
                </div>
              </div>
            ))
          : null}
      </div>
    </Grid>
  );
};
export default ProductsComponent;
