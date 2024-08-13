import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Projects')
                .child(
                    S.list()
                        .title('Projects')
                        .items([
                            S.listItem()
                              .title("Client Projects")
                              .child(
                                S.documentList()
                                  .title("Client Projects")
                                  .schemaType("project")
                                  .filter('_type == "project" && type == "client"')
                              ),
                            S.listItem()
                              .title("Personal Projects")
                              .child(
                                S.documentList()
                                  .title("Personal Projects")
                                  .schemaType("project")
                                  .filter('_type == "project" && type == "personal"')
                              ),
                          ])
                ),
            S.listItem()
                .title("Posts")
                .child(
                    S.documentList()
                        .title("Posts")
                        .schemaType("post")
                        .filter('_type == "post"')
                ),
        ])