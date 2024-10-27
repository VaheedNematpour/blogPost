import { Blogs } from "../../services/blog-service";

interface Props {
  blog: Blogs;
  key: number;
}

function BlogCart({ blog }: Props) {
  return (
    <>
      <article>
        <header className="border-b-2">
          <h3>{blog.title}</h3>
        </header>
        <main>
          <p>{blog.memo}</p>
        </main>
        <footer>
          <p>by:</p>
          <p>{blog.author}</p>
        </footer>
      </article>
    </>
  );
}

export default BlogCart;
