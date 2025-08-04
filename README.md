# AI Customer Service Chatbot Demo

A professional, AI-powered customer service chatbot demo built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **Multi-Provider AI Support**: Choose between OpenAI (GPT models) and Anthropic (Claude models)
- **Configurable Models**: Support for GPT-4, GPT-4 Turbo, GPT-3.5 Turbo, Claude 3 Opus, Sonnet, and Haiku
- **Real-time Chat Interface**: Modern, responsive chat UI with typing indicators and message history
- **Customer Service Focused**: Pre-configured with customer service prompts and conversation flows

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Modern React**: Built with React 18 and functional components with hooks
- **Tailwind CSS**: Beautiful, responsive design with custom animations
- **Local Storage**: Configuration persistence across sessions
- **Error Handling**: Comprehensive error handling and user feedback
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Security & Privacy
- **Client-side Only**: No backend server required - everything runs in the browser
- **Local API Key Storage**: API keys are stored locally and never sent to external servers
- **Secure API Calls**: Direct communication with AI providers using your own API keys

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React Icons
- **AI Providers**: OpenAI API, Anthropic API
- **Deployment**: Netlify (ready to deploy)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-customer-service-chatbot.git
   cd ai-customer-service-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Getting API Keys

1. **OpenAI API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account and generate an API key
   - Add billing information (required for API usage)

2. **Anthropic API Key**:
   - Visit [Anthropic Console](https://console.anthropic.com/)
   - Create an account and generate an API key
   - Add billing information (required for API usage)

### Using the Application

1. **Configure API Settings**:
   - Click "Configure API & Start Chatting" on the welcome screen
   - Enter your API key
   - Select your preferred AI provider and model
   - Adjust temperature and max tokens as needed

2. **Start Chatting**:
   - The chatbot is pre-configured for customer service scenarios
   - Ask questions about products, services, or support
   - The AI will respond in a professional, helpful manner

## 🚀 Deployment

### Deploy to Netlify

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Netlify**:
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

### Environment Variables

No environment variables are needed since API keys are stored locally in the browser.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Chat.tsx        # Main chat interface
│   ├── ChatInput.tsx   # Message input component
│   ├── ChatMessage.tsx # Individual message display
│   ├── ConfigPanel.tsx # API configuration panel
│   ├── TypingIndicator.tsx # Loading animation
│   └── WelcomeScreen.tsx # Landing page
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   ├── ai.ts          # AI API integration
│   ├── constants.ts   # App constants
│   └── cn.ts          # CSS class utilities
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎯 Use Cases

### Portfolio Project
- Demonstrates modern React development skills
- Shows AI integration capabilities
- Professional UI/UX design
- TypeScript implementation
- Responsive design

### Client Presentations
- Live demo capability
- Configurable for different AI providers
- Professional customer service focus
- Easy to customize and extend

### Learning Tool
- Modern React patterns
- AI API integration
- TypeScript best practices
- Tailwind CSS usage

## 🔒 Security Considerations

- API keys are stored in browser localStorage (not secure for production)
- All API calls are made directly from the client
- No backend server means no data storage on your servers
- Consider implementing proper key management for production use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for GPT models
- [Anthropic](https://www.anthropic.com/) for Claude models
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons

## 📞 Support

For questions or support, please open an issue on GitHub or contact the maintainer.

---

**Note**: This is a demo project. For production use, implement proper security measures, error handling, and API key management. 