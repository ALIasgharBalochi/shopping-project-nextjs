import { CategoreiType } from "@/components/Types/Types";
type Props = {
  data: CategoreiType[] | [];
};

const CategoresContentComponent: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((c: CategoreiType, index: number) => (
        <div
          key={index}
          className=" w-44 h-44 flex flex-col bg-white p-2 rounded-md justify-around items-center "
        >
          <div className=" w-[100px] h-[auto]">
            <img src={c.photo} className=" w-full h-auto" alt="categories" />
          </div>
          <div>
            <h2 className=" text-black">{c.name}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoresContentComponent;
