"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productMockupImage from '@/assets/product-image.png'

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  // Placeholder image for the bottom section (optional)
  const productImage = {
    src: {productMockupImage}, 
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Have a Business? Get that shi* Online.
        </h2>
        <p className="text-white/70 text-lg tracking-light text-center mt-5 md:text-xl max-w-2xl mx-auto">
          From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-3 lg:flex-1">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex gap-2.5 p-2.5 rounded-xl flex-1"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay loop />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-medium">{tab.title}</div>
                {tab.isNew && (
                  <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold w-fit mt-1">
                    new
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div className="aspect-video w-full relative border border-white/20 rounded-lg overflow-hidden">
            <Image
              src={productMockupImage.src}
              alt="Product image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
