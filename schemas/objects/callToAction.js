export default {
    title:'Call to action',
    type: 'object',
    name:'common_btn',
    fields: [
        {
            type: 'boolean',
            name: 'btnhiglight',
            title: 'Button highlight',
            default: 'false'
        },
        {
            type: 'string',
            name: 'btntext',
            title: 'Button Text'
        },
        {
            type: 'boolean',
            name: 'btnexternallink',
            title: 'External link',
            default: 'false'
        },
        {
            type: 'string',
            name: 'btnlink',
            title: 'Button URL'
        },
    ],
}