import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical offset in px at scroll extremes. Negative moves up. */
  offset?: number;
  /** Optional horizontal drift in px. */
  x?: number;
};

export function Parallax({
  children,
  className,
  offset = 60,
  x = 0,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const xMove = useTransform(scrollYProgress, [0, 1], [x, -x]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, x: xMove }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
};

/** A decorative layer that drifts as the user scrolls. */
export function ParallaxLayer({
  children,
  className,
  offset = 80,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [offset, -offset]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
