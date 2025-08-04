import React from 'react';
import { Bot, Key, Zap, Shield } from 'lucide-react';
import { SAMPLE_CONVERSATIONS } from '../utils/constants';
import { cn } from '../utils/cn';

interface WelcomeScreenProps {
  onStartChat: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartChat }) => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Customer Service Chatbot
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the future of customer support with our AI-powered chatbot. 
            Configure your preferred AI model and start chatting instantly.
          </p>
          
          <button
            onClick={onStartChat}
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Key className="w-5 h-5" />
            Configure API & Start Chatting
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Multiple AI Models</h3>
            <p className="text-gray-600 text-sm">
              Choose from OpenAI's GPT models or Anthropic's Claude models. 
              Each optimized for different use cases.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600 text-sm">
              Your API keys are stored locally and never sent to our servers. 
              All conversations are private and secure.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Customer Service Ready</h3>
            <p className="text-gray-600 text-sm">
              Pre-configured with customer service prompts and conversation flows. 
              Perfect for support scenarios.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Sample Conversations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {SAMPLE_CONVERSATIONS.map((conversation, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">{conversation.title}</h4>
                <div className="space-y-2">
                  {conversation.messages.map((message, msgIndex) => (
                    <div key={msgIndex} className="text-sm">
                      <span className={cn(
                        'font-medium',
                        message.role === 'user' ? 'text-primary-600' : 'text-gray-600'
                      )}>
                        {message.role === 'user' ? 'Customer' : 'Assistant'}:
                      </span>
                      <p className="text-gray-600 mt-1">{message.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 