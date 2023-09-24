import { Client } from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";
import type { HomeContent, ProjectsContent } from "@pTypes/notionTypes";

// Notion client
export const notionClient = new Client({
    auth: process.env.NOTION_INTEGRATION_SECRET,
});


// Get page Content
export const getPageContent = async () => {
    // call the notion API at /api/content endpoint.
    const res = await fetch(process.env.VERCEL_URL + "/api/content")
    const data = await res.json()
    const parsedData: HomeContent = JSON.parse(data)

    // Create a Map from the HomeContent array
    const contentMap = new Map<string | undefined, string | undefined>();
    parsedData.forEach(item => {
        contentMap.set(item.id, item.content);
    });

    return contentMap
}

export const getProjects = async () => {
    // call the notion API at /api/content endpoint.
    const res = await fetch(process.env.VERCEL_URL + "/api/projects")
    const data = await res.json()
    const parsedData: ProjectsContent = JSON.parse(data)
    return parsedData
}
