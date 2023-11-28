import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { question } = await req.json();
  // Assuming 'req' is the incoming request and 'res' is the response you are preparing
  const clientOrigin = req.headers.get("origin") || "http://localhost:3000";

  // Set CORS headers in the response

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "ACCESS-CONTROL-ALLOW-ORIGIN": clientOrigin,
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
    });
    const data = await response.json();
    console.log(JSON.stringify(response));
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
