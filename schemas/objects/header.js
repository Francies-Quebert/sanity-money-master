export default {
    title: 'Header',
    type: 'object',
    name: 'header_section',
    fields: [
        {
            name: 'hdrlogo',
            title: 'Header Logo Image',
            type: 'image',
            description: 'Recommended Image Size 173px * 46px'
        },
        // {
        //     name: 'try_free_btn',
        //     title: 'Try for free button',
        //     type: 'common_btn'
        // },
        {
            name: 'mainnavigation',
            title: 'Select header menu',
            type: 'reference',
            to: [
                {type: 'navigation'}
            ]
        }
    ],
}