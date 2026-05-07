import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { chatbotResponses } from '@/data/index';
import type { ChatMessage } from '@/lib/index';

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const key of Object.keys(chatbotResponses)) {
    if (lower.includes(key)) {
      return chatbotResponses[key];
    }
  }
  return chatbotResponses['default'];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'bot',
      content: 'Bonjour ! Je suis le chatbot AJK 🤖 Posez-moi des questions sur l\'association, nos activités ou nos membres !',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: getBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-6 z-50 bg-accent text-accent-foreground w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-accent/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-36 right-6 z-50 w-80 bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
            style={{ height: '420px' }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3">
              <div className="bg-accent rounded-full p-1.5">
                <Bot size={16} className="text-accent-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Chatbot AJK</p>
                <p className="text-accent text-xs">En ligne</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-muted text-foreground rounded-tl-sm'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Votre message..."
                className="flex-1 bg-muted text-foreground placeholder-muted-foreground text-sm px-3 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-accent text-accent-foreground p-2 rounded-xl hover:bg-accent/90 disabled:opacity-40 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
