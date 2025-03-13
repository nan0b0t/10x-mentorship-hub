
import { useEffect } from 'react';

interface TawkToAPI {
  toggle?: () => void;
  popup?: () => void;
  maximize?: () => void;
  minimize?: () => void;
  hideWidget?: () => void;
  showWidget?: () => void;
  onLoad?: () => void;
}

declare global {
  interface Window {
    Tawk_API?: TawkToAPI;
  }
}

const TawkToChat = () => {
  // This component doesn't render anything visible
  // It just provides methods to interact with the Tawk.to chat

  useEffect(() => {
    // If needed, you can configure Tawk_API here
    if (window.Tawk_API) {
      window.Tawk_API.onLoad = function() {
        console.log('Tawk.to chat loaded');
      };
    }
  }, []);

  return null;
};

// Helper functions to interact with Tawk.to chat
export const openTawkToChat = () => {
  if (window.Tawk_API && window.Tawk_API.maximize) {
    window.Tawk_API.maximize();
  }
};

export const minimizeTawkToChat = () => {
  if (window.Tawk_API && window.Tawk_API.minimize) {
    window.Tawk_API.minimize();
  }
};

export const toggleTawkToChat = () => {
  if (window.Tawk_API && window.Tawk_API.toggle) {
    window.Tawk_API.toggle();
  }
};

export default TawkToChat;
