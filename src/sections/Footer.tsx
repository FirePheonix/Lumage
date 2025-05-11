"use client"
import { useState } from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white text-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-medium text-white/80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
              <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            AI Startup Landing Page
          </div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-white/60">
            <a href="#" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Developers</a>
            <a href="#" className="hover:text-white transition">Company</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <a href="#" className="hover:text-white transition">Changelog</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-white/60">
            <a href="#" aria-label="X" className="hover:text-white transition"><FaXTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
