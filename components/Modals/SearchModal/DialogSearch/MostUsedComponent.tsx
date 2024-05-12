const MostUsedKeyComponent: React.FC = () => {
  const MostUsedKeyData: string[] = [
    "Tablets",
    "Headphones",
    "Smartohnes",
    "Smartwatch",
    "Laptops",
    "USB Drive",
    "Phone Cases",
  ];
  return (
    <div className=" m-3">
      <h1 className=" font-bold">Moset Used Keyboards</h1>
      <div className=" grid grid-cols-2">
        {MostUsedKeyData.map((d: string, index: number) => (
          <h4 key={index} className=" m-2 text-sm">
            {d}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default MostUsedKeyComponent;
