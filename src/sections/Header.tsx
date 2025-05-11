'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/button";
import Logo from '@/assets/logo.png';

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  React.useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <header className="py-4 border-b border-white/15 md:border-none font-inte sticky top-0 z-[9999]">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="h-10 w-auto relative">
              <Image 
                src={Logo}
                alt="Lumage Logo"
                width={160}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
              <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            {/* Hamburger/Cross Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded transition hover:bg-white/10 focus:outline-none relative z-[9999]"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            >
              {/* Hamburger/Cross Icon */}
              <div className="relative w-6 h-6">
                <span
                  className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
                    ${sidebarOpen ? "rotate-45 top-3 left-0" : "top-1 left-0"}
                  `}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
                    ${sidebarOpen ? "opacity-0 left-0 top-3" : "top-3 left-0"}
                  `}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
                    ${sidebarOpen ? "-rotate-45 top-3 left-0" : "top-5 left-0"}
                  `}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-full z-[9999] bg-gradient-to-br from-white/20 to-white/10 border-l-2 border-white/20 shadow-2xl
        backdrop-blur-lg transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/30">
          <Image src={Logo} alt="Lumage Logo" width={110} height={32} className="object-contain" />
          <button
            className="p-2 rounded hover:bg-white/10"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            {/* Cross Icon */}
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 py-8 text-lg font-semibold text-white/90">
          <a href="#" className="hover:text-black transition">Features</a>
          <a href="#" className="hover:text-black transition">Developers</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
          <a href="#" className="hover:text-black transition">Changelog</a>
          <Button>Join Waitlist</Button>
        </nav>
        <div className="mt-auto px-8 pb-8 text-xs text-black/40">
          &copy; {new Date().getFullYear()} Lumage. All rights reserved.
        </div>
      </aside>
    </header>
  );
};
