export default {
    title: "Trending Offer Section",
    type: "object",
    name: "TrendingOfferSection",
    fields: [
      {
        type: "string",
        name: "TrendingOfferSectiontitle",
        title: "Trending Offer Section Title",
      },
      {
        type: "string",
        name: "titlehightlighted",
        title: "Title Highlighted",
      },
      {
        type: "array",
        name: "TrendingOfferSection",
        title: "Trending Offer Section",
        of: [{ type: "homeTrendingOffer" }],
      },
    ],
  };
  