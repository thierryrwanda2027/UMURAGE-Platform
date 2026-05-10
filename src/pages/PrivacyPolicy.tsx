export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-6">Privacy Policy</h1>
      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>Effective Date: January 1, 2026</p>
        <p>At UMURAGE E-ACADEMY, we take your privacy seriously. This Privacy Policy outlines the types of personal information we receive and collect when you use our services, as well as some of the steps we take to safeguard information.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-6">Information Collection</h3>
        <p>We collect information when you register on our site, including your email address and certification progress. This data is stored locally to maintain your progress and ensure you receive the appropriate certification upon course completion.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-6">Data Usage</h3>
        <p>Your data is exclusively used for tracking your educational progress within the platform. The AI simulator uses conversational data to score empathy but does not permanently store the chat logs on our servers.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-6">Data Security</h3>
        <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is restricted to authorized personnel only.</p>
      </div>
    </div>
  );
}
