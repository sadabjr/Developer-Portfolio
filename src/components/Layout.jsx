import { useState } from "react";
import AIAssistant from "./AIAssistant";
import { MessageCircle } from "lucide-react";
import './layout.css';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {children}

      {/* Floating Chat Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg w-full max-w-md shadow-lg relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-black p-1 rounded-full"
            >
              ✕
            </button>

            {/* AI Assistant Component */}
            <AIAssistant />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
