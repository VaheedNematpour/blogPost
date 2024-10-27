import { Blogs } from "../../services/blog-service";

interface Props {
  blog: Blogs;
  key: number;
}

function BlogCart({ blog }: Props) {
  return (
    <>
      <article className="border-2 border-gray-600 rounded">
        <header className="px-6 py-2">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl text-gray-800 font-medium">{blog.title}</h3>

            <div className="flex space-x-1">
              <p className="text-md text-gray-600 font-medium">by:</p>
              <p className="text-md text-gray-800">{blog.author}</p>
            </div>
          </div>

          <hr className="w-1/3 mx-auto border-0 border-t-2 border-gray-600 rounded my-2" />
        </header>
        <main className="px-6 py-3">
          <p>{blog.memo}</p>
        </main>
      </article>
    </>
  );
}

export default BlogCart;
