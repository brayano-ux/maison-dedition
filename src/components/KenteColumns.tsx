import { motion } from 'framer-motion';

const KENTE_COLORS = [
  '#0F6E56', '#CE1126', '#FCD116', '#C8891A', '#5C3317',
  '#0F6E56', '#CE1126', '#FCD116', '#C8891A', '#5C3317',
  '#0F6E56', '#CE1126',
];

interface KenteColumnsProps {
  className?: string;
  columnCount?: number;
}

export default function KenteColumns({ className = '', columnCount = 12 }: KenteColumnsProps) {
  const colors = KENTE_COLORS.slice(0, columnCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const columnVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          transform: 'scale(1.1)',
        }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="h-full origin-top"
            style={{
              backgroundColor: color,
              boxShadow: 'rgba(0, 0, 0, 0.08) 2px 0px 6px 0px inset',
            }}
            variants={columnVariants}
            animate={{
              rotate: [0, 3, 0],
              scaleY: [1, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
