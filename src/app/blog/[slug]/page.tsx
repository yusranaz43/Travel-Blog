// app/[slug]/page.tsx
import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { CommentSection } from "./CommentSection";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    "image": image.asset->url,
    content
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return notFound();
  }

  const { title, image, content } = post;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      {image && <img src={image} alt={title} className="w-full h-auto mb-4" />}
      <div className="text-lg text-gray-700">
        <PortableText value={content} />
      </div>
      <CommentSection slug={slug} />
    </div>
  );
}
