import { defineField, defineType } from "sanity";

export const artistType = defineType({
  name: "artist", 
  title: "Artist",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});