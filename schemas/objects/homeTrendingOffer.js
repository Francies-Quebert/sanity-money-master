export default {
  type: "object",
  name: "homeTrendingOffer",
  title: "home TrendingOffer ",
  fields: [
    {
      type: "string",
      name: "bank_Name",
      title: "Bank Name",
    },
    {
      type: "string",
      name: "typeOfLoan",
      title: "Type Of Laon",
    },
    {
      type: "image",
      name: "bankimage",
      title: "Bank Image",
    },
    {
      type: "string",
      name: "altImage",
      title: "Alt Image",
    },
    {
      type: "string",
      name: "bankOffer",
      title: "Bank Offer",
    },
    {
      type: "string",
      name: "bankOffers",
      title: "Bank Offers",
    },
    {
      type: "array",
      name: "TrendingOffer",
      title: "Features Type",
      of: [{ type: "homeTrendingOfferSlider" }],
    },
    {
      type: "string",
      name: "typeOfLoanOffer",
      title: "Bank Loan Offer",
    },
  ],
};
