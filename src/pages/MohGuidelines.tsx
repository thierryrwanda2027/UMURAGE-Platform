export function MohGuidelines() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-6">MOH Guidelines</h1>
      <p className="text-gray-700 mb-8 text-lg">
        The official Ministry of Health guidelines govern the ethical, clinical, and standard operational procedures for peer health educators in Rwanda.
      </p>
      
      <div className="space-y-6">
        <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-2">National Standard for Peer Education</h3>
          <p className="text-gray-700">All peer educators must complete an accredited certification program, maintaining strict adherence to patient confidentiality and immediate referral for clinical matters.</p>
        </div>

        <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-r-lg">
          <h3 className="text-xl font-bold text-green-900 mb-2">SRH Policy Framework</h3>
          <p className="text-gray-700">Guidelines dictate that SRH information provided to youth must be scientifically accurate, age-appropriate, and unbiased. Family planning advice must be inclusive and accessible.</p>
        </div>

        <div className="p-6 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg">
          <h3 className="text-xl font-bold text-purple-900 mb-2">Mental Health Protocol</h3>
          <p className="text-gray-700">In the event of an acute mental health crisis, educators are required to contact emergency services or direct the individual to the nearest mental health facility immediately.</p>
        </div>
      </div>
    </div>
  );
}
