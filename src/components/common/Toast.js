import React, { useEffect } from 'react';
import { CheckCircle, Copy } from 'lucide-react';

const Toast = ({ message, isVisible, onClose, type = 'success' }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[100] animate-slideUp">
      <div className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3">
        {type === 'success' ? (
          <CheckCircle className="h-5 w-5 text-green-400" />
        ) : (
          <Copy className="h-5 w-5 text-blue-400" />
        )}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
