import CheckLengthStr from "@/components/CheckLengthStr";
import { Blogs } from "@/components/Types/Types";

type Props = {
  data: Blogs;
};
const BlogCardDescription: React.FC<Props> = ({ data }) => {
  return (
    <div className=" w-full flex flex-col m-2 p-1">
      <section className=" w-full flex items-center my-1 justify-around">
        <p className=" text-gray-500 text-xs">{data.date}</p>
        <p className=" text-gray-500 text-xs">{data.userName}</p>
      </section>
      <h1 className=" text-black text-sm font-bold group-hover:text-secondary-300">
        <CheckLengthStr str={data.title} n={35} />
      </h1>
      <p className=" text-gray-700 text-xs">
        <CheckLengthStr str={data.content} n={75} />
      </p>
    </div>
  );
};
export default BlogCardDescription;
