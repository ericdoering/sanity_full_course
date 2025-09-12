import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const artistType = defineType({
  name: "artist", 
  title: "Artist",
  type: "document",
  icon: UsersIcon,
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