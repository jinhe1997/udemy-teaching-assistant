import React, { useState } from 'react';
import { X, BookOpen, MessageCircle, Brain } from 'lucide-react';
import { Summary } from './Summary';
import { QASection } from './QASection';
import { QuizSection } from './QuizSection';

interface AssistantPanelProps {
  onClose: () => void;
}

export function AssistantPanel({ onClose }: AssistantPanelProps) {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="fixed right-8 bottom-24 w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-indigo-600 text-white">
        <h2 className="text-lg font-semibold">Udemy AI Assistant</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-indigo-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex border-b border-gray-200">
        {[
          { id: 'summary', icon: BookOpen, label: 'Summary' },
          { id: 'qa', icon: MessageCircle, label: 'Q&A' },
          { id: 'quiz', icon: Brain, label: 'Quiz' },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 transition-colors ${
              activeTab === id
                ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>

      <div className="h-[500px] overflow-y-auto">
        {activeTab === 'summary' && <Summary />}
        {activeTab === 'qa' && <QASection />}
        {activeTab === 'quiz' && <QuizSection />}
      </div>
    </div>
  );
}