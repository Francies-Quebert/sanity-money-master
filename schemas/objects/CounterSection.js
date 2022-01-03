export default {
  title: "Counter Section",
  type: "object",
  name: "CounterSection",
  fields: [
    {
      type: "string",
      name: "countersectiontitle",
      title: "Counter Section Title",
    },
    {
      type: "string",
      name: "titlehightlighted",
      title: "Title Highlighted",
    },
    {
      type: "array",
      name: "countersection",
      title: "Counter Type",
      of: [{ type: "userCounter" }],
    },
  ],
};
