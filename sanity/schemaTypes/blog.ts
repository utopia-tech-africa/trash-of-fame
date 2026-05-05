import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),

    // optional video
    defineField({
      name: "video",
      title: "Video URL",
      type: "url",
      description: "Optional video (YouTube, MP4, etc.)",
    }),

    defineField({
      name: "authorName",
      type: "string",
    }),

    defineField({
      name: "excerpt",
      type: "string",
      description: "Short summary (20–30 words)",
      validation: (Rule) => Rule.max(160),
    }),

    defineField({
      name: "body",
      type: "blockContent",
      description: "Full blog content OR external link notes",
    }),

    defineField({
      name: "externalUrl",
      type: "url",
      description: "If this blog redirects somewhere else",
    }),

    defineField({
      name: "readTime",
      type: "string",
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],
});
