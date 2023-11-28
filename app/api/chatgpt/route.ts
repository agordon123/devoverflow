import { NextApiRequest, NextApiResponse } from "next";
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://devoverflow.gordon-webdesign.com"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // Return method not allowed for non-POST requests
  if (req.method !== "POST") {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    const { question } = req.body;
    const openAIResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a knowlegeable assistant that provides quality information.",
            },
            {
              role: "user",
              content: `Tell me ${question}`,
            },
          ],
        }),
      }
    );
    const data = await openAIResponse.json();

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
