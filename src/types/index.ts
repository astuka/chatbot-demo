export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatConfig {
  apiKey: string;
  model: string;
  provider: 'openai' | 'anthropic';
  temperature: number;
  maxTokens: number;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  config: ChatConfig;
}

export interface ModelOption {
  value: string;
  label: string;
  provider: 'openai' | 'anthropic';
  description: string;
}

export interface ApiResponse {
  content: string;
  error?: string;
} 