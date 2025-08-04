import React, { useState } from 'react';
import { Settings, Eye, EyeOff, Info } from 'lucide-react';
import { ChatConfig, ModelOption } from '../types';
import { MODEL_OPTIONS } from '../utils/constants';
import { cn } from '../utils/cn';

interface ConfigPanelProps {
  config: ChatConfig;
  onConfigChange: (config: ChatConfig) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const ConfigPanel: React.FC<ConfigPanelProps> = ({
  config,
  onConfigChange,
  isOpen,
  onToggle
}) => {
  const [showApiKey, setShowApiKey] = useState(false);

  const handleChange = (field: keyof ChatConfig, value: any) => {
    onConfigChange({ ...config, [field]: value });
  };

  const getModelOptions = (provider: 'openai' | 'anthropic') => {
    return MODEL_OPTIONS.filter(model => model.provider === provider);
  };

  return (
    <div className="border-l border-gray-200 bg-gray-50 w-80 flex-shrink-0">
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Configuration</span>
        </button>
      </div>

      {isOpen && (
        <div className="p-4 space-y-6">
          {/* API Key */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              API Key
            </label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={config.apiKey}
                onChange={(e) => handleChange('apiKey', e.target.value)}
                placeholder="Enter your API key"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Your API key is stored locally and never sent to our servers
            </p>
          </div>

          {/* Provider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Provider
            </label>
            <select
              value={config.provider}
              onChange={(e) => handleChange('provider', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm"
            >
              <option value="openai">OpenAI</option>
              <option value="anthropic">Anthropic (Claude)</option>
            </select>
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model
            </label>
            <select
              value={config.model}
              onChange={(e) => handleChange('model', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm"
            >
              {getModelOptions(config.provider).map((model) => (
                <option key={model.value} value={model.value}>
                  {model.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              {getModelOptions(config.provider).find(m => m.value === config.model)?.description}
            </p>
          </div>

          {/* Temperature */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Temperature: {config.temperature}
            </label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={config.temperature}
              onChange={(e) => handleChange('temperature', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Focused</span>
              <span>Creative</span>
            </div>
          </div>

          {/* Max Tokens */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Tokens: {config.maxTokens}
            </label>
            <input
              type="range"
              min="100"
              max="4000"
              step="100"
              value={config.maxTokens}
              onChange={(e) => handleChange('maxTokens', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Short</span>
              <span>Long</span>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Getting Started</p>
                <p className="text-xs">
                  1. Get an API key from OpenAI or Anthropic<br/>
                  2. Select your preferred model<br/>
                  3. Start chatting with the AI assistant
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 