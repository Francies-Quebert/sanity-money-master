export default {
  title: "Credit Accordon Section",
  type: "object",
  name: "CreditAccordonSection",
  fields: [
    {
      type: "string",
      name: "CreditAccordonSectiontitle",
      title: "Credit Accordon Section Title",
    },
    {
      type: "array",
      name: "CreditAccordonSection",
      title: "Credit Accordon Section",
      of: [{ type: "creditAccordon" }],
    },
  ],
};
