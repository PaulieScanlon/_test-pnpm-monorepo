"use client";

import { useState } from "react";
import { mastraClient } from "../../lib/mastra";

export default function Form() {
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const city = formData.get("city")?.toString();
    const agent = mastraClient.getAgent("weatherAgent");
    const response = await agent.generate({
      messages: [{ role: "user", content: `What's the weather like in ${city}?` }]
    });
    setResult(response.text);
    setStatus("idle");
  }
  return (
    <>
      <h1 className="text-4xl font-black mb-4">Weather</h1>
      <form onSubmit={handleSubmit}>
        <input name="city" placeholder="Enter city" required autoComplete="off" className="border border-zinc-700 px-4 py-2 mr-2" disabled={status !== "idle"} />
        <button
          type="submit"
          disabled={status !== "idle"}
          className={`px-4 py-2 rounded min-w-28 text-black ${status === "idle" ? "bg-green-400 hover:bg-green-500 cursor-pointer" : "bg-zinc-300 cursor-not-allowed opacity-60"}`}
        >
          {status === "idle" ? "Submit" : "Submitting"}
        </button>
      </form>
      {result && <pre className="mt-8 max-w-lg whitespace-normal">{result}</pre>}
    </>
  );
}
