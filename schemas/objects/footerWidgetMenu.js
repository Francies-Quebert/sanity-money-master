export default {
    title:'Widget Menu Section',
    name:'widget_menu_section',
    type: 'object',
    fields: [
        {
            title: 'Section Title',
            name: 'widget_menu_section_title',
            type: 'string'
        },
        {
            title: 'Add Menu Items',
            name: 'widget_section_menu',
            type: 'reference',
            to: [
                {type: 'navigation'}
            ],
        },
    ],
}