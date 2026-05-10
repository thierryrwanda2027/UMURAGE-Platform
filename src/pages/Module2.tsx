import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Brain, Ear, MessageSquareOff, LockKeyhole } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Module2() {
  const { user, updateUserStatus } = useAuth();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Which of the following is an example of active listening?",
      options: [
        "Immediately suggesting solutions to fix the problem",
        "Sharing a similar story from your own life",
        "Saying \"I hear that you are hurting\" and giving space",
        "Telling them everything will be fine"
      ],
      correct: "Saying \"I hear that you are hurting\" and giving space"
    },
    {
      id: 2,
      text: "Why is strict confidentiality important in mental health conversations?",
      options: [
        "It is only a legal requirement for professionals",
        "It protects trust and encourages people to seek help",
        "It is fine to share if you mean well",
        "It only applies in formal therapy settings"
      ],
      correct: "It protects trust and encourages people to seek help"
    },
    {
      id: 3,
      text: "Seeking mental health support should be understood as…",
      options: [
        "A sign of personal weakness",
        "Something to be embarrassed about",
        "Only necessary for severe conditions",
        "An act of courage deserving of respect"
      ],
      correct: "An act of courage deserving of respect"
    }
  ];

  const handleSelect = (qId: number, option: string) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleCheck = () => {
    if (Object.keys(answers).length < 3) {
      alert("Please answer all questions before checking.");
      return;
    }
    setShowResults(true);
    
    // Check if all correct
    if (questions.every(q => answers[q.id] === q.correct)) {
      if (user) {
        updateUserStatus({ passedQuiz: true });
      }
    }
  };

  const isAllCorrect = showResults && questions.every(q => answers[q.id] === q.correct);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link to="/vault" className="inline-flex items-center text-purple-600 hover:underline mb-8 font-semibold">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Vault
      </Link>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-purple-700 to-purple-500 p-10 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Brain className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold">Module 2: Mental Health Stigma</h1>
          </div>
          <p className="text-purple-100 text-xl">Active Listening, Language, and Creating Safe Spaces</p>
        </div>

        <div className="p-10 space-y-12">
          {/* Active Listening Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-purple-100 pb-3 mb-6 flex items-center">
              <Ear className="w-8 h-8 mr-3 text-purple-600" /> Active Listening
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Active listening means being fully present with someone — not waiting for your turn to speak, but genuinely receiving what they share without judgment, interruption, or unsolicited advice.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <h3 className="font-bold text-purple-900 mb-2">Give full attention</h3>
                <p className="text-gray-700">Put away distractions. Make comfortable eye contact. Use open, relaxed body language to signal that you are present and engaged.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <h3 className="font-bold text-purple-900 mb-2">Reflect feelings, not just words</h3>
                <p className="text-gray-700">Acknowledge the emotional content of what someone shares, not just the facts. Feelings deserve to be heard first.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <h3 className="font-bold text-purple-900 mb-2">Avoid rushing to fix</h3>
                <p className="text-gray-700">The instinct to immediately offer solutions can feel dismissive. Sit with the person in their experience before offering advice — or ask whether they even want advice.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <h3 className="font-bold text-purple-900 mb-2">Tolerate silence</h3>
                <p className="text-gray-700">Pauses are not failures. Give the person time to find their words without rushing to fill the silence.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 text-white shadow-md">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Phrases that help</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full font-medium">"I hear that you are hurting."</span>
                <span className="px-4 py-2 bg-white/10 rounded-full font-medium">"That sounds incredibly hard."</span>
                <span className="px-4 py-2 bg-white/10 rounded-full font-medium">"Thank you for trusting me with this."</span>
                <span className="px-4 py-2 bg-white/10 rounded-full font-medium">"I'm here with you."</span>
                <span className="px-4 py-2 bg-white/10 rounded-full font-medium">"You don't have to go through this alone."</span>
                <span className="px-4 py-2 bg-white/10 rounded-full font-medium">"What would feel most helpful right now?"</span>
              </div>
            </div>
          </section>

          {/* Reducing Stigma Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-red-100 pb-3 mb-6 flex items-center">
              <MessageSquareOff className="w-8 h-8 mr-3 text-red-500" /> Reducing Mental Health Stigma
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Stigma is one of the most significant barriers to people seeking mental health support. It can come from external sources — but also from within. Reducing it starts with the language we use and the space we create.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-red-900 font-bold mb-4 text-lg">Language matters — what to avoid:</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-red-700 font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>They're just attention-seeking</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>Crazy / insane</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>You should just cheer up</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>It's all in your head</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>Others have it worse</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>They're being dramatic</li>
              </ul>
            </div>

            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900">Use person-first language</strong>
                  Say "a person living with depression" rather than "a depressed person." The illness is not their identity.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900">Normalize mental health conversations</strong>
                  Talk about mental health the same way you would talk about physical health. Struggling is human. Seeking help is skill, not weakness.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900">Challenge myths when safe to do so</strong>
                  Gently correct misinformation when you hear it in conversation, media, or online — without shaming the person who said it.
                </div>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl border border-indigo-200 text-center">
              <p className="text-xl font-bold text-indigo-900 italic">
                "Seeking help is an act of courage. Reaching out — whether to a friend, a counselor, or a crisis line — takes strength. Reinforce this whenever you have the opportunity to do so."
              </p>
            </div>
          </section>

          {/* Confidentiality Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-100 pb-3 mb-6 flex items-center">
              <LockKeyhole className="w-8 h-8 mr-3 text-[var(--color-trust-blue)]" /> Confidentiality as a Foundation of Trust
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Strict confidentiality is not just a professional or legal requirement — it is a moral commitment to the person who trusted you with their vulnerability.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">What it means</h3>
                <p className="text-gray-600 text-sm">Don't share what someone has disclosed about their mental health with family, friends, colleagues, or on social media — even without naming them.</p>
              </div>
              <div className="bg-white border-2 border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Be transparent</h3>
                <p className="text-gray-600 text-sm">If you are a professional, be upfront about the limits of your confidentiality at the start of any relationship — so the person can make an informed decision.</p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-orange-900 mb-2">Exceptions exist</h3>
                <p className="text-orange-800 text-sm">Confidentiality may need to be broken if there is immediate risk to the person's life or others'. Always follow professional guidelines.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Interactive Quiz */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Knowledge Check — Module 2</h2>
          <p className="text-gray-500 mt-1">Test your understanding before proceeding to the Simulator.</p>
        </div>
        
        <div className="p-8 space-y-8">
          {questions.map((q, idx) => (
            <div key={q.id} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {idx + 1}. {q.text}
              </h3>
              <div className="space-y-3">
                {q.options.map(opt => {
                  const isSelected = answers[q.id] === opt;
                  const isCorrectOption = opt === q.correct;
                  let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
                  
                  if (!showResults) {
                    btnClass += isSelected 
                      ? "border-purple-500 bg-purple-50 text-purple-900 font-medium" 
                      : "border-gray-200 hover:border-purple-300 hover:bg-gray-50 text-gray-700";
                  } else {
                    if (isCorrectOption) {
                      btnClass += "border-green-500 bg-green-50 text-green-900 font-bold";
                    } else if (isSelected && !isCorrectOption) {
                      btnClass += "border-red-500 bg-red-50 text-red-900 opacity-70";
                    } else {
                      btnClass += "border-gray-200 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(q.id, opt)}
                      disabled={showResults}
                      className={btnClass}
                    >
                      <div className="flex justify-between items-center">
                        <span>{opt}</span>
                        {showResults && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {showResults && answers[q.id] !== q.correct && (
                <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                  {idx === 0 && answers[q.id] === "Sharing a similar story from your own life" 
                    ? "Incorrect. Sharing similar stories can shift focus away from the person speaking."
                    : `Incorrect. The correct answer is: ${q.correct}`
                  }
                </p>
              )}
            </div>
          ))}

          {!showResults ? (
            <button 
              onClick={handleCheck}
              className="w-full py-4 mt-8 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-800 transition shadow-md"
            >
              Check Answers
            </button>
          ) : (
            <div className="mt-8">
              {isAllCorrect ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Gate 1 Passed!</h3>
                  <p className="text-green-700 mb-6">You have mastered the foundations and are ready for the simulation.</p>
                  <Link 
                    to="/simulator"
                    className="inline-block px-8 py-3 bg-[var(--color-trust-blue)] text-white font-bold rounded-lg hover:bg-blue-800 transition shadow"
                  >
                    Enter the Empathy Simulator
                  </Link>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-red-800 mb-2">Review Required</h3>
                  <p className="text-red-700 mb-4">You must answer all questions correctly to proceed.</p>
                  <button 
                    onClick={() => { setShowResults(false); setAnswers({}); }}
                    className="px-6 py-2 bg-red-100 text-red-800 font-bold rounded-lg hover:bg-red-200 transition"
                  >
                    Retry Quiz
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
