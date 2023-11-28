import { NextResponse } from "next/server";
import { handleCORS } from "@/lib/utils";
export async function POST(req: Request) {
  const response = NextResponse.next();
  handleCORS(response);
  const { question } = await req.json();

  try {
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

    const reply = data.choices[0].message.content;
    console.log(response);
    console.log(reply);
    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
