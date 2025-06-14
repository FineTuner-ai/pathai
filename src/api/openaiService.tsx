import OpenAI from 'openai';

// Initialize OpenAI client with OpenRouter configuration
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': import.meta.env.VITE_SITE_URL,
    'X-Title': import.meta.env.VITE_SITE_NAME,
  },
  dangerouslyAllowBrowser: true, // Required for client-side usage
});

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  content: string;
  error?: string;
}

export class OpenAIService {
  static async sendMessage(
    messages: ChatMessage[],
    model: string = 'deepseek/deepseek-chat'
  ): Promise<ChatResponse> {
    try {
      const completion = await openai.chat.completions.create({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 2000,
      });

      const content = completion.choices[0]?.message?.content;
      
      if (!content) {
        throw new Error('No response content received');
      }

      return { content };
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return {
        content: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  static async processUserQuery(query: string): Promise<ChatResponse> {
    const systemPrompt = `You are Agentics AI, an intelligent assistant that helps students and researchers with:
    
1. University Discovery - Finding programs that match research interests
2. Professor Matching - Connecting with faculty whose research aligns
3. Scholarship Search - Discovering funding opportunities
4. Application Support - Help with SOPs, emails, and applications

Provide helpful, accurate, and personalized responses based on the user's query.`;

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: query }
    ];

    return this.sendMessage(messages);
  }
}