import type { ProjectsContent, ProjectsRows } from "@pTypes/notionTypes";
import { notionClient } from "@utils/notion";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (!notionClient) throw new Error("Notion client not found");
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


    res.status(200).json(JSON.stringify(rowsStructured));
}
