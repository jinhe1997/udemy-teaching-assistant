import React from 'react';
import { Brain } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function FloatingButton({ onClick, isOpen }: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
        isOpen ? 'bg-indigo-600' : 'bg-white'
      }`}
    >
      <Brain
        className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-indigo-600'}`}
      />
    </button>
  );
}