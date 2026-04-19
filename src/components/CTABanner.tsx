import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/books';

export default function CTABanner() {
  return (
    <section className="relative" style={{ backgroundColor: '#0F6E56' }}>
      {/* Kente Stripe Top */}
      <div className="w-full">
        <div className="h-1.5" style={{ backgroundColor: '#0F6E56' }} />
        <div className="h-1.5" style={{ backgroundColor: '#CE1126' }} />
        <div className="h-1.5" style={{ backgroundColor: '#FCD116' }} />
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <motion.h2
          className="font-heading text-[36px] sm:text-[42px] font-bold text-white leading-tight"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        >
          Offrez a votre enfant le cadeau de l&apos;imagination
        </motion.h2>
        <motion.p
          className="font-body text-[18px] mt-4 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.9)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Commandez nos livres des maintenant et faites decouvrir a vos enfants des histoires qui les inspireront.
        </motion.p>
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-[18px] font-bold px-10 py-4 rounded-xl mt-8 transition-colors duration-300 hover:bg-white"
          style={{ backgroundColor: '#FCD116', color: '#5C3317' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-5 h-5" />
          Commander maintenant
        </motion.a>
      </div>
    </section>
  );
}
