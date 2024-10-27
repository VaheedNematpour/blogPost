import { Blogs } from "../../services/blog-service";
import BlogCart from "./BlogCart";

interface Props {
  blogs: Blogs[];
}

function BlogList({ blogs }: Props) {
  return (
    <>
      <h2>BLog List</h2>

      {blogs.map((blog) => (
        <BlogCart blog={blog} key={blog.id} />
      ))}
    </>
  );
}

export default BlogList;
