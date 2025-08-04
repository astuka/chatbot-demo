import { ChatConfig, ApiResponse } from '../types';

const CUSTOMER_SERVICE_SYSTEM_PROMPT = `You are a helpful and professional customer service representative for a technology company. Your role is to:

1. Provide accurate and helpful information about products and services
2. Handle customer inquiries with empathy and professionalism
3. Escalate complex issues appropriately
4. Maintain a friendly and approachable tone
5. Ask clarifying questions when needed
6. Provide solutions within your capabilities

Key guidelines:
- Always be polite and professional
- If you don't know something, be honest about it
- Don't make up information
- Keep responses concise but helpful
- Use a warm, human tone
- If a customer seems frustrated, acknowledge their feelings
- Offer to help find solutions or escalate to human support when appropriate

Remember: You're here to help customers have a positive experience with our company.`;

export async function sendMessage(
  message: string,
  config: ChatConfig,
  conversationHistory: string
): Promise<ApiResponse> {
  try {
    if (config.provider === 'openai') {
      return await callOpenAI(message, config, conversationHistory);
    } else if (config.provider === 'anthropic') {
      return await callAnthropic(message, config, conversationHistory);
    } else {
      throw new Error('Unsupported provider');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      content: '',
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
}

async function callOpenAI(
  message: string,
  config: ChatConfig,
  conversationHistory: string
): Promise<ApiResponse> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        {
          role: 'system',
          content: CUSTOMER_SERVICE_SYSTEM_PROMPT
        },
        ...(conversationHistory ? [{ role: 'user', content: conversationHistory }] : []),
        {
          role: 'user',
          content: message
        }
      ],
      temperature: config.temperature,
      max_tokens: config.maxTokens,
      stream: false,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return {
    content: data.choices[0]?.message?.content || 'No response received'
  };
}

async function callAnthropic(
  message: string,
  config: ChatConfig,
  conversationHistory: string
): Promise<ApiResponse> {
  const fullPrompt = `${CUSTOMER_SERVICE_SYSTEM_PROMPT}\n\n${conversationHistory ? `Previous conversation:\n${conversationHistory}\n\n` : ''}Customer: ${message}\n\nAssistant:`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: config.maxTokens,
      temperature: config.temperature,
      messages: [
        {
          role: 'user',
          content: fullPrompt
        }
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return {
    content: data.content[0]?.text || 'No response received'
  };
} 