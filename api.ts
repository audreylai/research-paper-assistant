import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const google = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    compatibility: 'strict',
});
const model = google('gpt-4-turbo')

const prompt = "who is jackei wong"

const { text } = await generateText({
    model,
    prompt,
});