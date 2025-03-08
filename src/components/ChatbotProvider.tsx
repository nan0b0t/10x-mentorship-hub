
import { createContext, useState, useContext, ReactNode } from 'react';
import ChatbotInterface from './ChatbotInterface';

interface ChatbotContextType {
  openChatbot: () => void;
  closeChatbot: () => void;
  isOpen: boolean;
}

const ChatbotContext = createContext<ChatbotContextType>({
  openChatbot: () => {},
  closeChatbot: () => {},
  isOpen: false,
});

export const useChatbot = () => useContext(ChatbotContext);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatbot = () => setIsOpen(true);
  const closeChatbot = () => setIsOpen(false);

  return (
    <ChatbotContext.Provider value={{ openChatbot, closeChatbot, isOpen }}>
      {children}
      <ChatbotInterface isOpen={isOpen} onClose={closeChatbot} />
    </ChatbotContext.Provider>
  );
};

export default ChatbotProvider;
