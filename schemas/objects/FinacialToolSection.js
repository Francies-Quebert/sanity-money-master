export default {
  title: "Finacial Tool Section",
  type: "object",
  name: "FinacialToolSection",
  fields: [
    {
      type: "string",
      name: "FinacialToolSectiontitle",
      title: "Finacial Tool Section Title",
    },
    {
      type: "string",
      name: "titlehightlighted",
      title: "Title Highlighted",
    },
    {
      type: "image",
      name: "HomeFinacialbgImage",
      title: "Background Image",
    },
    {
      type: "string",
      name: "homeFinancialToolaltImage",
      title: "Alt Image",
    },
    {
      type: "array",
      name: "FinacialToolSection",
      title: "Finacial Tool Section",
      of: [{ type: "homeFinancialTool" }],
    },
  ],
};
