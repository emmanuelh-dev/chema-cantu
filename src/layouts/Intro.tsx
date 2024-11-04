import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div ref={container} className='h-screen overflow-hidden'>
      <motion.div style={{ y }} className='relative h-full'>
        <header className="relative h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/1.jpg"
              alt="Fondo de fisioterapia"
              className="w-full h-full object-cover object-center filter brightness-50"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4 text-balance">
            <p className="text-4xl xl:text-6xl md:text-6xl font-bold mb-4 title">
              Camino a tu recuperación
            </p>
            <h1 className="text-xl md:text-2xl mb-8">
              Chema Cantu Fisioterapeuta y entrenador personal
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            </div>
          </div>
        </header>

      </motion.div>
    </div>
  );
}
