export default {
    name: 'menu_section',
    title: 'Menu',
    type: 'object',
    fields: [
      {
        name: 'menu_item_title',
        title: 'Menu Title',
        type: 'string',
      },
      {
        type: 'boolean',
        name: 'menu_item_externallink',
        title: 'External link'
      },
      {
        type: 'boolean',
        name: 'menu_target_link',
        title: 'Open in new tab'
      },
      {
        name: 'menu_item_link',
        title: 'Menu Link',
        type: 'string'
      },
      {
        name: 'sub_menu_section',
        type: 'sub_menu_block'
      }
    ]
  } 