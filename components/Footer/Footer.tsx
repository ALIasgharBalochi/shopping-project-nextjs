import Copyright from "@mui/icons-material/Copyright";
const Footer = () => {
  const data: Array<{ name: string }> = [
    { name: "cookie" },
    { name: "Privacy" },
    { name: "Terms and Conditions" },
    { name: "Imprint" },
  ];
  return (
    <div className=" w-full h-64 bg-primary-900">
      <div className=" w-full h-3/4 flex ">
        <div className=" w-[60%]">
          <div></div>
          <div></div>
        </div>
        <div className=" w-[40%]"></div>
      </div>
      <div className=" w-full h-[4rem] flex flex-row items-center justify-between px-24 text-gray-200">
        <p className=" flex items-center text-sm">
          <Copyright /> ali balochi2024
        </p>
        <div className=" flex flex-row items-center">
          {data.map((d: { name: string }, index: number) => (
            <p className=" mx-2 text-sm">{d.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
