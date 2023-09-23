export type ContentRow = {
    id: { id: string; title: { text: { content: string } }[] }
    content: { id: string; rich_text: { text: { content: string } }[] }
}

export type HomeContent = {
    id: string | undefined;
    content: string | undefined;
}[]

export type ProjectsRows = {
    Name: { id: string; type: string; title: { text: { content: string } }[] },
    projectDate: {
        id: string;
        type: string;
        created_time: string
    },
    projectTag: {
        id: string; type: string; select: {
            id: string;
            name: string;
            color: string;
        }
    },
    projectStack: {
        id: string; type: string; multi_select: {
            id: string;
            name: string;
            color: string;
        }[]
    },
    projectSummary: { id: string; rich_text: { text: { content: string } }[] }
    projectFeatured: { id: string, type: string, checkbox: boolean },
    projectCode: { id: string; type: string; url: string | null },
    projectLink: { id: string; type: string; url: string | null },
    projectCover: { id: string, type: string, url: string | null }
}


export type ProjectsContent = {
    name: string | undefined;
    date: string | undefined;
    tag: string | undefined;
    stack: string[] | undefined;
    code: string | undefined;
    link: string | undefined;
    isFeatured: boolean;
    cover: string | undefined;
    summary: string | undefined;
}[]
