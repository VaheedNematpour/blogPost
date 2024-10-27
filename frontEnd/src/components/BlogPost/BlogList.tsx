import { Blogs } from "../../services/blog-service";
import BlogCart from "./BlogCart";

interface Props {
  blogs: Blogs[];
}

function BlogList({ blogs }: Props) {
  return (
    <>
      <h2 className="text-3xl text-gray-800 font-bold my-4">BLog List</h2>

      {blogs.map((blog) => (
        <BlogCart blog={blog} key={blog.id} />
      ))}
    </>
  );
}

export default BlogList;
