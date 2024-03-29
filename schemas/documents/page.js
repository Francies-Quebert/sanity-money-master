export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "meta_title",
      type: "string",
      title: "Meta Title",
    },
    {
      name: "meta_desc",
      type: "text",
      title: "Meta description",
    },
    {
      name: "pagebuildersection",
      title: "Add content",
      type: "array",
      of: [
        { type: "common_btn" },
        { type: "home_landing_section" },
        { type: "RightTextLeftImgSection" },
        { type: "CounterSection" },
        { type: "TrendingOfferSection" },
        { type: "serviceTypeSection" },
        { type: "testimonials" },
        { type: "TextWithCardSection" },
        { type: "BestRewardSection" },
        { type: "OurTeamSection" },
        { type: "FinacialToolSection" },
        { type: "OurPartnerSection" },
        { type: "creditSection" },
        { type: "featuresSection" },
        { type: "bestOfferSection" },
        { type: "CreditAccordonSection" },
        { type: "AboutUsCardSection" },
        { type: "WhoWeAreSection" },
        { type: "WhoWeDoSection" },
        { type: "emi_calc_section" },
        { type: "contact_us" },
      ],
    },
  ],
};
