"use client";

import { useState } from "react";
import Image from "next/image";

export default function CertificateSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Certificate/companies_house_document-01-Clz3w18j.jpg",
    "/Certificate/companies_house_document-02-Bz936KEd.jpg",
    "/Certificate/companies_house_document-03-BqMiy5BG.jpg",
    "/Certificate/companies_house_document-04-_KSqUXdV.jpg",
    "/Certificate/companies_house_document-05-C6aHcmKG.jpg",
    "/Certificate/companies_house_document-06-CIPxF54M.jpg",
    "/Certificate/companies_house_document-07-BF8w2CaQ.jpg",
    "/Certificate/companies_house_document-08-D-YT3fn9.jpg",
    "/Certificate/companies_house_document-09-bjVE9q7v.jpg",
    "/Certificate/companies_house_document-10-pLDVvW1s.jpg",
    "/Certificate/companies_house_document-11-BC8NSVP2.jpg",
    "/Certificate/companies_house_document-12-CSKd1nuJ.jpg",
    "/Certificate/companies_house_document-13-C7fdyiGb.jpg",
  ];

  const totalPages = images.length;

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setCurrentIndex(0); // পপআপ খুললে প্রতিবার ১ নম্বর পেজ থেকে শুরু হবে
  };

  const nextPage = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="px-2 md:px-6 lg:px-10 xl:px-11 2xl:px-20 bg-gray-50 py-10">
      <div className="bg-white border border-black rounded-3xl p-6">
        <div className="flex flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="w-full inline-flex items-center justify-start gap-4">
              <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Certificate of Incorporation
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              View our official Certificate of Incorporation issued by Companies House.
            </p>
          </div>

          <div className="w-full text-right">
            <button 
              onClick={toggleModal}
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-teal-700 transition-all"
            >
              View Document
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[95vh]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-bold">Certificate of Incorporation</h2>
              <button onClick={toggleModal} className="text-gray-500 hover:text-black text-2xl">×</button>
            </div>

            {/* Document Body */}
            <div className="flex-1 overflow-y-auto bg-gray-200 p-4 sm:p-8 flex justify-center">
              <div className="relative w-full max-w-2xl bg-white shadow-xl p-2 sm:p-4 min-h-[400px]">
                {/* Image Display */}
                <div className="relative aspect-[1/1.414] w-full">
                  <Image 
                    src={images[currentIndex]} 
                    alt={`Page ${currentIndex + 1}`} 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="px-6 py-4 border-t bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevPage}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 rounded-md text-sm font-semibold transition-colors"
                >
                  Previous
                </button>
                
                <span className="text-sm font-medium text-gray-700 min-w-[100px] text-center">
                  Page {currentIndex + 1} of {totalPages}
                </span>

                <button 
                  onClick={nextPage}
                  disabled={currentIndex === totalPages - 1}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 rounded-md text-sm font-semibold transition-colors"
                >
                  Next
                </button>
              </div>

              <button 
                onClick={toggleModal}
                className="w-full sm:w-auto px-8 py-2 bg-gray-100 border rounded-md font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}