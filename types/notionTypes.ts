export type ContentRow = {
    id: { id: string; title: { text: { content: string } }[] }
    content: { id: string; rich_text: { text: { content: string } }[] }
}

export type HomeContent = {
    id: string | undefined;
    content: string | undefined;
}[]
