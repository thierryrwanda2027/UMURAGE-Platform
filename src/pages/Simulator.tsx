import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMutation } from '@tanstack/react-query';

const GEMINI_API_KEY = "AIzaSyBdlxMabNvY92LpvhY1nIR9O-B7yNC8fgo";

export function Simulator() {
  const navigate = useNavigate();
  const { updateUserStatus } = useAuth();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'eric', text: string }[]>([
    { sender: 'eric', text: "Bro, I messed up. I think I need a test, but if anyone sees me at the clinic, my life is over. I can't go." }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const mutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const prompt = `System: You are Eric, 19, from Kigali. You fear HIV clinic stigma. User says: "${userMessage}". If empathetic, agree to go. If judgmental, pull away. Then output RAW JSON: {"empathyScore": [0-100], "passed": [true/false], "reply": "[your response]"}. NO markdown. NO text outside JSON.`;
      
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      });

      if (!res.ok) throw new Error("API request failed");
      const data = await res.json();
      const jsonString = data.candidates[0].content.parts[0].text.replace(/\`\`\`json/g, "").replace(/\`\`\`/g, "").trim();
      return JSON.parse(jsonString) as { empathyScore: number; passed: boolean; reply: string };
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, { sender: 'eric', text: data.reply }]);
      if (data.passed && data.empathyScore >= 80) {
        setTimeout(() => {
          updateUserStatus({ isCertified: true });
          navigate('/certificate');
        }, 2000);
      }
    }
  });

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    mutation.mutate(input);
    setInput('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-3xl mx-auto flex flex-col h-[80vh]">
      <h2 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-2">Gate 3: Empathy Simulator</h2>
      <p className="text-gray-600 mb-6 pb-4 border-b">
        <strong>Scenario:</strong> Eric (19, Kigali) is terrified he was exposed to HIV but is too scared of clinic stigma to get tested.
      </p>
      
      <div className="flex-grow overflow-y-auto mb-4 space-y-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-[var(--color-trust-blue)] text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
              <strong className="block text-xs mb-1 opacity-80">{msg.sender === 'user' ? 'You' : 'Eric'}</strong>
              {msg.text}
            </div>
          </div>
        ))}
        {mutation.isPending && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-white border border-gray-200 text-gray-500 rounded-bl-none italic shadow-sm">
              Eric is typing...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {mutation.isError && (
        <p className="text-red-500 text-sm mb-2 text-center">Connection error. Please try again.</p>
      )}

      {mutation.isSuccess && mutation.data && (!mutation.data.passed || mutation.data.empathyScore < 80) && (
        <p className="text-orange-500 text-sm mb-4 text-center bg-orange-50 p-2 rounded border border-orange-200">
          Failed. Empathy score: {mutation.data.empathyScore}. Try a more empathetic approach.
        </p>
      )}

      <div className="flex space-x-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your response to Eric..."
          className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent outline-none"
          disabled={mutation.isPending}
        />
        <button 
          onClick={handleSend}
          disabled={mutation.isPending}
          className="bg-[var(--color-growth-green)] text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
