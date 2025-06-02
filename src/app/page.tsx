import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features"
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction }  from "@/sections/CallToAction"; 
import Footer from "@/sections/Footer";

export default function Home() { 
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#000000]">
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  );
}