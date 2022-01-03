export default {
  title: "Our Partner Section",
  type: "object",
  name: "OurPartnerSection",
  fields: [
    {
      type: "string",
      name: "OurPartnerSectiontitle",
      title: "Our Partner Section Title",
    },
    {
      type: "string",
      name: "titlehightlighted",
      title: "Title Highlighted",
    },
    {
      type: "array",
      name: "OurPartnerSection",
      title: "Our Partner Section",
      of: [{ type: "ourPartner" }],
    },
  ],
};
