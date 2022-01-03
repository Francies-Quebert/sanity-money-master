export default {
  name: "creditSection",
  type: "object",
  title: "Credit Section",
  fields: [
    {
      name: "creditSectionTitle",
      type: "string",
      title: "Credit Section Title",
    },
    {
      name: "creditSectionHighlightedTitle",
      type: "string",
      title: "Credit Section Highlighted Title",
    },
    {
      name: "creditSectionImage",
      type: "image",
      title: "Credit Section Image",
    },
    {
      name: "creditSectionButton",
      type: "string",
      title: "Credit Section Button",
    },
    {
      type: "url",
      name: "creditSectionButtonLink",
      title: "Credit Section Button Link",
    },
    {
        name: "creditSectionFeaturesData",
        type: "array",
        title: "Credit Section Features Data",
        of: [
          {
            type: "creditSectionFeaturesInput",
          },
        ],
      },
  ],
};
