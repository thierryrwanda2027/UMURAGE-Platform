import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Quiz() {
  const navigate = useNavigate();
  const { updateUserStatus } = useAuth();
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    const { q1, q2, q3, q4, q5 } = answers;
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      setFeedback('Please answer all questions.');
      return;
    }

    if (q1 === 'correct' && q2 === 'correct' && q3 === 'correct' && q4 === 'correct' && q5 === 'correct') {
      updateUserStatus({ passedQuiz: true });
      navigate('/simulator');
    } else {
      setFeedback('Incorrect. You must score 100%. Please review the materials and try again.');
    }
  };

  const handleChange = (q: string, val: string) => {
    setAnswers(prev => ({ ...prev, [q]: val }));
    setFeedback('');
  };

  const questions = [
    {
      id: 'q1',
      text: 'What is the maximum timeframe to start PEP after potential HIV exposure?',
      options: [
        { val: 'wrong1', label: '24 Hours' },
        { val: 'correct', label: '72 Hours' },
        { val: 'wrong2', label: '1 Week' }
      ]
    },
    {
      id: 'q2',
      text: 'What is the primary purpose of PrEP?',
      options: [
        { val: 'wrong1', label: 'Emergency treatment after exposure' },
        { val: 'correct', label: 'Taken before exposure to prevent HIV infection' },
        { val: 'wrong2', label: 'To treat mental health' }
      ]
    },
    {
      id: 'q3',
      text: 'What does the "window period" refer to in HIV testing?',
      options: [
        { val: 'correct', label: 'The time between exposure and when a test can detect HIV' },
        { val: 'wrong1', label: 'The duration PEP is effective' }
      ]
    },
    {
      id: 'q4',
      text: 'Which of the following is an example of active listening?',
      options: [
        { val: 'wrong1', label: '"Just get over it."' },
        { val: 'correct', label: '"I hear that you are hurting."' }
      ]
    },
    {
      id: 'q5',
      text: 'How can a peer mentor effectively reduce stigma?',
      options: [
        { val: 'correct', label: 'By using non-judgmental language and maintaining confidentiality' },
        { val: 'wrong1', label: 'By telling the mentee what they did wrong' }
      ]
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-2">Gate 2: Knowledge Audit</h2>
      <p className="text-gray-600 mb-6 pb-4 border-b">You must score 100% to pass to the next stage.</p>
      
      <div className="space-y-6">
        {questions.map((q, idx) => (
          <div key={q.id} className="bg-gray-50 p-5 rounded-md border border-gray-200">
            <p className="font-semibold text-gray-800 mb-3">
              <span className="text-[var(--color-trust-blue)] mr-2">{idx + 1}.</span> 
              {q.text}
            </p>
            <div className="space-y-2">
              {q.options.map(opt => (
                <label key={opt.val} className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name={q.id} 
                    value={opt.val} 
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    className="h-4 w-4 text-[var(--color-trust-blue)] focus:ring-[var(--color-trust-blue)]"
                  />
                  <span className="text-gray-700">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {feedback && (
        <div className={`mt-6 p-4 rounded-md text-center font-medium ${feedback.includes('Incorrect') || feedback.includes('Please') ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-green-50 text-green-600 border border-green-200'}`}>
          {feedback}
        </div>
      )}

      <div className="mt-8">
        <button 
          onClick={handleSubmit}
          className="w-full bg-[var(--color-trust-blue)] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors shadow-sm"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
}
