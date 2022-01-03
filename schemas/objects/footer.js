export default {
  title: "Footer",
  name: "footer_section",
  type: "object",
  fields: [
    {
      title: "Footer Menu Widget Section",
      name: "footer_widget_section",
      type: "array",
      of: [
        {
          title: "Add Widget Menu Section",
          type: "widget_menu_section",
        },
      ],
    },
    {
      title: "Footer Company Address & Info",
      name: "footer_company_Address_Info",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Footer Description Widget Section",
      name: "footer_desc_widget_section",
      type: "array",
      of: [
        {
          title: "Add Widget Descripition Section",
          type: "widget_desc_section",
        },
      ],
    },
    {
      title: "Logo Image",
      name: "footer_logo",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Recommended Image Size 16px * 16px",
    },
    {
      title: "Copy Right Text",
      name: "copy_right_text",
      type: "string",
    },
  ],
};
