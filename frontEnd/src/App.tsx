import { useEffect, useState } from "react";
import blogService, { Blogs } from "./services/blog-service";
import { CanceledError } from "./services/api-client";
import BlogList from "./components/BlogPost/BlogList";

function App() {
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { canceled, request } = blogService.getAllBlogs();

    request
      .then((res) => setBlogs(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => canceled();
  }, []);

  return (
    <>
      <header className="max-w-5xl mx-auto py-8"></header>
      <main className="max-w-5xl mx-auto">
        {error && <p>{error}</p>}
        <BlogList blogs={blogs} />
      </main>
    </>
  );
}

export default App;
