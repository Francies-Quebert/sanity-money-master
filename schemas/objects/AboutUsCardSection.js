export default {
    title: "AboutUs Card Section",
    type: "object",
    name: "AboutUsCardSection",
    fields: [
      {
        type: "string",
        name: "AboutUsCardSectitle",
        title: "AboutUs Card Section Title",
      },
      {
        type: "string",
        name: "titlehightlighted",
        title: "Title Highlighted",
      },
      {
        type: "array",
        name: "AboutUsCardSection",
        title: "AboutUs Card Section",
        of: [{ type: "aboutcards" }],
      },
    ],
  };