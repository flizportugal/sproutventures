import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlassWater, Cookie, Paintbrush, Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  { icon: GlassWater, label: 'Lemonade stands' },
  { icon: Cookie, label: 'Bake sales' },
  { icon: Paintbrush, label: 'Crafts & services' },
];

const testimonials = [
  {
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    name: 'Mark T.',
    location: 'Portland, OR',
    quote:
      'My 10-year-old was using the 5R Flow on her own. That blew my mind. Three months in, and she handles setbacks like a pro.',
    color: 'from-paper-peach to-orange-50',
    borderColor: 'border-orange-100',
    rating: 5,
  },
  {
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    name: 'Lisa R.',
    location: 'Phoenix, AZ',
    quote:
      "The first time is awkward. The third time becomes natural. Now it's just how we handle setbacks together.",
    color: 'from-paper-cream to-yellow-50',
    borderColor: 'border-yellow-100',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Tags animation
      const tags = tagsRef.current?.querySelectorAll('.use-case-tag');
      if (tags) {
        gsap.fromTo(
          tags,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: tagsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Testimonial cards animation
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, rotateX: -10 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Photo scale animation
          const photo = card.querySelector('.testimonial-photo');
          if (photo) {
            gsap.fromTo(
              photo,
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: index * 0.15 + 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="w-full bg-bg-primary py-24 lg:py-32 z-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-mint/5 to-transparent rounded-full pointer-events-none" />

      <div className="w-full px-6 lg:px-12 max-w-5xl mx-auto relative">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-8">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[48px] text-text-primary">
            Made for busy parents.{' '}
            <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">
              Loved by kids.
            </span>
          </h2>
        </div>

        {/* Use Case Tags */}
        <div
          ref={tagsRef}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="use-case-tag inline-flex items-center gap-2.5 bg-white border border-gray-100 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md hover:border-mint/30 hover:scale-105 transition-all duration-300 cursor-default"
            >
              <useCase.icon className="w-4 h-4 text-mint" strokeWidth={1.5} />
              <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">
                {useCase.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card relative bg-gradient-to-br ${testimonial.color} rounded-3xl p-7 lg:p-8 card-shadow border ${testimonial.borderColor} hover:shadow-xl hover:shadow-mint/5 transition-all duration-500 group preserve-3d`}
            >
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-mint text-mint" />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-photo w-14 h-14 rounded-2xl object-cover shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                      target.style.display = 'flex';
                      target.style.alignItems = 'center';
                      target.style.justifyContent = 'center';
                      target.style.color = 'white';
                      target.style.fontSize = '24px';
                      target.style.fontWeight = 'bold';
                      target.alt = '';
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="56" height="56"%3E%3Crect fill="%2310b981" width="56" height="56"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="white"%3E' + testimonial.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-mint rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-white">✓</span>
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <blockquote className="text-base text-text-primary/90 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
