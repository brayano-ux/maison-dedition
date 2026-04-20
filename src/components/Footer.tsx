import { Link } from 'react-router-dom';
import { TreePine, MessageCircle, Mail, MapPin, Smartphone, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A' }} className="pt-[72px] pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <TreePine className="w-6 h-6 text-[#C8891A]" />
              <span className="font-heading text-[22px] font-bold text-white">
                Editions Baobab
              </span>
            </Link>
            <p className="font-body text-[14px] mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Des histoires africaines pour nos enfants
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[12px] font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Catalogue', href: '/catalogue' },
                { label: 'A propos', href: '/a-propos' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-[15px] transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[12px] font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/237683260520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-[15px] transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                <MessageCircle className="w-4 h-4" />
                +237 683 260 520
              </a>
              <a
                href="mailto:contact@editionsbaobab.com"
                className="flex items-center gap-2 font-body text-[15px] transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                <Mail className="w-4 h-4" />
                brayanodev@gmail.com
              </a>
              <div
                className="flex items-center gap-2 font-body text-[15px]"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                <MapPin className="w-4 h-4" />
                Douala, Cameroun
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-body text-[12px] font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Paiement
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 font-body text-[15px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <Smartphone className="w-4 h-4" />
                MTN Mobile Money
              </div>
              <div className="flex items-center gap-2 font-body text-[15px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <Smartphone className="w-4 h-4" />
                Orange Money
              </div>
              <div className="flex items-center gap-2 font-body text-[15px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <CreditCard className="w-4 h-4" />
                Carte bancaire
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; 2026 Editions Baobab. Tous droits reserves.
          </p>
          <p className="font-body text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Fait avec {'\u2764'} au Cameroun {'\uD83C\uDDE8\uD83C\uDDF2'}
          </p>
        </div>
      </div>
    </footer>
  );
}
