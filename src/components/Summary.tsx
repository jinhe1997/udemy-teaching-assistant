import React from 'react';
import { BookOpen, ListChecks } from 'lucide-react';

export function Summary() {
  const summary = {
    title: "Introduction to Machine Learning",
    overview: "This chapter covers the fundamental concepts of machine learning, including supervised and unsupervised learning approaches.",
    keyPoints: [
      "Definition of Machine Learning",
      "Types of ML algorithms",
      "Common applications in industry",
      "Basic terminology and concepts"
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-indigo-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">{summary.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {summary.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-900">
          <ListChecks className="w-5 h-5 text-indigo-600" />
          <h4 className="font-medium">Key Takeaways</h4>
        </div>
        <ul className="space-y-2 ml-7">
          {summary.keyPoints.map((point, index) => (
            <li key={index} className="text-sm text-gray-600 list-disc">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full mt-4 bg-indigo-50 text-indigo-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
        Generate Detailed Summary
      </button>
    </div>
  );
}