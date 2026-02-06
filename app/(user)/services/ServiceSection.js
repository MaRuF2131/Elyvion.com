"use client";

import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="w-full py-10 md:py-12 px-3 md:px-10 lg:px-28 bg-white md:mt-24">
      <div className="w-full mx-auto grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">

        {/* Left Side */}
        <div className="relative flex items-end rounded-3xl bg-[#0f5366] overflow-hidden aspect-square md:aspect-auto md:min-h-[500px] lg:min-h-[600px] group">
          <div className="absolute space-y-6 p-6 md:p-12 md:pb-10 md:px-6 text-white">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold md:pl-10 md:mb-4 mb-3">How we help</h2>
            <p className="text-sm md:text-base text-white/90 md:pb-10 md:pl-10 md:pr-7 leading-relaxed">
              We specialise in Social, Paid, Creative, Influencer and Strategy and work with fast-growth brands and household names across the globe.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:min-h-[500px] lg:min-h-[600px] group">
          <Image
            src="/images/Best-Large-Social-Agency-AgJAdqlO.webp"
            alt="Service Right"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}