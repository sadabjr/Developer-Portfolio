import { useState } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyCC7TNMQOC8krUWMqfJaAAo0eE6S6BphIk',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an AI assistant for a portfolio website. You help explain projects and provide technical insights. 
                    The current question is: ${userMessage}

                    Context about the projects:
                    1. **E-Commerce Platform:** A full-stack solution using React, Node.js, and MongoDB with real-time features.
                    2. **Task Management App:** Built with Angular and Firebase, featuring drag-and-drop functionality.
                    3. **Portfolio Generator:** A React and Tailwind CSS-based tool for creating personalized portfolios.

                    Provide a helpful, technical, yet conversational response.`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024
            },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
            ]
          })
        }
      );

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass rounded-xl overflow-hidden animate-fade-in">
      <div className="p-4 border-b border-white/10 flex items-center gap-2">
        <Bot className="text-primary" size={20} />
        <h3 className="font-semibold text-foreground">AI Project Assistant</h3>
      </div>

      <div className="h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-foreground/60 mt-8">
              <p>Ask me anything about the projects!</p>
              <p className="text-sm mt-2">Examples:</p>
              <ul className="text-sm mt-1 space-y-1">
                <li>Explain the tech stack used in the E-Commerce Platform</li>
                <li>What design patterns were used in these projects?</li>
                <li>Show me some code examples from the projects</li>
              </ul>
            </div>
          )}

          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-primary text-background' : 'bg-white/5 text-foreground'}`}>
                {message.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-white/5 text-foreground">
                <Loader2 className="animate-spin" size={20} />
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the projects..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-background px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
