"use client";

import { useState, useEffect } from "react";

interface Comment {
  name: string;
  comment: string;
}

export const CommentSection = ({ slug }: { slug: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fetchComments = async () => {
    if (!slug) {
      console.error("Slug is missing, skipping fetch.");
      return;
    }

    try {
      const res = await fetch(`/api/comment?slug=${encodeURIComponent(slug)}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }
      const data = await res.json();
      setComments(data.comments || []);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slug }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit comment");
      }

      setForm({ name: "", email: "", comment: "" });
      setSubmitted(true);

      // Refresh comments after submission
      fetchComments();
    } catch (err) {
      setError("Failed to submit comment. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Leave a Comment</h2>

      {submitted && (
        <p className="text-green-600 mb-6 p-4 bg-green-100 rounded-lg">
          Your comment has been submitted!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Write your comment..."
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          required
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Comment
        </button>
      </form>

      {comments.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-600">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
