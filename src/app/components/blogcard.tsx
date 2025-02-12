import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <Image
        src={image}
        alt={title}
        width={768}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-bold line-clamp-3 h-[4.5rem] leading-6">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-block mt-6 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded self-start"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
