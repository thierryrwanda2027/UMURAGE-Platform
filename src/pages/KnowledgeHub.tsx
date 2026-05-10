import { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, Brain, Ear, MessageSquareOff, LockKeyhole, AlertCircle, HeartPulse, Stethoscope, Droplets, Apple, Leaf, Pill, Award, Activity, Heart, Eye, Ear as EarIcon } from 'lucide-react';

export function KnowledgeHub() {
  const [activePage, setActivePage] = useState('a1');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const categories = [
    {
      id: 'adolescent',
      title: 'Adolescent Development',
      icon: '🧐',
      color: 'blue',
      heroGrad: 'from-blue-900 to-blue-600',
      pages: [
        { id: 'a1', title: 'Introduction to Adolescence' },
        { id: 'a2', title: 'Physical Development' },
        { id: 'a3', title: 'Emotional & Social Growth' },
        { id: 'a4', title: 'Identity & Peer Influence' },
        { id: 'a5', title: 'Supporting Young People' },
      ]
    },
    {
      id: 'mental',
      title: 'Mental Health Basics',
      icon: '🧠',
      color: 'teal',
      heroGrad: 'from-teal-800 to-teal-500',
      pages: [
        { id: 'm1', title: 'What is Mental Health?' },
        { id: 'm2', title: 'Understanding Anxiety' },
        { id: 'm3', title: 'Understanding Depression' },
        { id: 'm4', title: 'Stress & Coping' },
        { id: 'm5', title: 'Seeking Help & Resources' },
      ]
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Wellness',
      icon: '🌿',
      color: 'green',
      heroGrad: 'from-green-800 to-green-500',
      pages: [
        { id: 'n1', title: 'Foundations of Nutrition' },
        { id: 'n2', title: 'Macronutrients & Energy' },
        { id: 'n3', title: 'Micronutrients & Immunity' },
        { id: 'n4', title: 'Physical Activity & Sleep' },
        { id: 'n5', title: 'Healthy Habits for Life' },
      ]
    },
    {
      id: 'substance',
      title: 'Substance Abuse',
      icon: '⚠️',
      color: 'rose',
      heroGrad: 'from-rose-900 to-rose-600',
      pages: [
        { id: 's1', title: 'Understanding Substance Use' },
        { id: 's2', title: 'Alcohol & Its Effects' },
        { id: 's3', title: 'Drugs & Addiction' },
        { id: 's4', title: 'Prevention Strategies' },
        { id: 's5', title: 'Recovery & Support' },
      ]
    }
  ];

  // Helper to find next and prev pages
  const allPages = categories.flatMap(c => c.pages);
  const currentIndex = allPages.findIndex(p => p.id === activePage);
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  const PageNav = () => (
    <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
      {prevPage ? (
        <button onClick={() => setActivePage(prevPage.id)} className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold text-gray-700 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> {prevPage.title}
        </button>
      ) : <div />}
      
      <span className="text-sm text-gray-500 font-medium">
        Page {currentIndex + 1} of {allPages.length}
      </span>

      {nextPage ? (
        <button onClick={() => setActivePage(nextPage.id)} className="flex items-center px-4 py-2 bg-[var(--color-trust-blue)] text-white rounded-lg hover:bg-blue-800 font-semibold transition">
          {nextPage.title} <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      ) : <div />}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
      {/* SIDEBAR */}
      <aside className="w-full md:w-72 flex-shrink-0">
        <div className="sticky top-24 space-y-4">
          {categories.map((cat) => {
            const isCatActive = cat.pages.some(p => p.id === activePage);
            const bgColorMap: Record<string, string> = {
              blue: 'bg-blue-900', teal: 'bg-teal-700', green: 'bg-green-700', rose: 'bg-rose-700'
            };
            const activeLineMap: Record<string, string> = {
              blue: 'border-blue-900 bg-blue-50 text-blue-900 font-bold', 
              teal: 'border-teal-700 bg-teal-50 text-teal-900 font-bold', 
              green: 'border-green-700 bg-green-50 text-green-900 font-bold', 
              rose: 'border-rose-700 bg-rose-50 text-rose-900 font-bold'
            };

            return (
              <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className={`${bgColorMap[cat.color]} text-white px-4 py-3 font-bold flex items-center gap-2 text-sm uppercase tracking-wider`}>
                  <span>{cat.icon}</span> {cat.title}
                </div>
                <div className="flex flex-col">
                  {cat.pages.map((page, idx) => {
                    const isActive = activePage === page.id;
                    return (
                      <button
                        key={page.id}
                        onClick={() => setActivePage(page.id)}
                        className={`text-left px-4 py-3 text-sm border-l-4 transition-all border-b border-gray-50 last:border-b-0 ${isActive ? activeLineMap[cat.color] : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{page.title}</span>
                          {isActive && <ChevronRight className="w-4 h-4 opacity-50" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-1 min-w-0">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden min-h-[600px] p-8 lg:p-12">
          
          {/* ================= ADOLESCENT ================= */}
          {activePage === 'a1' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl p-8 text-white mb-8 relative overflow-hidden">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Adolescent Development</span>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-serif">Introduction to Adolescence</h1>
                <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">Understanding the foundational transition from childhood to adulthood — biologically, socially, and psychologically.</p>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-8xl opacity-10">🧐</div>
              </div>

              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-100 pb-2 mb-4 font-serif">What Is Adolescence?</h2>
                  <p className="mb-4 leading-relaxed">Adolescence is one of the most significant transitions in human life. It is the period between childhood and adulthood, generally spanning ages 10 to 24, during which an individual undergoes profound physical, cognitive, emotional, and social changes.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-lg my-6">
                    <h4 className="text-blue-900 font-bold uppercase text-xs tracking-wider mb-2">Key Insight</h4>
                    <p className="text-blue-900 font-medium">Adolescence is not simply a waiting period before adulthood. It is a critical window in which lifelong health behaviors, relationships, and identity are formed.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-100 pb-2 mb-4 font-serif">Why Adolescence Matters</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="border border-gray-200 p-6 rounded-xl text-center bg-gray-50"><div className="text-3xl font-black text-blue-900 mb-1">1.2B</div><div className="text-sm text-gray-500 font-medium">Adolescents worldwide (WHO)</div></div>
                    <div className="border border-gray-200 p-6 rounded-xl text-center bg-gray-50"><div className="text-3xl font-black text-blue-900 mb-1">10–24</div><div className="text-sm text-gray-500 font-medium">Age range of the phase</div></div>
                    <div className="border border-gray-200 p-6 rounded-xl text-center bg-gray-50"><div className="text-3xl font-black text-blue-900 mb-1">70%</div><div className="text-sm text-gray-500 font-medium">Adult mental conditions begin early</div></div>
                  </div>
                  <p className="leading-relaxed">Adolescence is a period of enormous potential. The brain undergoes its second-most rapid period of development, neural connections are pruned and strengthened, and the capacity for complex thinking expands rapidly.</p>
                </section>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'a2' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl p-8 text-white mb-8 relative overflow-hidden">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Adolescent Development</span>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-serif">Physical Development</h1>
                <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">The biological transformations of puberty and their implications for young people's health and self-image.</p>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-8xl opacity-10">🧠</div>
              </div>
              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-100 pb-2 mb-4 font-serif">Puberty: The Biological Foundation</h2>
                  <p className="mb-4 leading-relaxed">Puberty is the process through which a child's body matures into one capable of reproduction. It is triggered by the hypothalamus releasing GnRH, which signals the pituitary gland to release sex hormones.</p>
                  <div className="grid md:grid-cols-2 gap-8 my-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center"><span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>In Females</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Breast development (thelarche) ages 8–13</li>
                        <li>• Rapid increase in height</li>
                        <li>• Widening of the hips</li>
                        <li>• Onset of menstruation (menarche)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center"><span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>In Males</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Testicular enlargement ages 9–14</li>
                        <li>• Voice deepening</li>
                        <li>• Rapid height increase & muscle mass</li>
                        <li>• Facial and body hair growth</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-100 pb-2 mb-4 font-serif">Brain Development</h2>
                  <p className="mb-6 leading-relaxed">The "emotional gas pedal, not-yet-functional brake" model helps educators understand adolescent behavior.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 border border-blue-100 rounded-lg bg-white shadow-sm">
                      <h3 className="font-bold text-blue-900 mb-2">The Limbic System</h3>
                      <p className="text-sm">Matures early. Responsible for emotions, reward-seeking, and impulse. Makes adolescents highly sensation-seeking.</p>
                    </div>
                    <div className="p-5 border border-blue-100 rounded-lg bg-white shadow-sm">
                      <h3 className="font-bold text-blue-900 mb-2">The Prefrontal Cortex</h3>
                      <p className="text-sm">Governs reasoning, impulse control, and consequence evaluation. Not fully mature until mid-20s.</p>
                    </div>
                  </div>
                </section>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'a3' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Adolescent Development</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Emotional & Social Growth</h1>
                <p className="text-blue-100 text-lg max-w-2xl">How adolescents develop emotional intelligence, form relationships, and navigate the social world.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Adolescence is widely characterized by emotional intensity. Young people may experience emotions that feel overwhelming and difficult to regulate. This emotional volatility has a neurobiological basis.</p>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Social Development: The Peer World</h3>
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900">Peer Belonging</h4>
                    <p className="text-sm mt-1">Exclusion and loneliness are powerful risk factors for depression and anxiety.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900">Peer Pressure</h4>
                    <p className="text-sm mt-1">Operates mostly through perceived norms—adolescents change behavior to match what they believe peers do.</p>
                  </div>
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'a4' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Adolescent Development</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Identity & Peer Influence</h1>
                <p className="text-blue-100 text-lg max-w-2xl">How adolescents answer "Who am I?"</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Identity development is the central psychological task of adolescence. Young people must explore and commit to a sense of self that is coherent, valued, and genuinely their own.</p>
                <div className="bg-blue-50 p-6 rounded-lg my-6">
                  <h4 className="font-bold text-blue-900">Cultural and Ethnic Identity</h4>
                  <p className="text-blue-800 text-sm mt-2">In Rwanda's rich cultural landscape, adolescents navigate the intersection of Rwandan identity and global influences. Young people who feel pride in their cultural heritage while engaging the wider world tend to be more resilient.</p>
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'a5' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Adolescent Development</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Supporting Young People Effectively</h1>
                <p className="text-blue-100 text-lg max-w-2xl">Practical frameworks for parents, educators, and health workers.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>When developmental needs are met, young people thrive. When chronically unmet, vulnerability increases.</p>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Principles of Adolescent-Friendly Communication</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4"><span className="w-6 h-6 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span><div><strong>Listen First, Advise Second:</strong> Practice reflective listening before offering opinions.</div></li>
                  <li className="flex gap-4"><span className="w-6 h-6 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span><div><strong>Maintain Non-Judgment:</strong> Create a genuine culture of safety to keep lines open.</div></li>
                  <li className="flex gap-4"><span className="w-6 h-6 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span><div><strong>Respect Autonomy:</strong> Offer choices wherever possible.</div></li>
                </ol>
              </div>
              <PageNav />
            </div>
          )}

          {/* ================= MENTAL HEALTH ================= */}
          {activePage === 'm1' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-teal-800 to-teal-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Mental Health Basics</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">What Is Mental Health?</h1>
                <p className="text-teal-100 text-lg max-w-2xl">Understanding mental health as a complete state of wellbeing — not merely the absence of illness.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Mental health is defined as a state of wellbeing in which an individual realizes their own potential, can cope with normal stresses, can work productively, and is able to contribute to their community.</p>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-lg my-6">
                  <p className="text-teal-900 font-medium">In Rwanda, significant progress has been made rebuilding mental health systems using community-based approaches following the 1994 genocide.</p>
                </div>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">The Mental Health Continuum</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"><div className="font-bold text-teal-800">Thriving</div><p className="text-sm mt-1">High energy, resilient in the face of stress. The goal for all.</p></div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"><div className="font-bold text-teal-800">Coping</div><p className="text-sm mt-1">Functioning but strained. Persistent low mood but managing daily responsibilities.</p></div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"><div className="font-bold text-teal-800">Struggling</div><p className="text-sm mt-1">Significant distress impairing daily function. Professional support recommended.</p></div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"><div className="font-bold text-teal-800">Crisis</div><p className="text-sm mt-1">Acute distress, inability to function. Immediate intervention required.</p></div>
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'm2' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-teal-800 to-teal-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Mental Health Basics</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Understanding Anxiety</h1>
                <p className="text-teal-100 text-lg max-w-2xl">What anxiety is, how it manifests, and how to respond.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Anxiety is a normal, universal human emotion. It becomes a disorder when it is excessive, persistent, disproportionate to actual threat, and impairs daily functioning.</p>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Types of Anxiety Disorders</h3>
                <ul className="space-y-4 text-sm bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <li><strong>Generalised Anxiety Disorder (GAD):</strong> Persistent, excessive worry about many areas of life for at least 6 months.</li>
                  <li><strong>Panic Disorder:</strong> Recurrent, unexpected panic attacks with physical symptoms like pounding heart.</li>
                  <li><strong>Social Anxiety:</strong> Intense fear of social situations where one might be judged.</li>
                  <li><strong>PTSD:</strong> Anxiety following a traumatic event, including flashbacks and hypervigilance.</li>
                </ul>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'm3' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-teal-800 to-teal-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Mental Health Basics</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Understanding Depression</h1>
                <p className="text-teal-100 text-lg max-w-2xl">Depression is not sadness. It is a serious, treatable condition.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Depression is a pervasive mood disorder characterized by persistent low mood, loss of interest in activities, and physical/cognitive symptoms lasting at least two weeks.</p>
                <div className="bg-red-50 border border-red-200 p-5 rounded-lg my-6 text-red-900 text-sm">
                  <strong>Important:</strong> Depression is highly treatable. The best outcomes arise from a combination of Psychotherapy + Medication + Social Support.
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'm4' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-teal-800 to-teal-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Mental Health Basics</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Stress & Healthy Coping</h1>
                <p className="text-teal-100 text-lg max-w-2xl">Understanding the stress response and building a toolkit of strategies.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Stress is the body's response to demands that exceed its current resources. Chronic stress takes a serious toll on physical and mental health.</p>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Healthy Coping Toolkits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-teal-800">Problem-Focused</h4>
                    <ul className="text-sm mt-2 space-y-1 text-gray-600">
                      <li>• Break large problems into steps</li>
                      <li>• Ask for help directly</li>
                      <li>• Set healthy boundaries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-800">Emotion-Focused</h4>
                    <ul className="text-sm mt-2 space-y-1 text-gray-600">
                      <li>• Diaphragmatic breathing</li>
                      <li>• Mindfulness & physical exercise</li>
                      <li>• Journaling and creative expression</li>
                    </ul>
                  </div>
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'm5' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-teal-800 to-teal-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Mental Health Basics</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Seeking Help & Resources</h1>
                <p className="text-teal-100 text-lg max-w-2xl">Breaking down barriers to care and finding support.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>The most common barriers to seeking help are stigma, shame, lack of awareness, and cost.</p>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">How to Support Someone</h3>
                <ul className="bg-gray-50 p-6 rounded-lg space-y-3 text-sm">
                  <li><strong>1. Start the Conversation:</strong> "I care about you and I'm here if you want to talk."</li>
                  <li><strong>2. Listen Without Fixing:</strong> Sit with the person in their experience first.</li>
                  <li><strong>3. Ask Directly About Suicide:</strong> It signals safety and can save a life.</li>
                  <li><strong>4. Encourage Help:</strong> Offer to help them find professional support.</li>
                </ul>
              </div>
              <PageNav />
            </div>
          )}

          {/* ================= NUTRITION ================= */}
          {activePage === 'n1' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-green-800 to-green-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Nutrition & Wellness</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Foundations of Nutrition</h1>
                <p className="text-green-100 text-lg max-w-2xl">Understanding why food is medicine.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Nutrition is the foundation of health. Every cell in the human body is built from nutrients absorbed through food. The quality of what we eat determines the quality of our immunity, energy, and cognitive function.</p>
                <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-lg my-6">
                  <p className="text-green-900 font-medium">The Balanced Plate: Half vegetables/fruits, a quarter quality protein (beans, lentils, fish), and a quarter whole grains (sorghum, millet, sweet potato).</p>
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'n2' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-green-800 to-green-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Nutrition & Wellness</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Macronutrients & Energy</h1>
                <p className="text-green-100 text-lg max-w-2xl">A deeper look at carbohydrates, proteins, and fats.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="border border-gray-200 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-green-800">Carbohydrates</h4>
                    <p className="text-sm text-gray-600 mt-2">The body's preferred fuel source. Prioritize complex carbs (whole grains, legumes) over simple sugars.</p>
                  </div>
                  <div className="border border-gray-200 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-green-800">Proteins</h4>
                    <p className="text-sm text-gray-600 mt-2">Essential for growth, repair, and immune function. Derived from meat, fish, eggs, and legumes.</p>
                  </div>
                  <div className="border border-gray-200 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-green-800">Fats</h4>
                    <p className="text-sm text-gray-600 mt-2">Critical for brain health and hormone production. Focus on unsaturated fats like avocado and seeds.</p>
                  </div>
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'n3' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-green-800 to-green-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Nutrition & Wellness</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Micronutrients & Immunity</h1>
                <p className="text-green-100 text-lg max-w-2xl">Vitamins and minerals — the small but mighty nutrients.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Micronutrient deficiency is a "hidden hunger" that silently impairs growth, cognition, immunity, and reproductive health.</p>
                <ul className="bg-gray-50 p-6 rounded-lg mt-6 text-sm space-y-3">
                  <li><strong>Iron:</strong> Dark leafy greens, legumes. Essential for oxygen transport.</li>
                  <li><strong>Vitamin A:</strong> Orange/yellow veg, liver. Essential for vision and immunity.</li>
                  <li><strong>Zinc:</strong> Legumes, seeds. Critical for developing T-lymphocytes.</li>
                </ul>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'n4' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-green-800 to-green-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Nutrition & Wellness</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Physical Activity & Sleep</h1>
                <p className="text-green-100 text-lg max-w-2xl">Two of the most powerful pillars of health.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Physical activity is one of the most evidence-rich health interventions available, reducing the risk of cardiovascular disease, type 2 diabetes, and depression.</p>
                <p className="mt-4">Sleep is not passive rest — it is an active biological process where the body repairs tissue, consolidates memory, and calibrates immune function. Adults need 7-9 hours consistently.</p>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 'n5' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-green-800 to-green-500 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Nutrition & Wellness</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Healthy Habits for Life</h1>
                <p className="text-green-100 text-lg max-w-2xl">How to build lasting wellness habits that stick.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Sustainable wellness is built through consistent, imperfect effort — not through achieving a perfect lifestyle. Use the SMART goals approach to make habits stick.</p>
                <div className="bg-green-50 p-6 rounded-lg mt-6 text-green-900">
                  <strong>The Five Pillars:</strong> Eat Well, Move Daily, Sleep Consistently, Connect Socially, and Manage Stress.
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {/* ================= SUBSTANCE ABUSE ================= */}
          {activePage === 's1' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-rose-900 to-rose-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Substance Abuse</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Understanding Substance Use</h1>
                <p className="text-rose-100 text-lg max-w-2xl">A clear-eyed foundation for understanding why people use substances.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Addiction is not a moral failure, a lack of willpower, or a character defect. It is a chronic brain disorder characterized by changes in brain structure and function.</p>
                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Why People Use Substances</h3>
                <p>Relief (managing pain), Pleasure (activating reward pathways), Social Belonging, Curiosity, Performance enhancement, and Dependence (avoiding withdrawal).</p>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 's2' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-rose-900 to-rose-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Substance Abuse</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Alcohol: Effects, Risks & Reality</h1>
                <p className="text-rose-100 text-lg max-w-2xl">The most widely used and misunderstood psychoactive substance.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Alcohol is a central nervous system depressant. It slows brain function, impairs judgment, reduces coordination, and depresses mood.</p>
                <div className="bg-rose-50 border-l-4 border-rose-600 p-5 rounded-r-lg my-6 text-rose-900">
                  <strong>Important:</strong> There is no safe level of alcohol consumption during pregnancy. Fetal Alcohol Spectrum Disorder (FASD) is 100% preventable.
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 's3' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-rose-900 to-rose-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Substance Abuse</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Drugs, Addiction & the Brain</h1>
                <p className="text-rose-100 text-lg max-w-2xl">How different substances affect the brain and body.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>All addictive substances share a common mechanism: they flood the brain's reward system with dopamine.</p>
                <ul className="bg-gray-50 p-6 rounded-lg mt-6 text-sm space-y-3">
                  <li><strong>Stimulants:</strong> Cocaine, amphetamines. Risks: Cardiovascular damage, psychosis.</li>
                  <li><strong>Depressants:</strong> Benzodiazepines. Risks: Respiratory depression, dependence.</li>
                  <li><strong>Opioids:</strong> Heroin, misused tramadol. Risks: Life-threatening respiratory depression.</li>
                </ul>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 's4' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-rose-900 to-rose-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Substance Abuse</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Prevention Strategies That Work</h1>
                <p className="text-rose-100 text-lg max-w-2xl">Evidence-based approaches to preventing substance use.</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>Scare tactics and information-only approaches consistently fail. Prevention programs that build skills, strengthen relationships, and address root causes produce lasting results.</p>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-6">
                  <h4 className="font-bold text-gray-900">Protective Factors</h4>
                  <p className="text-sm text-gray-600 mt-2">Family Connectedness, School Engagement, addressing Mental Health early, and maintaining strong Community Values.</p>
                </div>
              </div>
              <PageNav />
            </div>
          )}

          {activePage === 's5' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-rose-900 to-rose-600 rounded-xl p-8 text-white mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Substance Abuse</span>
                <h1 className="text-3xl font-extrabold mb-4 font-serif">Recovery & Support Pathways</h1>
                <p className="text-rose-100 text-lg max-w-2xl">Recovery from substance use disorder is possible — and people deserve compassionate, evidence-based pathways to get there.</p>
              </div>
              <div className="prose max-w-none text-gray-700 space-y-6">
                <p>Recovery from substance use disorder is not rare — it is the common outcome when people receive appropriate support. Research consistently shows that the majority of people who develop substance use problems do eventually achieve lasting recovery. The challenge is connecting people to support before the costs — to health, relationships, and livelihood — become catastrophic.</p>
                
                <p>Recovery is defined not just as abstinence, but as a process of change through which individuals improve their health and wellness, live self-directed lives, and strive to reach their full potential.</p>
                
                <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-lg my-6 text-rose-900">
                  <h4 className="font-bold text-lg mb-2 flex items-center"><AlertCircle className="w-5 h-5 mr-2" /> Understanding Relapse</h4>
                  <p className="text-sm">Relapse is often a part of the recovery journey, much like a flare-up in any chronic illness like asthma or hypertension. A relapse does not mean the treatment failed or the individual is hopeless; it simply indicates that the treatment plan needs to be adjusted or reinstated.</p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mt-8">Pillars of Recovery Support</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
                    <h4 className="font-bold text-rose-800 flex items-center mb-2"><HeartPulse className="w-5 h-5 mr-2" /> Medical Detox & Stabilization</h4>
                    <p className="text-sm text-gray-600">The first step for severe dependence. Medical supervision is critical, especially for alcohol and depressant withdrawal, which can be life-threatening without proper medical management.</p>
                  </div>
                  
                  <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
                    <h4 className="font-bold text-rose-800 flex items-center mb-2"><EarIcon className="w-5 h-5 mr-2" /> Behavioral Therapy (CBT/MI)</h4>
                    <p className="text-sm text-gray-600">Therapies like Cognitive Behavioral Therapy (CBT) and Motivational Interviewing (MI) help individuals recognize triggers, build healthy coping mechanisms, and reinforce their internal motivation to change.</p>
                  </div>
                  
                  <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
                    <h4 className="font-bold text-rose-800 flex items-center mb-2"><MessageSquareOff className="w-5 h-5 mr-2" /> Peer Support Groups</h4>
                    <p className="text-sm text-gray-600">Community groups like AA, NA, or SMART Recovery provide shared lived experience. Connecting with others who understand the specific challenges of addiction breaks the cycle of shame and isolation.</p>
                  </div>
                  
                  <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
                    <h4 className="font-bold text-rose-800 flex items-center mb-2"><Stethoscope className="w-5 h-5 mr-2" /> Medication-Assisted Treatment</h4>
                    <p className="text-sm text-gray-600">MAT combines behavioral therapy with medications (like Methadone or Buprenorphine for opioid use) to normalize brain chemistry, block euphoric effects, and relieve severe physiological cravings.</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-900 text-white rounded-xl text-center">
                  <h4 className="text-xl font-serif font-bold text-rose-300 mb-3">How You Can Help</h4>
                  <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                    The most powerful thing friends, family, and community members can do is remove the stigma. Speak about addiction as a health condition, celebrate milestones of recovery, and offer a safe, non-judgmental space for honest conversation.
                  </p>
                </div>
              </div>
              <PageNav />
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
