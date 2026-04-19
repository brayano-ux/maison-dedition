import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, BookOpen, Star, Users, Zap, Palette, Globe, GraduationCap, Smartphone, Quote } from 'lucide-react';
import KenteColumns from '@/components/KenteColumns';
import BookCard from '@/components/BookCard';
import CTABanner from '@/components/CTABanner';
import { books, WHATSAPP_LINK } from '@/data/books';

const stats = [
  { icon: BookOpen, value: '5', label: 'Livres disponibles' },
  { icon: Star, value: '19', label: 'Illustrations par livre' },
  { icon: Users, value: '4-10', label: 'Ans recommandes' },
  { icon: Zap, value: '100%', label: 'Contenu africain' },
];

const features = [
  {
    icon: Palette,
    title: 'Illustrations magnifiques',
    description: "Chaque livre contient 19 illustrations colorees qui captivent l'imagination des enfants.",
  },
  {
    icon: Globe,
    title: '100% Camerounais',
    description: "Des histoires authentiques qui celebrent la culture, les traditions et les valeurs africaines.",
  },
  {
    icon: GraduationCap,
    title: 'Contenu educatif',
    description: 'Des fables et aventures qui enseignent le courage, la sagesse et le respect.',
  },
  {
    icon: Smartphone,
    title: 'Format PDF instantane',
    description: "Recevez vos livres immediatement apres l'achat. Imprimez ou lisez sur tablette.",
  },
];

const testimonials = [
  {
    quote: "Mes enfants adorent 'Amina et le Secret du Baobab'. Ils demandent a la relire chaque soir. Les illustrations sont magnifiques et l'histoire transmet de belles valeurs.",
    name: 'Marie L.',
    role: 'Maman de 2 enfants',
    initial: 'M',
    color: '#0F6E56',
  },
  {
    quote: "Enfin des livres qui representent la culture camerounaise ! Mon fils de 6 ans s'identifie aux personnages. C'est educatif et amusant a la fois.",
    name: 'Grace K.',
    role: 'Maman de 3 enfants',
    initial: 'G',
    color: '#C8891A',
  },
  {
    quote: "J'ai achete tous les livres au format PDF. La qualite est excellente et je peux les imprimer quand je veux. Mes nieces adorent 'Le Petit Pecheur'.",
    name: 'Amina N.',
    role: 'Tante et enseignante',
    initial: 'A',
    color: '#CE1126',
  },
];

const featuredBooks = books.slice(0, 3);

export default function Home() {
  return (
    <div className="font-body">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: 'linear-gradient(to bottom, #FFF8EE, #F5E6CC)' }}>
        <KenteColumns />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-16 pt-[72px]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 min-h-[calc(100vh-72px)]">
            {/* Left: Text */}
            <motion.div
              className="flex-1 max-w-[520px] py-12 lg:py-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-[#C8891A]">
                LIVRES POUR ENFANTS
              </span>
              <h1 className="font-heading text-[40px] sm:text-[52px] lg:text-[56px] font-bold text-dark leading-[1.1] mt-4">
                Des histoires africaines qui enchantent vos enfants
              </h1>
              <p className="font-body text-[18px] text-brown leading-relaxed mt-6 max-w-[480px]">
                Decouvrez nos livres illustres camerounais pour enfants de 4 a 10 ans. Des contes, fables et aventures qui eveillent la curiosite et transmettent les valeurs africaines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/catalogue"
                  className="inline-flex items-center justify-center font-body text-[16px] font-bold px-8 py-3.5 rounded-xl text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#0F6E56' }}
                >
                  Voir le catalogue
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-body text-[16px] font-bold px-8 py-3.5 rounded-xl text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <Smartphone className="w-5 h-5" />
                  Commander sur WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right: Illustration */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end pb-12 lg:pb-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <img
                src="/hero-illustration.jpg"
                alt="Enfant africain lisant sous un baobab"
                className="w-full max-w-[420px] lg:max-w-[480px] rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-[#5C3317]" />
        </motion.div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section style={{ backgroundColor: '#0F6E56' }} className="py-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-4 pl-4"
                style={{ borderLeft: '3px solid #FCD116' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <stat.icon className="w-7 h-7 text-white flex-shrink-0" />
                <div>
                  <div className="font-body text-[28px] font-bold text-white">{stat.value}</div>
                  <div className="font-body text-[14px] text-white/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED BOOKS ========== */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <motion.span
              className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-[#C8891A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              NOTRE COLLECTION
            </motion.span>
            <motion.h2
              className="font-heading text-[36px] sm:text-[40px] font-bold text-dark mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Nos livres phares
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 font-body text-[16px] font-semibold text-forest hover:underline transition-all"
            >
              Voir tous nos livres
              <span className="text-lg">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section style={{ backgroundColor: '#FFF8EE' }} className="py-24">
        <div className="max-w-[960px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <motion.span
              className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-[#C8891A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              POURQUOI NOUS CHOISIR
            </motion.span>
            <motion.h2
              className="font-heading text-[32px] sm:text-[40px] font-bold text-dark mt-3 max-w-[640px] mx-auto leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              L&apos;avenir de nos enfants commence par de bonnes histoires
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-feature flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#F5E6CC' }}
                >
                  <feature.icon className="w-10 h-10 text-forest" />
                </div>
                <h3 className="font-body text-[20px] font-bold text-dark">{feature.title}</h3>
                <p className="font-body text-[16px] text-brown mt-2 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <motion.span
              className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-[#C8891A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              TEMOIGNAGES
            </motion.span>
            <motion.h2
              className="font-heading text-[36px] sm:text-[40px] font-bold text-dark mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ce que disent les parents
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FFF8EE',
                  borderLeft: '4px solid #FCD116',
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Quote className="w-6 h-6 text-[#C8891A] mb-3" />
                <p className="font-body text-[16px] italic text-brown leading-[1.7]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-heading text-[20px] font-bold"
                    style={{ backgroundColor: '#F5E6CC', color: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-body text-[15px] font-bold text-dark">{t.name}</div>
                    <div className="font-body text-[13px] text-brown">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <CTABanner />
    </div>
  );
}
