import { ModelOption } from '../types';

export const MODEL_OPTIONS: ModelOption[] = [
  {
    value: 'gpt-4',
    label: 'GPT-4',
    provider: 'openai',
    description: 'Most capable model, best for complex reasoning'
  },
  {
    value: 'gpt-4-turbo',
    label: 'GPT-4 Turbo',
    provider: 'openai',
    description: 'Fast and efficient, great for most tasks'
  },
  {
    value: 'gpt-3.5-turbo',
    label: 'GPT-3.5 Turbo',
    provider: 'openai',
    description: 'Fast and cost-effective for simple tasks'
  },
  {
    value: 'claude-3-opus-20240229',
    label: 'Claude 3 Opus',
    provider: 'anthropic',
    description: 'Most capable Claude model'
  },
  {
    value: 'claude-3-sonnet-20240229',
    label: 'Claude 3 Sonnet',
    provider: 'anthropic',
    description: 'Balanced performance and speed'
  },
  {
    value: 'claude-3-haiku-20240307',
    label: 'Claude 3 Haiku',
    provider: 'anthropic',
    description: 'Fastest and most cost-effective'
  }
];

export const DEFAULT_CONFIG = {
  apiKey: '',
  model: 'gpt-4-turbo',
  provider: 'openai' as const,
  temperature: 0.7,
  maxTokens: 1000,
};

export const SAMPLE_CONVERSATIONS = [
  {
    title: 'Product Information',
    messages: [
      { role: 'user' as const, content: 'What features does your premium plan include?' },
      { role: 'assistant' as const, content: 'Our premium plan includes advanced analytics, priority support, unlimited integrations, and custom branding. Would you like me to explain any specific feature in more detail?' }
    ]
  },
  {
    title: 'Technical Support',
    messages: [
      { role: 'user' as const, content: 'I\'m having trouble connecting my account to the API' },
      { role: 'assistant' as const, content: 'I\'d be happy to help you troubleshoot the API connection. Could you tell me what error message you\'re seeing, and what steps you\'ve already tried?' }
    ]
  },
  {
    title: 'Billing Question',
    messages: [
      { role: 'user' as const, content: 'I was charged twice this month. Can you help me with a refund?' },
      { role: 'assistant' as const, content: 'I understand your concern about the double charge. Let me help you resolve this. Could you provide your account number or email address so I can look up your billing information?' }
    ]
  }
]; 