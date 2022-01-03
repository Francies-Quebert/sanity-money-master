export default {
  title: "Text With Card Section",
  type: "object",
  name: "TextWithCardSection",
  fields: [
    {
      type: "string",
      name: "textWithCardSectiontitle",
      title: "Text With Card Section Title",
    },
    {
      type: "string",
      name: "titlehightlighted",
      title: "Title Highlighted",
    },
    {
      type: "text",
      name: "textWithCardSectiontitleDescription",
      title: "Text With Card Section Description",
    },
    {
      type: "array",
      name: "TextWithCardSection",
      title: "Text with Card Section",
      of: [{ type: "homeTextWithCard" }],
    },
  ],
};
