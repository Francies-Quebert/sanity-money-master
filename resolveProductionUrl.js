const isDraft = (id) => id.includes("drafts");

export default function resolveProductionUrl(document) {
  // First, we select a specific type of document
  if (
    document._type === "schdemo" ||
    document._type === "post" ||
    document._type === "page" ||
    document._type === "blog" ||
    document._type === "frontpageblock" ||
    document._type === "thankyoupages" ||
    document._type === "product_page" ||
    document._type === "case_studies" ||
    document._type === "videolibrary"
  ) {
    // Then we get its ID
    let id = document._id;
    let type = document._type;
    // if it's a draft, we split its _id with the "drafts." substring, which will return an array,
    // and get the second item in it, which will be the isolated _id without "drafts."
    if (isDraft(id)) {
      id = document._id.split("drafts.")[1];
    }
    // And return a template string reflecting the URL structure we want. In this case, we're doing a
    // simple conditional to return '&isDraft=true' as a param for drafts as we'll query them
    // differently in the front-end
    return `http://rudderstack-main-gatsby-website.s3-website-us-east-1.amazonaws.com/preview/?type=${type}&pageId=${id}${
      isDraft(document._id) ? "&isDraft=true" : ""
    }`;
  }
  return undefined;
}
