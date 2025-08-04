import React, { useState, useEffect } from 'react';
import { Chat } from './components/Chat';
import { ConfigPanel } from './components/ConfigPanel';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ChatConfig } from './types';
import { DEFAULT_CONFIG } from './utils/constants';

function App() {
  const [config, setConfig] = useState<ChatConfig>(DEFAULT_CONFIG);
  const [showConfig, setShowConfig] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Load config from localStorage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('chatbot-config');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setConfig(parsedConfig);
        setShowWelcome(false);
      } catch (error) {
        console.error('Failed to parse saved config:', error);
      }
    }
  }, []);

  // Save config to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chatbot-config', JSON.stringify(config));
  }, [config]);

  const handleConfigChange = (newConfig: ChatConfig) => {
    setConfig(newConfig);
  };

  const handleStartChat = () => {
    setShowWelcome(false);
    setShowConfig(true);
  };

  const handleBackToWelcome = () => {
    setShowWelcome(true);
    setShowConfig(false);
  };

  if (showWelcome) {
    return (
      <div className="h-screen bg-gray-50">
        <WelcomeScreen onStartChat={handleStartChat} />
      </div>
    );
  }

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                AI Customer Service Chatbot
              </h1>
              <p className="text-sm text-gray-500">
                Professional portfolio demo - AI-powered customer support
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleBackToWelcome}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                Back to Welcome
              </button>
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="px-4 py-2 text-sm bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
              >
                {showConfig ? 'Hide Config' : 'Show Config'}
              </button>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex">
          <div className="flex-1">
            <Chat config={config} />
          </div>
          
          {/* Configuration Panel */}
          {showConfig && (
            <ConfigPanel
              config={config}
              onConfigChange={handleConfigChange}
              isOpen={showConfig}
              onToggle={() => setShowConfig(!showConfig)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 