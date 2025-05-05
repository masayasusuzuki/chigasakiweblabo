'use client';

import React from 'react';

const VideoSection = () => {
  return (
    <section className="pt-16 pb-4 md:pb-8 bg-white relative overflow-hidden">
      {/* カラフルな背景要素 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-stone-200 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-orange-100 rounded-full blur-2xl -z-10 animate-pulse"></div>
      
      {/* 装飾的な形 */}
      <div className="absolute top-12 right-12 w-8 h-8 bg-amber-300 rounded-full animate-float"></div>
      <div className="absolute bottom-24 left-16 w-6 h-6 bg-stone-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* タイトルセクション - シンプルに */}
          <div className="text-center mb-12 opacity-0 animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 relative inline-block">
              動画でお店の魅力を
              <span className="text-accent font-bold relative">
                &ldquo;見える化&rdquo;
                <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-amber-300" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q20,30 40,50 Q60,70 80,50 Q95,35 100,50" stroke="currentColor" strokeWidth="12" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-sm md:text-base max-w-2xl mx-auto mb-8 md:text-center text-justify md:text-left">
              写真だけでは伝わらない雰囲気や商品の魅力を、動画なら効果的に伝えることができます。
              お客様の心を動かす映像制作で、あなたのビジネスの価値を最大限に引き出します。
            </p>
            
            <div className="h-1.5 w-24 bg-gradient-to-r from-amber-400 via-stone-400 to-orange-300 rounded-full mx-auto"></div>
          </div>
          
          {/* 動画表示部分 */}
          <div className="relative max-w-4xl mx-auto mb-12 opacity-0 animate-fadeInScale">
            {/* 動画の装飾フレーム */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-200 via-stone-300 to-orange-200 rounded-2xl blur-sm -z-10"></div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white p-2">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/IU-c52arQIY" 
                  title="動画制作サンプル" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* シンプルなメッセージ部分 */}
          <div className="flex justify-center opacity-0 animate-fadeIn hidden md:flex" style={{animationDelay: '0.5s'}}>
            <div className="bg-gradient-to-r from-amber-50 via-white to-stone-50 text-center px-8 py-5 rounded-2xl shadow-md border border-stone-100 max-w-3xl">
              <p className="text-base">
                ホームページに動画を組み込むことで、お店の魅力をより効果的に伝えることができます。
              </p>
              <p className="text-sm mt-2 text-gray-600">
                撮影から編集、サイトへの組み込みまで一貫して対応いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 