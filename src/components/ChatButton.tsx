
import { MessageCircle } from 'lucide-react';
import { useChatbot } from './ChatbotProvider';

const ChatButton = () => {
  const { openChatbot, isOpen } = useChatbot();

  if (isOpen) return null;

  return (
    <button
      onClick={openChatbot}
      className="fixed bottom-6 right-6 z-40 p-4 bg-secondary text-white rounded-full shadow-lg hover:bg-secondary/90 transition-transform hover:scale-110 animate-bounce"
      aria-label="Open chat"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatButton;
