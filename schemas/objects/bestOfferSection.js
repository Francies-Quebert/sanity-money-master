export default {
    name: "bestOfferSection",
    type: "object",
    title: "Best Offer Section",
    fields: [
      {
        name: "bestOfferHeading",
        type: "string",
        title: "Best Offer Heading",
      },
      {
        name: "bestOfferHighlightedHeading",
        type: "string",
        title: "Best Offer Highlighted Heading",
      },
      {
        name: "bestOfferInputData",
        type: "array",
        title: "Best Offer Input Data",
        of: [
          {
            type: "bestOfferInputSection",
          },
        ],
      },
    ],
  };