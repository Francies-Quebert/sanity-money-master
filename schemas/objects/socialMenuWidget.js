export default {
    title: 'Social Menu',
    name: 'social_menu_section',
    type: 'object',
    fields: [
        {
            title: 'Social Widget Section',
            name: 'social_widget_section',
            type: 'array',
            of: [
                {
                    title: 'Add Social Menu',
                    type: 'social_widget_section'
                }
            ],
        },
    ],
}