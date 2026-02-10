import { Lightbulb, DollarSign, Users, Zap, Target, MessageSquare } from 'lucide-react';

export default function SVASkills() {
  const skills = [
    {
      icon: Lightbulb,
      title: 'Creative Problem Solving',
      description: 'Through gamified challenges and real-world scenarios, children learn to identify problems and create innovative solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Intelligence',
      description: 'Kids learn money concepts through interactive games that make saving, investing, and budgeting fun and engaging.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Leadership & Teamwork',
      description: 'Collaborative projects teach kids how to communicate effectively, delegate tasks, and inspire others.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Innovation Mindset',
      description: 'Children learn to embrace challenges, persist through setbacks, and see failure as a path to growth.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Market Analysis',
      description: 'Kids learn to identify opportunities, understand customer needs, and create solutions people actually want.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: MessageSquare,
      title: 'Persuasive Communication',
      description: 'Through storytelling and pitching exercises, children learn to articulate ideas clearly and persuasively.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The 21st Century Skills Your Child Needs Today
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            While traditional education focuses on standardized testing, Sprout Ventures Academy develops
            the entrepreneurial mindset and skills children need to thrive in an unpredictable future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                <p className="text-slate-600 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
