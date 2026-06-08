export default async (request) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const apiKey = Netlify.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    return Response.json({ error: "ANTHROPIC_API_KEY is not configured on Netlify" }, { status: 500 });
  }

  let prompt = "";
  try {
    const body = await request.json();
    prompt = String(body.prompt || "").trim();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!prompt) {
    return Response.json({ error: "Prompt is required" }, { status: 400 });
  }

  const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5",
      max_tokens: 700,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  const data = await anthropicResponse.json();
  if (!anthropicResponse.ok) {
    return Response.json(
      { error: data.error?.message || "Anthropic request failed" },
      { status: anthropicResponse.status }
    );
  }

  const text = data.content?.map((part) => part.text || "").join("").trim() || "";
  return Response.json({ text });
};

export const config = {
  path: "/api/ai"
};
