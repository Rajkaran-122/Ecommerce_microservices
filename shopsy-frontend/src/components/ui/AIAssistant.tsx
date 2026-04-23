import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react';
import { aiApi } from '../../lib/api';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Welcome to the Shopsy Concierge. How may I assist your pursuit of excellence today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await aiApi.chat(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.data.response || response.data.message || "I am currently processing your request with high priority."
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('AI Service Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "I am currently experiencing a neural link interruption. Please try again shortly."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Button - Elite Polish */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center shadow-[0_20px_50px_rgba(var(--foreground),0.3)] hover:scale-110 transition-all z-50 animate-bounce-slow group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <div className="absolute inset-0 rounded-full border-2 border-foreground/20 animate-ping group-hover:hidden" />
        <Sparkles size={24} className="absolute top-3 right-3 text-background/50 animate-pulse" />
        <MessageSquare size={28} />
      </button>

      {/* Chat Window - Glassmorphism Pro */}
      <div 
        className={`fixed bottom-8 right-8 w-[calc(100%-4rem)] max-w-[400px] h-[600px] glass-premium rounded-[2.5rem] overflow-hidden flex flex-col z-50 transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-8 bg-foreground/[0.03] border-b border-foreground/5 flex items-center justify-between backdrop-blur-3xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                <Bot size={24} className="text-foreground" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg tracking-tight font-outfit uppercase">Shopsy Concierge</h3>
              <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground animate-pulse"></span> Neural Link Active
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth bg-background/20">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.sender === 'user' ? 'bg-foreground' : 'bg-background border border-foreground/10'}`}>
                  {msg.sender === 'user' ? <User size={18} className="text-background" /> : <Bot size={18} className="text-foreground" />}
                </div>
                <div className={`p-4 px-6 rounded-[2rem] text-sm leading-relaxed shadow-xl ${
                  msg.sender === 'user' 
                    ? 'bg-foreground text-background rounded-tr-none font-medium' 
                    : 'bg-background/60 text-foreground border border-foreground/5 rounded-tl-none backdrop-blur-xl'
                }`}>
                  <p>{msg.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-10 h-10 rounded-full bg-background border border-foreground/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Bot size={18} className="text-foreground" />
                </div>
                <div className="p-5 px-8 rounded-[2rem] bg-background/60 border border-foreground/5 rounded-tl-none backdrop-blur-xl flex gap-1.5 items-center shadow-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input - Refined with HSL tokens */}
        <div className="p-8 bg-background/40 border-t border-foreground/5 backdrop-blur-2xl">
          <form onSubmit={handleSendMessage} className="flex gap-3 relative group">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Inquire about the collection..." 
              className="flex-1 bg-foreground/5 border border-foreground/10 rounded-full py-4 px-6 pr-14 text-sm text-foreground focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/30 transition-all duration-500 placeholder:text-foreground/30"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="absolute right-1.5 top-1.5 w-11 h-11 flex items-center justify-center rounded-full bg-foreground text-background disabled:opacity-20 disabled:bg-foreground/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              <Send size={18} className={inputValue.trim() ? "ml-0.5" : ""} />
            </button>
          </form>
          <p className="mt-4 text-[10px] text-center text-foreground/20 font-bold uppercase tracking-[0.2em]">Powered by Shopsy Neural Core</p>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
