import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Blogs } from "@/components/Types/Types";
import BlogCardContainerComponent from "./BlagCards/BlogCardContainerComponent";
type Props = {
  data: Blogs[];
};
const BlogsContent: React.FC<Props> = ({ data }) => {
  return (
    <Grid container>
      {data.length > 0 ? (
        <>
          <BlogCardContainerComponent data={data[0]} />
          <BlogCardContainerComponent data={data[1]} />
          <BlogCardContainerComponent data={data[2]} />
        </>
      ) : null}
    </Grid>
  );
};

export default BlogsContent;
