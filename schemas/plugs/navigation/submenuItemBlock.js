export default {
    name: 'sub_menu_item_block',
    type: 'object',
    title: 'Sub menu item',
    fields: [
      {
        name: 'sub_menu_item_title',
        title: 'Menu Title',
        type: 'string'
      },
      {
        title: 'Menu icon',
        name: 'menu_icon',
        type: 'image'
      },
      {
        type: 'boolean',
        name: 'sub_menu_item_externallink',
        title: 'External link',
        default: 'false'
      },
      {
        type: 'boolean',
        name: 'menu_target_link',
        title: 'Open in new tab'
      },
      {
        name: 'sub_menu_item_link',
        title: 'Menu Link',
        type: 'string'
      }
    ]
  }