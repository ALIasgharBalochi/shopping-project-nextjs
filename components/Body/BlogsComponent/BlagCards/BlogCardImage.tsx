import { Blogs } from "@/components/Types/Types";
type Props = {
  Img: string;
};
const BlogCardImage: React.FC<Props> = ({ Img }) => {
  return (
    <div className=" w-full h-48">
      <img src={Img} className=" w-full h-full rounded-t-md" alt="blog" />
    </div>
  );
};

export default BlogCardImage;
