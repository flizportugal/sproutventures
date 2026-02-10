import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SVAFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much time does my child need to spend on the platform?',
      answer: 'Just 30 minutes, 2-3 times per week. That\'s less time than a soccer practice, but with skills that last a lifetime. Your child can learn at their own pace—some speed through lessons they love, others take their time. The platform adapts to their schedule.'
    },
    {
      question: 'Is this only for kids who want to be entrepreneurs?',
      answer: 'Yes! Even if your child never starts a business, they\'ll gain critical thinking, communication, financial literacy, and problem-solving skills that help in ANY career. We\'ve seen shy kids become confident speakers, creative kids become innovators, and analytical kids become strategic thinkers. The skills are universal.'
    },
    {
      question: 'How is Sprout Ventures different from other learning platforms?',
      answer: 'Unlike coding bootcamps (single skill focus) or passive video courses (no interaction), we combine live instruction, hands-on projects, gamified learning, AND a supportive community. Your child doesn\'t just watch—they DO. They build real micro-businesses, manage real money, and solve real problems.'
    },
    {
      question: 'How much parental involvement is required?',
      answer: 'Our platform is designed to be child-led, but parental involvement enhances the experience. Younger children (6-8) may need more guidance, while older kids can navigate more independently. We provide parent guides for each module to help you support your child\'s learning journey. Many parents tell us they enjoy the activities as much as their children and appreciate the bonding opportunity!'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no hidden fees or complicated processes. Simply log into your parent dashboard and click on "Manage Subscription." If you cancel during your free trial period, you won\'t be charged at all. We also offer our 30-day money-back guarantee for paid subscriptions if you\'re not completely satisfied.'
    },
    {
      question: 'Is the content age-appropriate for different age groups?',
      answer: 'Absolutely! Our curriculum is carefully designed for three age brackets: Sprout Starters (6-8 years), Sprout Growers (9-11 years), and Sprout Leaders (12-14 years). Each level builds upon age-appropriate concepts and presents them in engaging ways suited to that developmental stage. The platform automatically recommends content based on your child\'s age, but you can adjust the difficulty level as needed.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Common Questions From Parents
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about getting started with Sprout Ventures Academy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-slate-200 rounded-xl overflow-hidden transition-all hover:border-green-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 bg-slate-50">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Still have questions? Our team is here to help.</p>
          <a
            href="mailto:support@sproutventures.com"
            className="text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
}
