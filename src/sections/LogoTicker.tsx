'use client'

import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import quantum from '@/assets/logo-quantum.png';
import celestial from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echo from '@/assets/logo-echo.png';
import { motion } from 'framer-motion';

const logos = [acmeLogo, pulseLogo, apexLogo, quantum, celestial, echo];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="text-lg font-medium text-white">Trusted by top innovative teams</h2>
          </div>

          {/* Marquee wrapper */}
          <div className="relative flex-1 overflow-hidden">
            {/* Gradient fade on both sides */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Marquee motion container */}
            <motion.div
              className="flex gap-14 pr-14 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
              }}
              style={{ willChange: 'transform' }}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <img
                  key={`${logo.src}-${idx}`}
                  src={logo.src}
                  alt="Partner Logo"
                  className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
