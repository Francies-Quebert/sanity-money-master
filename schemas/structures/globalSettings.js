export default {
  name: "siteSettings",
  type: "document",
  title: "Global Settings",
  fields: [
    {
      title: "Site Title",
      name: "sitetitle",
      type: "string",
    },
    {
      title: "Meta Title",
      name: "sitemetatitle",
      type: "string",
    },
    {
      title: "Meta Description",
      name: "sitemetadescription",
      type: "text",
    },
    {
      title: "Header Settings",
      name: "headerblock",
      type: "header_section",
    },
    {
      title: "Footer Settings",
      name: "footerblock",
      type: "footer_section",
    },
    {
      title: "Social Menu",
      name: "socailmenublock",
      type: "social_menu_section",
    },
  ],
};
