import type { NextApiRequest, NextApiResponse } from "next";

export default function GetHomeContent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const content = { hello: "world" };
  res.status(200).json(content);
}
