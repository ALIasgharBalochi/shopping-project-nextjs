const MostSearchedComponent: React.FC = () => {
  const mostSearched: string[] = [
    "MacBook Pro",
    "AirPods Pro",
    "Samsung S9",
    "Tablet",
    "Xiaomi",
    "JBL speaker",
    "Canon",
    "AirPods Max",
    "Asus",
    "MagSafe",
  ];
  return (
    <div className=" m-3">
      <h1 className=" font-bold">The Most Searched Items</h1>
      <div className=" grid grid-cols-2">
        {mostSearched.map((d: string, index: number) => (
          <h4 key={index} className=" m-2 text-sm">
            {d}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default MostSearchedComponent;
