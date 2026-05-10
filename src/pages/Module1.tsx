import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, AlertCircle, Clock, Calendar } from 'lucide-react';

export function Module1() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "PEP must be started within how many hours of a possible HIV exposure?",
      options: ["24 hours", "72 hours", "1 week", "Anytime"],
      correct: "72 hours"
    },
    {
      id: 2,
      text: "What is true about the window period?",
      options: [
        "A negative test during this time confirms no HIV",
        "HIV can be transmitted even if a test is negative",
        "The window period is always exactly 7 days",
        "PrEP eliminates the window period"
      ],
      correct: "HIV can be transmitted even if a test is negative"
    },
    {
      id: 3,
      text: "PrEP is most effective when…",
      options: [
        "Taken only before sex",
        "Taken every day without skipping",
        "Taken after a risky event",
        "Taken after an HIV diagnosis"
      ],
      correct: "Taken every day without skipping"
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
  };

  const isAllCorrect = showResults && questions.every(q => answers[q.id] === q.correct);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link to="/vault" className="inline-flex items-center text-[var(--color-trust-blue)] hover:underline mb-8 font-semibold">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Vault
      </Link>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-extrabold">Module 1: HIV Prevention</h1>
          </div>
          <p className="text-blue-100 text-xl">Understanding PrEP, PEP, and the Window Period</p>
        </div>

        <div className="p-10 space-y-12">
          {/* PrEP Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-100 pb-3 mb-6">PrEP — Pre-Exposure Prophylaxis</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A daily medication taken by HIV-negative individuals who are at substantial ongoing risk for HIV infection, to prevent contracting the virus before any exposure occurs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" /> Who it's for</h3>
                <p className="text-gray-700">People with HIV-positive partners, those who don't consistently use condoms with partners of unknown HIV status, or individuals who inject drugs and share equipment.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-blue-600" /> How it works</h3>
                <p className="text-gray-700">PrEP medications create a level of the drug in your bloodstream high enough to block HIV from establishing a permanent infection.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center"><Calendar className="w-5 h-5 mr-2 text-blue-600" /> Consistency matters</h3>
                <p className="text-gray-700">Must be taken daily as prescribed. Skipping doses significantly reduces protection.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center"><AlertCircle className="w-5 h-5 mr-2 text-blue-600" /> Medical follow-up</h3>
                <p className="text-gray-700">Requires HIV testing every 3 months and regular kidney function checks while on PrEP.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Effectiveness</h3>
              <p className="text-gray-600 mb-6">When taken consistently, PrEP reduces the risk of getting HIV from sex by about 99% and from injection drug use by more than 74%.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-black text-blue-600 mb-1">~99%</div>
                  <div className="text-sm font-semibold text-gray-500">Effective via sex</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-black text-blue-600 mb-1">&gt;74%</div>
                  <div className="text-sm font-semibold text-gray-500">Effective via injection</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-black text-blue-600 mb-1">Daily</div>
                  <div className="text-sm font-semibold text-gray-500">Dosing required</div>
                </div>
              </div>
            </div>
          </section>

          {/* PEP Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-red-100 pb-3 mb-6">PEP — Post-Exposure Prophylaxis</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              An emergency antiretroviral medication course started after a potential HIV exposure. <strong className="text-red-600">PEP is not a substitute for routine prevention — it is a last resort.</strong>
            </p>

            <div className="relative border-l-4 border-red-500 ml-4 pl-8 space-y-8">
              <div>
                <div className="absolute w-8 h-8 bg-red-500 rounded-full -left-[18px] flex items-center justify-center text-white font-bold border-4 border-white">0</div>
                <h3 className="text-xl font-bold text-gray-900">Hour 0 — Exposure occurs</h3>
                <p className="text-gray-600 mt-2">Possible exposure through unprotected sex, sharing needles, or occupational exposure (e.g. needlestick injury).</p>
              </div>
              <div>
                <div className="absolute w-8 h-8 bg-red-500 rounded-full -left-[18px] flex items-center justify-center text-white font-bold border-4 border-white">72</div>
                <h3 className="text-xl font-bold text-red-600">Within 72 hours — CRITICAL window</h3>
                <p className="text-gray-600 mt-2">PEP must be started within 72 hours. The sooner the better — ideally within 2 hours. After 72 hours, PEP is no longer effective.</p>
              </div>
              <div>
                <div className="absolute w-8 h-8 bg-red-500 rounded-full -left-[18px] flex items-center justify-center text-white font-bold border-4 border-white">28</div>
                <h3 className="text-xl font-bold text-gray-900">Days 1–28 — Full course</h3>
                <p className="text-gray-600 mt-2">PEP is taken every day for 28 days without interruption. Stopping early reduces effectiveness significantly.</p>
              </div>
              <div>
                <div className="absolute w-8 h-8 bg-red-500 rounded-full -left-[18px] flex items-center justify-center text-white font-bold border-4 border-white"><Clock className="w-4 h-4"/></div>
                <h3 className="text-xl font-bold text-gray-900">After 28 days — Follow-up testing</h3>
                <p className="text-gray-600 mt-2">HIV testing at 4–6 weeks and again at 3 months after exposure to confirm HIV-negative status.</p>
              </div>
            </div>
          </section>

          {/* Window Period Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-orange-100 pb-3 mb-6">The Window Period</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The gap between HIV infection and when current tests can reliably detect it. <strong className="text-orange-600">During this period, a person can test HIV-negative but still be infectious to others.</strong>
            </p>

            <ul className="space-y-4 mb-6 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>4th-generation (Ag/Ab) tests:</strong> Can detect HIV as early as 18–45 days after exposure. Most common in clinics today.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>NAT (nucleic acid test):</strong> Can detect infection 10–33 days after exposure. Used in high-risk situations but more expensive.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Antibody-only tests:</strong> May take up to 90 days (3 months) to show a positive result after infection.</span>
              </li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="font-bold text-orange-900 mb-2">Crucial Fact for Educators</h3>
              <p className="text-orange-800">Even if a test result is negative during the window period, the virus can still be transmitted to sexual partners or through shared equipment. A negative test during the window period does not confirm a person is HIV-free. Repeat testing is essential.</p>
            </div>
          </section>
        </div>
      </div>

      {/* Interactive Quiz */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Knowledge Check — Module 1</h2>
          <p className="text-gray-500 mt-1">Test your understanding before proceeding.</p>
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
                      ? "border-[var(--color-trust-blue)] bg-blue-50 text-blue-900 font-medium" 
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700";
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
                  Incorrect. The correct answer is: <strong className="font-semibold">{q.correct}</strong>
                </p>
              )}
            </div>
          ))}

          {!showResults ? (
            <button 
              onClick={handleCheck}
              className="w-full py-4 mt-8 bg-[var(--color-trust-blue)] text-white font-bold rounded-xl hover:bg-blue-800 transition shadow-md"
            >
              Check Answers
            </button>
          ) : (
            <div className="mt-8">
              {isAllCorrect ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Excellent Work!</h3>
                  <p className="text-green-700 mb-6">You have mastered the concepts of HIV Prevention.</p>
                  <Link 
                    to="/vault/module2"
                    className="inline-block px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow"
                  >
                    Proceed to Module 2
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
