"use client";

export default function CertificateSection() {
  return (
    <section className="py-0  bg-gray-50">
      <div className="px-6">
        <div className="bg-white border-1 border-black rounded-3xl p-6 ">
          <div className="flex flex-col  items-center justify-between gap-6">
            
            {/* Icon + Content */}
            <div className="flex flex-col  items-start gap-4 sm:gap-6 flex-1">
              
              {/* Icon circle */}
              <div className=" w-full inline-flex items-center justify-start gap-4 p-4 rounded-full">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Certificate of Incorporation
                </h3>
              </div>

              <div>
                <p className="text-base text-gray-600 leading-relaxed">
                  View our official Certificate of Incorporation issued by Companies House.
                  This document verifies our status as a registered private limited
                  company in accordance with the Companies Act 2006.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="w-full text-right">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-all duration-300 shadow-md">
                <span>View Document</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}