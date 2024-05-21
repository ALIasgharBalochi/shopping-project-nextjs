import Grid from "@mui/material/Unstable_Grid2/Grid2";
const TextComponent: React.FC = () => {
  return (
    <Grid xs={5} sm={3} md={3} lg={3} xl={3}>
      <div className=" w-full h-full flex flex-col items-center justify-around text-white">
        <div className=" text-center">
          <h1>Products On Sale</h1>
          <h3>Shop Now!</h3>
        </div>
        <button>View</button>
      </div>
    </Grid>
  );
};

export default TextComponent;
