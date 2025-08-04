import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip } from 'lucide-react';
import { cn } from '../utils/cn';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  disabled = false,
  placeholder = "Type your message..."
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <form onSubmit={handleSubmit} className="border-t bg-white p-4">
      <div className="flex items-end gap-2">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              'w-full resize-none rounded-lg border border-gray-300 px-4 py-3 pr-12',
              'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200',
              'placeholder:text-gray-400 text-sm leading-relaxed',
              'min-h-[44px] max-h-32',
              disabled && 'bg-gray-50 cursor-not-allowed'
            )}
            rows={1}
          />
          
          <button
            type="button"
            className="absolute right-2 bottom-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            disabled={disabled}
          >
            <Paperclip className="w-4 h-4" />
          </button>
        </div>
        
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className={cn(
            'flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center',
            'bg-primary-500 text-white hover:bg-primary-600 transition-colors',
            'disabled:bg-gray-300 disabled:cursor-not-allowed',
            'focus:outline-none focus:ring-2 focus:ring-primary-200'
          )}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}; 