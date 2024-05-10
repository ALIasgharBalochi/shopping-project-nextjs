const BannerContentComponent: React.FC = () => {
  return (
    <div className=" flex flex-col items-center w-[40%]">
      <h1 className=" min-[800px]:text-3xl mb-6">Teach Hiem</h1>
      <h2 className=" mb-10 max-[800px]:text-xs">
        "join the{" "}
        <span className=" text-secondary-300">digital revolution</span>"
      </h2>
      <button className=" rounded-md bg-secondary-400 text-white px-3 max-[800px]:text-xs min-[800px]:px-6 py-2">
        Explore More
      </button>
    </div>
  );
};

export default BannerContentComponent;
