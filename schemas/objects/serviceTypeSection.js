export default {
  name: "serviceTypeSection",
  type: "object",
  title: "Service Type Section",
  fields: [
    {
      type: "string",
      name: "hightlighttitle",
      title: "Hightlighted Title",
      },
    {
      name: "serviceTypeData",
      type: "array",
      title: "Service Type Data",
      of: [
        {
          type: "serviceTypeInputs",
        },
      ],
    },
  ],
};
