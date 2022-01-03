import React from 'react';
import conditionalFields from "../../ConditionalFields";
export default {
    title: "Sub Menu",
    name: 'sub_menu_block',
    type: 'object',
    inputComponent: conditionalFields,
    fields: [
      {
          name: 'submenuConditionBlock',
          type: 'input'
      },
      {
          name: 'submenuOptionsBlock',
          type: 'options'
      }
    ]
  }