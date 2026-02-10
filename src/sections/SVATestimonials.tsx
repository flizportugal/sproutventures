import { Quote, TrendingUp } from 'lucide-react';

export default function SVATestimonials() {
  const testimonials = [
    {
      name: 'Jennifer R.',
      role: 'Mother of Alex, 10',
      image: '/testimonial_parent_a.jpg',
      content: 'My son was always full of ideas but never knew how to turn them into reality. After just 2 months with Sprout Ventures, he\'s launched his own dog-walking service and is learning how to manage his earnings. The confidence boost has been incredible!'
    },
    {
      name: 'Michael T.',
      role: 'Father of Emma, 8 & Jake, 12',
      image: '/testimonial_parent_b.jpg',
      content: 'I\'m amazed at how Sprout Ventures has made complex business concepts so accessible for my kids. Emma now understands profit margins better than I did in college! Both my children look forward to their weekly challenges and are constantly talking about their \'business ideas\'.'
    },
    {
      name: 'Sarah L.',
      role: 'Mother of Tyler, 11',
      image: '/testimonial_parent_a.jpg',
      content: 'My son used to spend hours playing video games, but now he\'s channeling that energy into creating his own online store with Sprout Ventures\' guidance. The way they\'ve gamified business education is brilliant. Tyler has made real money selling his digital artwork and is learning about taxes, expenses, and saving.'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Parents & Kids Are Saying
          </h2>
          <p className="text-xl text-slate-600">
            Join thousands of families who are nurturing the next generation of entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 relative">
              <Quote className="w-12 h-12 text-green-200 mb-4" />
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-green-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img
                src="/testimonial_parent_b.jpg"
                alt="The Johnson Family"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <div className="text-sm font-semibold text-green-600 mb-2">CASE STUDY</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Johnson Family: From School Struggle to Young CEO
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "Our son Zach was struggling in traditional school. His teachers said he couldn't focus,
                but we knew he was just bored. With Sprout Ventures Academy, he found his passion for
                innovation and problem-solving."
              </p>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-slate-900">Within 6 months:</span>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    Started composting service now serving 15 families
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    Earning $200+ monthly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    Using real math daily (cost/profit calculations)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    Went from "unfocused" to "most improved student" per his teacher
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    Built confidence that transferred to schoolwork
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
