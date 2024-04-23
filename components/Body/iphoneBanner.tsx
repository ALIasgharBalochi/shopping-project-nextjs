import Image from "next/image";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import img from "@/public/iphone-img.png";

type Data = {
  count: number;
  time: string;
};
const IphoneBannerComponent = () => {
  const data: Data[] = [
    { count: 8, time: "day" },
    { count: 8, time: "hour" },
    { count: 8, time: "minu" },
    { count: 8, time: "sec" },
  ];

  return (
    <div id="iphone-bg" className=" w-full h-60 my-5 rounded-md ">
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid xs={6} sm={6} md={6} sx={{ overflowY: "hidden" }}>
          <h1 className="text-black mx-5 my-1 text-xl max-[800px]:text-sm">
            iphone <span className=" text-white ">15 Series</span>
          </h1>
          <div className=" w-full h-full flex items-center justify-center">
            <Image
              src={img}
              className=" w-2/4 max-[800px]:w-3/4 h-auto"
              alt="img"
            />
          </div>
        </Grid>
        <Grid xs={6} sm={6} md={6}>
          <div className=" w-full h-full flex flex-col items-center justify-around">
            <div className=" flex flex-row">
              {data.map((d: Data, index: number) => (
                <div
                  key={index}
                  className=" text-xs flex flex-col items-center justify-center p-1 m-1 border-black border-solid border-2 rounded-md"
                >
                  <p>{d.count}</p>
                  <p>{d.time}</p>
                </div>
              ))}
            </div>
            <div className=" text-black">
              <div>
                <h1 className=" max-[800px]:text-xs font-bold">
                  It feels good to be the first
                </h1>
                <p className=" max-[800px]:text-xs max-h-10 max-w-34">
                  Get ready for the future of Stay tuned tor the big iPhone 15
                  sale.
                </p>
              </div>
            </div>

            <button className=" py-4 px-8 max-[800px]:py-2  max-[800px]:px-4 max-[800px]:text-xs rounded-md bg-primary-200 ">
              Shop Now
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default IphoneBannerComponent;
