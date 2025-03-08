
import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

const ChatbotInterface = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'admin',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate admin response after a brief delay
    setTimeout(() => {
      const adminMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for reaching out! Our team will get back to you shortly. In the meantime, feel free to explore our mentorship programs.",
        sender: 'admin',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, adminMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-200 animate-fadeIn"
         style={{ maxHeight: 'calc(100vh - 100px)' }}>
      {/* Chat header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <MessageSquare className="text-secondary mr-2" />
          <h3 className="font-bold text-lg">GC Mentorship Chat</h3>
        </div>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50" style={{ maxHeight: '400px' }}>
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'ml-auto' : ''} max-w-[80%]`}
          >
            <div className={`p-3 rounded-lg ${
              message.sender === 'user' 
                ? 'bg-secondary text-white rounded-br-none ml-auto' 
                : 'bg-gray-200 text-gray-800 rounded-bl-none'
            }`}>
              {message.text}
            </div>
            <div className={`text-xs mt-1 text-gray-500 ${
              message.sender === 'user' ? 'text-right' : ''
            }`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat input */}
      <div className="p-4 border-t">
        <div className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            onClick={handleSendMessage}
            disabled={newMessage.trim() === ''}
            className={`p-2 rounded-r-md ${
              newMessage.trim() === '' 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-secondary text-white hover:bg-secondary/90'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
