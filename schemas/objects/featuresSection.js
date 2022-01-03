export default {
  name: "featuresSection",
  type: "object",
  title: "Features Section",
  fields: [
    {
      name: "featuresHeading",
      type: "string",
      title: "Features Heading",
    },
    {
      name: "featuresTitle",
      type: "string",
      title: "Features Title",
    },
    {
      name: "featuresImages",
      type: "image",
      title: "Features Images",
    },
    {
      name: "featuresImagesAlt",
      type: "string",
      title: "Features Images Alt",
    },
    {
      name: "featuresInputDataLeft",
      type: "array",
      title: "Features Input Data Left",
      of: [
        {
          type: "featuresInputSection",
        },
      ],
    },
    {
      name: "featuresInputDataRight",
      type: "array",
      title: "Features Input Data Right",
      of: [
        {
          type: "featuresInputSection",
        },
      ],
    },
  ],
};
