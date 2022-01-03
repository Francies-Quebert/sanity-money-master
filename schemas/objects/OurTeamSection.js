export default {
    title: "Our Team Section",
    type: "object",
    name: "OurTeamSection",
    fields: [
      {
        type: "string",
        name: "OurTeamSectiontitle",
        title: "Our Team Section Title",
      },
      {
        type: "string",
        name: "titlehightlighted",
        title: "Title Highlighted",
      },
      {
        type: "string",
        name: "OurTeamSectionDescription",
        title: "Our Team Section Description",
      },
      {
        type: "url",
        name: "OurTeamSectionLink",
        title: "Our Team Section Link",
      },
      {
        type: "array",
        name: "OurTeamSection",
        title: "Our Team Section",
        of: [{ type: "ourTeamProfile" }],
      },
    ],
  };
  