export default {
    title: 'Add Submenu',
    name: 'hasSubmenuBlock',
    type: 'object',
    // fields: [
    //   {
    //     name: 'add_sub_menu_items',
    //     type: 'array',
    //     of: [
    //       {type: 'sub_menu_item_block'}
    //     ]
    //   } 
    // ]
    fields: [
      {
        name: 'add_menu_group',
        type: 'array',
        of: [
          {type: 'sub_menu_group'}
        ]
      } 
    ]
  }