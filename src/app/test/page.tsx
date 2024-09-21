import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

console.log(process.env.OPENAI_API_KEY);

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const { text } = await generateText({
  model: openai("gpt-4o-mini"),
  prompt: "define convoluational neural network",
});

export default function Page() {
  return <div>{text}</div>;
};