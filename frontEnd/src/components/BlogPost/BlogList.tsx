import { Blogs } from "../../services/blog-service";

interface Props {
  blogs: Blogs[];
}

function BlogList({ blogs }: Props) {
  return (
    <>
      <h2>BLog List</h2>

      {blogs.map((blog) => (
        <ul key={blog.id}>
          <li>{blog.name}</li>
          <li>{blog.memo}</li>
        </ul>
      ))}
    </>
  );
}

export default BlogList;
