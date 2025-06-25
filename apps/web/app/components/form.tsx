"use client";

import { useState } from "react";
import { mastraClient } from "../../lib/mastra";

export default function Form() {
  const [result, setResult] = useState<string | null>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const city = formData.get("city")?.toString();
    const agent = mastraClient.getAgent("weatherAgent");
    const response = await agent.generate({
      messages: [{ role: "user", content: `What's the weather like in ${city}?` }]
    });
    setResult(response.text);
  }
  return (
    <>
      <h1 className="text-4xl font-black mb-4">Weather</h1>
      <form onSubmit={handleSubmit}>
        <input name="city" placeholder="Enter city" required className="border border-zinc-700 px-4 py-2 mr-2" />
        <button type="submit" className="bg-green-400 px-4 py-2 text-black rounded hover:bg-green-500 cursor-pointer">
          Submit
        </button>
      </form>
      {result && <pre className="mt-8 max-w-md">{result}</pre>}
    </>
  );
}
