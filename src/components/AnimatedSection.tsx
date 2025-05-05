'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, id, className = '', delay = 0.2 }: AnimatedSectionProps) => {
  // クライアントサイドでのみアニメーションを適用するための状態
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // サーバーサイドレンダリング時やJavaScriptが無効な環境では、通常のセクションを返す
  if (!isMounted) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 