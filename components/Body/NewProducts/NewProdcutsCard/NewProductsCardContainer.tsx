import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Products } from "@/components/Types/Types";
import NewProductsCard from "./NewProductsCard";
type Props = {
  data: Products[] | [];
};
const NewProductsCardContainer: React.FC<Props> = ({ data }) => {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      {data.length > 0
        ? data.map((p: Products, index: number) => (
            <Grid
              key={index}
              xs={6}
              sm={6}
              md={3}
              sx={{
                height: "12rem",
                width: "15rem",
                padding: ".2rem",
              }}
            >
              <NewProductsCard p={p} />
            </Grid>
          ))
        : null}
    </Grid>
  );
};

export default NewProductsCardContainer;
