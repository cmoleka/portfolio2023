import { Client } from "@notionhq/client";
import type { HomeContent, ProjectsContent, ProjectsRows } from "@pTypes/notionTypes";

// Notion client
export const notionClient = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET,
});


// Get page Content
export const getPageContent = async () => {
    // call the notion API at /api/content endpoint.
    const { results } = await notionClient.databases.query({
        database_id: process.env.NOTION_CONTENT_DATABASE_ID || '',
    });

    // @ts-ignore
    const rows = results.map((res) => res.properties) as ContentRow[]

    const rowsStructured: HomeContent = rows.map((row) => ({
        id: row.id.title[0]?.text.content,
        content: row.content.rich_text[0]?.text.content,
    }));

    // Create a Map from the HomeContent array
    const contentMap = new Map<string | undefined, string | undefined>();
    rowsStructured.forEach(item => {
        contentMap.set(item.id, item.content);
    });

    return contentMap
}

export const getProjects = async () => {
    // call the notion API at /api/content endpoint.
    const { results } = await notionClient.databases.query({
        database_id: process.env.NOTION_PROJECTS_DATABASE_ID || '',
    });

    // @ts-ignore
    const rows = results.map((res) => res.properties) as ProjectsRows[]

    const rowsStructured: ProjectsContent = rows.map((row) => ({
        name: row.Name.title[0]?.text.content,
        date: row.projectDate.created_time,
        tag: row.projectTag.select.name,
        stack: row.projectStack.multi_select.map((item) => item.name),
        isFeatured: row.projectFeatured.checkbox,
        code: row.projectCode.url || "",
        link: row.projectLink.url || "",
        cover: row.projectCover.url || "",
        summary: row.projectSummary.rich_text[0]?.text.content,
    }));

    return rowsStructured
}
