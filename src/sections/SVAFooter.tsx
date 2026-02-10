import { Leaf, Mail, Phone, MapPin, Lock } from 'lucide-react';

export default function SVAFooter() {
  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  const resources = [
    { label: 'Blog', href: '#' },
    { label: 'Parent Resources', href: '#' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Curriculum', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold text-white">Sprout Ventures</span>
            </div>
            <p className="text-sm mb-4">
              Turning playful curiosity into entrepreneurial confidence for kids ages 6-14.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Lock className="w-4 h-4 text-green-500" />
              <span className="text-xs">COPPA Compliant | Bank-Level Encryption</span>
            </div>
            <p className="text-xs mt-2 text-slate-400">
              Your child's data is never shared or sold
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-green-500" />
                support@sproutventures.com
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-green-500" />
                1-800-SPROUT-1
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 Sprout Ventures Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
