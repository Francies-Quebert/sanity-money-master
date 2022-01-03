export default {
  type: "object",
  name: "creditAccordon",
  title: "credit Accordon ",
  fields: [
    {
      type: "string",
      name: "creditAccordonQuestion",
      title: "Credit Accordon Question",
    },
    // {
    //   type: "string",
    //   name: "creditAccordonAnswer",
    //   title: "Credit Accordon Answer",
    // },
    {
      type: "array",
      name: "creditAccordonAnswer",
      title: "Credit Accordon Answer",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
