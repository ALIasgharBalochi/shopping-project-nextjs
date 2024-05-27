import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Blogs } from "@/components/Types/Types";
import BlogCardImage from "./BlogCardImage";
import BlogCardDescription from "./BlogCardDescription";
type Props = {
  data: Blogs;
};
const BlogCardContainerComponent: React.FC<Props> = ({ data }) => {
  return (
    <Grid xs={12} sm={12} md={4} sx={{ p: "1px" }}>
      <div className="group hover:shadow-sm cursor-pointer flex flex-col rounded-md bg-white ">
        <BlogCardImage Img={data.photo_tomnail} />
        <BlogCardDescription data={data} />
      </div>
    </Grid>
  );
};
export default BlogCardContainerComponent;
