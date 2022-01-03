import S from "@sanity/desk-tool/structure-builder"

const hiddenDocTypes = (item) => !['siteSettings'].includes(item.getId())

export default () =>
    S.list()
    .title('Content')
    .items(
        [
            S.listItem()
            .title('Global Settings')
            .child(
                S.document()
                .schemaType('siteSettings')
                .documentId('siteSettings')
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(hiddenDocTypes)
        ]
    )