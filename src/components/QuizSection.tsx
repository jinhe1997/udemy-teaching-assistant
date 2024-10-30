import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "What is the primary goal of supervised learning?",
      options: [
        "To find patterns in unlabeled data",
        "To predict outputs based on labeled training data",
        "To cluster similar data points",
        "To reduce dimensionality"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = questions[currentQuestion].options[index];
    setAnswers(newAnswers);
  };

  const isCorrect = (questionIndex: number, answerIndex: number) => {
    return questions[questionIndex].correct === answerIndex;
  };

  return (
    <div className="p-6 space-y-6">
      {!showResults ? (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-indigo-600">
                Score: {answers.filter((_, i) => isCorrect(i, questions[i].correct)).length}/{questions.length}
              </span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              {questions[currentQuestion].question}
            </h3>
          </div>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  answers[currentQuestion] === option
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <span className="text-sm">{option}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              className="px-4 py-2 text-sm font-medium text-indigo-600 disabled:text-gray-400"
            >
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={() => setShowResults(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Show Results
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(prev => prev + 1)}
                className="px-4 py-2 text-sm font-medium text-indigo-600"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">Quiz Results</h3>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  {isCorrect(index, q.options.indexOf(answers[index])) ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1" />
                  )}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">{q.question}</p>
                    <p className="text-sm text-gray-600">
                      Your answer: {answers[index] || 'Not answered'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Correct answer: {q.options[q.correct]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setShowResults(false);
              setCurrentQuestion(0);
              setAnswers([]);
            }}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}