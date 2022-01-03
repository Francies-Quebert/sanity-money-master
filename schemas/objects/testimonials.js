export default {
  name: "testimonials",
  type: "object",
  title: "Testimonials",
  fields: [
    {
      name: "testimonialsHeading",
      type: "string",
      title: "Testimonials Heading",
    },
    {
        name: "testimonialsDesc",
        type: "text",
        title: "Testimonials Desc",
      },
    {
      name: "testimonialsData",
      type: "array",
      title: "Testimonials Data",
      of: [
        {
          type: "testimonialsInputs",
        },
      ],
    },
  ],
};
