import BlogCard from "./components/blogcard";
import { client } from "../sanity/lib/client";

// Define the type for a blog
interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

// Server component to fetch blogs
export default async function HomePage() {
  // GROQ query to fetch blogs
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
    excerpt,
    "image": image.asset->url,
    "slug": slug.current
  }`;

  const blogs: Blog[] = await client.fetch(query);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Travel Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            description={blog.excerpt}
            image={blog.image}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
}
