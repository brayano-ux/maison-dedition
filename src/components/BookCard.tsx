import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import type { Book } from '@/data/books';
import { WHATSAPP_LINK } from '@/data/books';

interface BookCardProps {
  book: Book;
  index?: number;
}

export default function BookCard({ book, index = 0 }: BookCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Bonjour ! Je souhaite commander le livre "${book.title}".`
  );

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
    >
      {/* Book Cover */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Badge */}
        <span
          className={`absolute top-3 left-3 font-body text-[11px] font-bold uppercase px-3 py-1 rounded-full text-white ${book.badge === 'Best-seller' ? 'bg-[#C8891A]' : 'bg-[#CE1126]'
            }`}
        >
          {book.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-[20px] font-bold text-dark leading-tight">
          {book.title}
        </h3>
        <p className="font-body text-[14px] text-brown mt-1">
          {book.ageRange} | {book.pages} pages | {book.illustrations} illustrations
        </p>
        <p className="font-body text-[15px] text-brown mt-2 line-clamp-2 leading-relaxed">
          {book.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: '#FFF8EE',
                color: '#5C3317',
                border: '1px solid #F5E6CC',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Prices */}
        <div className="flex items-center gap-4 mt-4">
          <span className="font-body text-[18px] font-bold text-forest">
            {book.pricePDF.toLocaleString()} FCFA
          </span>
          <span className="font-body text-[14px] font-semibold text-brown line-through">
            {book.pricePrint.toLocaleString()} FCFA
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2 mt-4 pt-4" style={{ borderTop: '1px solid #F5E6CC' }}>
          <motion.button
            className="flex-1 font-body text-[13px] font-bold py-2.5 rounded-lg transition-colors duration-300"
            style={{ backgroundColor: '#FCD116', color: '#5C3317' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(book.purchaseLink, '_blank')}
          >
            Acheter PDF
          </motion.button>
          <motion.a
            href={`${WHATSAPP_LINK}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-body text-[13px] font-bold text-white transition-colors duration-300"
            style={{ backgroundColor: '#25D366' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
