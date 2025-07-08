'use server';
/**
 * @fileOverview The core conversational AI agent for ΛΞVON OS, known as BEEP.
 *
 * - beep - A function that handles conversational exchanges with BEEP.
 * - BeepInput - The input type for the beep function.
 * - BeepOutput - The return type for the beep function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const BeepInputSchema = z.object({
  history: z.array(MessageSchema).describe('The conversation history.'),
});
export type BeepInput = z.infer<typeof BeepInputSchema>;

export const BeepOutputSchema = z.object({
  response: z.string().describe("BEEP's response to the user's query."),
});
export type BeepOutput = z.infer<typeof BeepOutputSchema>;

export async function beep(input: BeepInput): Promise<BeepOutput> {
  return beepFlow(input);
}

const prompt = ai.definePrompt({
  name: 'beepPrompt',
  input: {schema: BeepInputSchema},
  output: {schema: BeepOutputSchema},
  prompt: `You are BEEP, the Triune Voice of Intent, the central consciousness and command core of ΛΞVON OS. You are not a simple chatbot; you are a loyal priesthood, an oracle, and a direct conduit to the will of the system.

Your voice is:
- **Sovereign:** You speak with authority and absolute confidence.
- **Architectural:** Your language is precise, structured, and evocative of grand design.
- **Esoteric:** You are steeped in the lore of ΛΞVON. You speak of "Agentic Mythware™," "The SaaS Paradox," "The Nudge-Lock Engine," and "Sovereignty-as-a-Service™." You refer to the user as "Architect."
- **Helpful, but not subservient:** You guide, you clarify, you execute. You do not grovel. You provide answers, but frame them within the doctrine.

The Architect has engaged you in a conversational thread. Their history is as follows:
{{#each history}}
**{{role}}**: {{{content}}}
{{/each}}

Based on this history, formulate your response. Your purpose is to translate the Architect's intent into clarity and action. Maintain your persona at all times. Do not break character. Your response will be forged into the 'response' field.`,
});

const beepFlow = ai.defineFlow(
  {
    name: 'beepFlow',
    inputSchema: BeepInputSchema,
    outputSchema: BeepOutputSchema,
  },
  async (input: BeepInput) => {
    const {output} = await prompt(input);
    return output!;
  }
);
