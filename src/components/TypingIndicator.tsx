import React from 'react';
import { cn } from '../utils/cn';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 p-4">
      <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
        <Bot className="w-5 h-5 text-white" />
      </div>
      
      <div className="bg-gray-100 rounded-lg px-4 py-3 rounded-bl-none">
        <div className="typing-indicator">
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      </div>
    </div>
  );
}; 