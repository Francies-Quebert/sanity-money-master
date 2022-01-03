export default {
    type: 'object',
    name: 'input',
    title: 'Sub menu',
    fields: [
      {
        name: 'condition',
        title: 'If you want to add sub menu click on yes',
        type: 'string',
        options: {
          list: [
            {title: 'Yes', value: 'hassubmenu'},
            {title: 'No', value: 'nothassubmenu'},
          ],
          layout: 'radio',
          direction: 'horizontal'
        },
      },
    ]
  }