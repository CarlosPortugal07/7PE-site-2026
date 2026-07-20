import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset = 28;

const buildVariants = (direction: Direction): Variants => {
  const x =
    direction === 'left' ? -offset : direction === 'right' ? offset : 0;
  const y =
    direction === 'up' ? offset : direction === 'down' ? -offset : 0;
  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const variants = buildVariants(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  gap?: number;
  once?: boolean;
  amount?: number;
};

export function Stagger({
  children,
  className,
  gap = 0.12,
  once = true,
  amount = 0.15,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: offset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
