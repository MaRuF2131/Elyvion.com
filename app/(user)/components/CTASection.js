"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="pt-16 bg-transparent -mb-15 relative z-10">
      <div className="relative px-13">
        <span className="absolute left-6 -top-5 ">
                <svg
                  viewBox="0 0 35 33"
                  className="fill-current text-black w-8 h-8"
                >
                  <path d="M.107 19.722a5.088 5.088 0 0 1 1.617-.084c2.663.763 5.34 1.396 7.927 2.372 3.876 1.473 7.713 3.052 11.444 4.837a19.71 19.71 0 0 1 4.204 3.052 1.732 1.732 0 0 1 .374 1.633 1.8 1.8 0 0 1-1.564.64 15.77 15.77 0 0 1-3.754-1.22 691.449 691.449 0 0 1-14.686-7.301c-1.93-1-3.785-2.136-5.669-3.212l.107-.717ZM16.708 0c.539.134 1.053.35 1.526.64 2.052 1.84 4.173 3.632 6.05 5.647 2.823 3.051 5.547 6.172 8.133 9.414a20.022 20.022 0 0 1 2.41 4.623 1.755 1.755 0 0 1-.396 1.633 1.8 1.8 0 0 1-1.686-.114 16.124 16.124 0 0 1-2.853-2.77 725.989 725.989 0 0 1-9.919-13.107c-1.289-1.732-2.449-3.578-3.662-5.34L16.708 0Z"></path>
                </svg>
              </span>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gradient-to-br from-teal-700 to-teal-600 rounded-3xl overflow-hidden">
          
          
          {/* Content */}
          <div className="p-8 sm:p-12 md:p-16">
            <h2 className="text-3xl  font-bold text-white mb-6 sm:mb-8">
              Grow with us. With Elyvion.
            </h2>

            <Link 
              href="/campaign"
              className="inline-flex items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base  font-medium hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Launch Campaign!</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Logo */}
          <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8">
            <div className="text-center">
              <Image src="/logo/logo.png" alt="Elyvion" width={300} height={300} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}