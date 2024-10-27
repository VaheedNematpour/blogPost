import apiClient from "./api-client";

export interface Blogs {
  id: number;
  title: string;
  memo: string;
  author: string;
}

class BlogPost {
  getAllBlogs() {
    const controller = new AbortController();
    const request = apiClient.get<Blogs[]>("/blogs", {
      signal: controller.signal,
    });

    return { request, canceled: () => controller.abort() };
  }
}

export default new BlogPost();
