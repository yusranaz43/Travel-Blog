export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
    {
      name: "excerpt",
      type: "string",
      title: "Short Description",
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "block" }],
      title: "Content",
    },
    {
      name: "comments",
      type: "array",
      title: "Comments",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "comment", type: "text", title: "Comment" },
            { name: "email", type: "string", title: "Email" },
            { name: "approved", type: "boolean", title: "Approved", default: false },
          ],
        },
      ],
    },
  ],
};
