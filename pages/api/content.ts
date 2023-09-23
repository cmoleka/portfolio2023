import { notionClient } from "@utils/notion";
import type { NextApiRequest, NextApiResponse } from "next";
import type { ContentRow, HomeContent } from "@pTypes/notionTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionClient) throw new Error("Notion client not found");
  const { results } = await notionClient.databases.query({
    database_id: process.env.NOTION_CONTENT_DATABASE_ID || '',
  });

  // @ts-ignore
  const rows = results.map((res) => res.properties) as ContentRow[]

  const rowsStructured: HomeContent = rows.map((row) => ({
    id: row.id.title[0]?.text.content,
    content: row.content.rich_text[0]?.text.content,
  }));


  res.status(200).json(JSON.stringify(rowsStructured));
}
