export default {
  name: "sub_menu_group",
  type: "object",
  title: "Sub Menu Group",
  fields: [
    {
      name: "group_title",
      title: "Group Title",
      type: "string",
    },
    {
      title: "Group icon",
      name: "group_icon",
      type: "image",
    },
    {
      name: "add_sub_menu_items",
      type: "array",
      of: [{ type: "sub_menu_item_block" }],
    },
  ],
};
