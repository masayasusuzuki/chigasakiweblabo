'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-16 relative">
            <div className="bg-orange-500 text-white text-2xl md:text-3xl font-bold py-4 px-6 rounded-t-full rounded-bl-full rounded-br-full inline-block mb-2 relative">
              まずはお気軽にご相談ください
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 
                border-l-[15px] border-l-transparent 
                border-r-[15px] border-r-transparent 
                border-t-[20px] border-t-orange-500">
              </div>
            </div>
            <div className="h-8"></div>
            <p className="text-base md:text-xl opacity-80 max-w-2xl mx-auto text-justify md:text-center mt-4 font-sans">
              ご相談・お見積りはすべて無料です。<br />
              「こんなことできる？」といった軽いご質問でも、お気軽にご連絡ください。
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8 md:mb-12 justify-center max-w-3xl mx-auto">
            <div>
              <a href="tel:080-4164-1574" className="block">
                <div className="bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full py-3 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 flex items-center justify-center min-w-[320px] relative">
                  <svg 
                    className="w-7 h-7 absolute left-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold scale-[1.3] transform origin-center">080-4164-1574</p>
                    <p className="text-sm">9:00～23:00（土日含む）</p>
                  </div>
                  <svg 
                    className="w-5 h-5 text-white absolute right-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            
            <div>
              <Link href="/mail-form" className="block">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full py-3 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 relative flex items-center justify-center min-w-[320px]">
                  <svg 
                    className="w-7 h-7 absolute left-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold scale-[1.3] transform origin-center">メール</p>
                    <p className="text-sm">で相談する</p>
                  </div>
                  <svg 
                    className="w-5 h-5 text-white absolute right-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 