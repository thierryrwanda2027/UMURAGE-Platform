import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ModuleDetail() {
  const { id } = useParams<{ id: string }>();

  const modulesData: Record<string, { title: string, content: string }> = {
    'hiv-prevention': {
      title: 'HIV Prevention Protocol',
      content: 'Pre-Exposure Prophylaxis (PrEP) is highly effective for preventing HIV. Post-Exposure Prophylaxis (PEP) must be administered within 72 hours of potential exposure. Understanding the window period is crucial for accurate testing and counseling.'
    },
    'youth-srh': {
      title: 'Youth Sexual & Reproductive Health',
      content: 'Adolescents require accurate, non-judgmental SRH information. Topics include contraceptive methods, consent, puberty education, and STIs. As a peer educator, ensuring privacy and maintaining an open dialogue is essential.'
    },
    'mental-health': {
      title: 'Mental Health First Aid',
      content: 'Mental health crises require immediate, empathetic support. Recognize signs of distress, depression, and anxiety. De-escalate situations and provide reassurance before guiding the individual to professional psychological support.'
    },
    'active-listening': {
      title: 'Active Listening Techniques',
      content: 'Active listening involves fully concentrating on what is being said rather than passively hearing the message. Key techniques include maintaining eye contact, non-verbal affirmations, reflecting back what was said, and avoiding interruptions.'
    },
    'confidentiality': {
      title: 'Ethics and Confidentiality',
      content: 'Confidentiality builds trust. Information shared by a peer must remain private, except in cases where there is a risk of harm to the individual or others. Always explain the limits of confidentiality before beginning a session.'
    },
    'clinical-referrals': {
      title: 'Clinical Referral Pathways',
      content: 'Peer educators are the bridge, not the final destination. Knowing when and how to refer a peer to a clinic, psychologist, or hospital is vital. Familiarize yourself with the local referral networks and follow up to ensure care was received.'
    }
  };

  const data = modulesData[id || ''];

  if (!data) {
    return <div className="p-8 text-center">Module not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-10">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Modules
      </Link>
      <h1 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-6">{data.title}</h1>
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-lg">
        <p>{data.content}</p>
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Key Takeaways</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Always stay updated with the latest Ministry of Health guidelines.</li>
            <li>Empathy and accuracy must go hand in hand.</li>
            <li>When in doubt, consult a supervisor or clinician.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
