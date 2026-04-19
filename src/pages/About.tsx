import { motion } from 'framer-motion';
import { Heart, MessageCircle, Mail } from 'lucide-react';
import KenteColumns from '@/components/KenteColumns';
import CTABanner from '@/components/CTABanner';
import { WHATSAPP_LINK } from '@/data/books';

const values = [
  { text: 'Authenticite — Des histoires vraies, ancrees dans la realite africaine.' },
  { text: 'Education — Chaque livre porte une lecon de vie.' },
  { text: 'Beaute — Des illustrations soignees qui enchantent les yeux.' },
];

export default function About() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center" style={{ backgroundColor: '#0F6E56' }}>
        <KenteColumns columnCount={8} />
        <div className="relative z-10 text-center px-6 pt-[72px]">
          <motion.span
            className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-[#FCD116]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            A PROPOS
          </motion.span>
          <motion.h1
            className="font-heading text-[40px] sm:text-[52px] font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Notre histoire
          </motion.h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              className="flex-1 max-w-[600px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-[30px] sm:text-[36px] font-bold text-dark leading-tight">
                Donner aux enfants africains des histoires qui leur ressemblent
              </h2>
              <p className="font-body text-[17px] text-brown leading-[1.8] mt-6">
                Editions Baobab est une maison d&apos;edition camerounaise nee d&apos;une conviction simple : nos enfants meritent des livres qui reflectent leur culture, leur environnement et leurs valeurs. Chaque livre que nous publions est une invitation au voyage dans l&apos;univers riche et colore de l&apos;Afrique. Nos auteurs et illustrateurs talentueux creent des histoires qui eveillent la curiosite, cultivent la sagesse et transmettent les valeurs essentielles de notre heritage.
              </p>

              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-[#CE1126]" />
                  <h3 className="font-body text-[18px] font-bold text-dark">Nos valeurs</h3>
                </div>
                <ul className="space-y-3">
                  {values.map((v, i) => (
                    <motion.li
                      key={i}
                      className="font-body text-[16px] text-brown flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-[#C8891A] mt-1">&bull;</span>
                      {v.text}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="flex-1 max-w-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/about-family.jpg"
                alt="Famille africaine lisant ensemble"
                className="w-full rounded-2xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ backgroundColor: '#FFF8EE' }} className="py-20">
        <div className="max-w-[640px] mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-[30px] sm:text-[36px] font-bold text-dark">
              Contactez-nous
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <MessageCircle className="w-8 h-8 text-[#25D366] mb-3" />
              <span className="font-body text-[14px] font-semibold uppercase tracking-wider text-brown">WhatsApp</span>
              <span className="font-body text-[16px] font-semibold text-dark mt-1">+237 683 260 520</span>
            </motion.a>

            <motion.a
              href="mailto:contact@editionsbaobab.com"
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Mail className="w-8 h-8 text-[#C8891A] mb-3" />
              <span className="font-body text-[14px] font-semibold uppercase tracking-wider text-brown">Email</span>
              <span className="font-body text-[16px] font-semibold text-dark mt-1">contact@editionsbaobab.com</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
