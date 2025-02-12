import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_SANITY_API_VERSION,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

const client = createClient(config);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, comment, slug } = body;

  if (!name || !email || !comment || !slug) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await client.create({
      _type: "comment",
      name,
      email,
      comment,
      slug,
    });

    return NextResponse.json(
      { message: "Comment saved successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to save comment" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { message: "Slug is required" },
      { status: 400 }
    );
  }

  try {
    const query = `*[_type == "comment" && slug == $slug] | order(_createdAt desc)`;
    const comments = await client.fetch(query, { slug });

    return NextResponse.json({ comments }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
