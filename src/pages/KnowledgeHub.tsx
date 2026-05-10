export function KnowledgeHub() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-6">Knowledge Hub</h1>
      <p className="text-gray-700 mb-4 text-lg">Welcome to the UMURAGE E-ACADEMY Knowledge Hub. Here you will find extensive resources, articles, and research papers concerning youth and adult health.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Adolescent Development</h3>
          <p className="text-gray-600 text-sm">Understanding the physical and psychological changes during puberty to better support youth.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Mental Health Basics</h3>
          <p className="text-gray-600 text-sm">Resources on identifying anxiety, depression, and stress among peers.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nutrition & Wellness</h3>
          <p className="text-gray-600 text-sm">Guidelines for a healthy lifestyle, diet, and physical well-being.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Substance Abuse</h3>
          <p className="text-gray-600 text-sm">Educational material on the risks of substance abuse and intervention strategies.</p>
        </div>
      </div>
    </div>
  );
}
