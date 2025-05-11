
'use client'

import { Button } from "@/components/button";
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import starsBg from '@/assets/stars.png'
import gridLines from "@/assets/grid-lines.png";
import '../app/globals.css'
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg"


// export const Hero = () => {
//   return (
//     <section className="h-[492px] md:[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom, transparent,black_10%,black_90%,transparent)]" 
//       style={{
//         backgroundImage: `url(${startsBg.src})`
//       }}>
//       <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,_rgba(140,69,255,0.5)_0%,_rgba(14,0,36,0.5)_78%,_transparent)]"></div>
      

//       {/* start planet */}
//       <div 
//         className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         style={{
//           background: "radial-gradient(circle at 16.8% 18.3%, white 0%, rgb(184,148,255) 20%, rgb(0,0,0) 60%)",
//           boxShadow: "-20px -20px 50px rgba(255,255,255,0.5), -20px -20px 80px rgba(255,255,255,0.1), 0 0 50px rgb(140,69,255)"
//         }}
//       ></div>
//       {/* end planet */}

//       {/* start ring 1 */}
//       <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <div className="absolute h-2 w-2  bg-white opacity-20 rounded-full top-1/2 left-0 -translate-x-0.5 -translate-y-0.5"></div>
//         <div className="absolute h-2 w-2  bg-white rounded-full top-0 left-1/2 -translate-x-0.5 -translate-y-0.5"></div>
//         <div className="absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-0.5 -translate-y-0.5 inline-flex items-center jusity-center">
//           <div className="h-2 w-2 bg-white rounded-full "></div>
//         </div>
//       </div>
//       {/* end ring 1 */}

//       {/* start ring 2 */}
//       <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
//       {/* end ring 2 */}

//       {/* start ring 3 */}
//       <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <div className="absolute h-2 w-2  bg-white opacity-30 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute h-2 w-2  bg-white rounded-full top-0 left-1/2 -translate-x-0.5 -translate-y-0.5"></div>
//       </div>
//       {/* end ring 3 */}

//       <div className="container relative text-center mt-16">
//         <p className="text-xl font-medium text-white mb-4">
//           Elevate Your Business with Stunning
//         </p>
        
//         <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] text-transparent bg-clip-text">
//           Landing Pages
//         </h1>

//         <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
//           Have a business?  Get online fast with stunning, ready-to-use landing page templates — built to showcase your brand and grow your business.
//         </p>
//         <div className="flex justify-center mt-5">
//           <Button>Join Waitlist</Button>
//         </div>
//       </div>
//     </section>
//   );
// };

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightPointerScope, rightPointerAnimate] = useAnimate()
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  // Handle mouse move to update the light position
  const handleMouseMove = (e:any) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 }); // Center position
  };

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ])

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: 'easeInOut' }],
    ])

    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ])
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-24 overflow-x-clip relative"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grid overlay with radial gradient mask - following mouse position */}
      <div 
        className="absolute inset-0 bg-[rgb(54,54,54)] bg-blend-overlay transition-[mask-position] duration-200 ease-out"
        style={{
          backgroundImage: `url(${gridLines.src})`,
          maskImage: `radial-gradient(80% 80% at ${mousePosition.x}% ${mousePosition.y}%, black, transparent)`,
        }}
      ></div>

      <div className="container relative">
        {/* Left floating design */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block z-10"
        >
          <Image
            src={designExample1Image}
            alt="Design example 1 image"
            draggable={false}
          />
        </motion.div>

        {/* Right floating design */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -right-64 top-16 hidden lg:block z-10"
        >
          <Image
            src={designExample2Image}
            alt="Design example 2 image"
            draggable={false}
          />
        </motion.div>

        {/* Left pointer */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block z-10"
        >
          <Pointer name="Shubham" />
        </motion.div>

        {/* Right pointer */}
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 200, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block z-10"
        >
          <Pointer name="Santosh" color="red" />
        </motion.div>

        {/* Seed round badge */}
        <div className="flex justify-center relative z-10">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-white font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>

        {/* Hero Heading */}
        <h1 className="text-6xl md:text-7xl text-center mt-6 lg:text-8xl font-medium max-w-3xl mx-auto relative z-10">
          Have a business? Get that shi* Online{' '}
          <span className="highlight-animate relative inline-block px-2">
            Fast
          </span>.
        </h1>

        {/* Subtext */}
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto relative z-10">
          Design tools shouldn't slow you down. Layers combine powerful features with an intuitive interface that keeps you in your creative flow.
        </p>

        {/* Call to action */}
        <div className="flex justify-center py-5 relative z-10">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  )
}