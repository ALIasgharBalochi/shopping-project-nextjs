import Image from "next/image";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import img from "@/public/JBL_LIVE650BTNC_Product-Image_Group-e1553340202154-transformed.png";

const HeadphoneComponent = () => {
  return (
    <div
      id="test-bg"
      className=" w-full h-60 max-[800px]:h-52 my-5 rounded-md "
    >
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid xs={4} sm={4} md={6}>
          <div className=" w-full h-full flex flex-col items-center justify-around">
            <div className=" text-white text-center">
              <h1 className=" text-2xl max-[800px]:text-sm">Smart Watch</h1>
              <p className=" max-[800px]:text-xs">Various designs and brands</p>
            </div>

            <button className=" py-4 px-8 max-[800px]:py-2 max-[800px]:px-4 max-[800px]:text-xs rounded-md bg-secondary-300 ">
              Shop Now
            </button>
          </div>
        </Grid>
        <Grid xs={8} sm={8} md={6}>
          <div className=" w-full h-full flex items-center justify-center">
            <Image src={img} className=" w-2/3 h-auto" alt="img" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeadphoneComponent;
