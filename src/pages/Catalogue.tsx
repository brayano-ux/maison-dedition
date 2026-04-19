import { useState } from 'react';
import { motion } from 'framer-motion';
import KenteColumns from '@/components/KenteColumns';
import BookCard from '@/components/BookCard';
import CTABanner from '@/components/CTABanner';
import { books, categories } from '@/data/books';

export default function Catalogue() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredBooks = activeFilter === 'Tous'
    ? books
    : books.filter((b) => b.category === activeFilter);

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
            NOTRE CATALOGUE
          </motion.span>
          <motion.h1
            className="font-heading text-[40px] sm:text-[52px] font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Decouvrez tous nos livres
          </motion.h1>
          <motion.p
            className="font-body text-[18px] mt-4 max-w-[560px] mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            5 histoires africaines pour enfants, entre fables, aventures et contes du village.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <div
        className="sticky top-[72px] z-40 py-4"
        style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #F5E6CC',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="font-body text-[14px] font-semibold px-5 py-2 rounded-full transition-all duration-200"
              style={{
                backgroundColor: activeFilter === cat ? '#0F6E56' : '#FFF8EE',
                color: activeFilter === cat ? '#FFFFFF' : '#5C3317',
                border: `1px solid ${activeFilter === cat ? '#0F6E56' : '#F5E6CC'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Book Grid */}
      <section style={{ backgroundColor: '#FFF8EE' }} className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredBooks.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </motion.div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-[18px] text-brown">
                Aucun livre dans cette categorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
