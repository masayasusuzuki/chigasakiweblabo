'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// Swiperのインポート - 必要なモジュールのみ
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// スタイルのインポート
import 'swiper/css';
import 'swiper/css/pagination';

// プロジェクトの型定義
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}

// 作品データ
const projects: Project[] = [
  {
    id: 1,
    title: "GOLD GRILL BURGER 様",
    description: "地元の食材を活かしたカフェのWebサイト。温かみのあるデザインで、来店を促すサイト設計を実現しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/4317af8c-a474-4956-6437-39fb4195a200/public",
    category: "website",
    url: "#"
  },
  {
    id: 2,
    title: "Salon de Lierre 様",
    description: "本格的なイタリア料理を提供するレストランのメニュー表。高級感と親しみやすさを両立させたデザインです。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/8a1ad075-d8a9-4267-d41f-f3ba1a790500/public",
    category: "website",
    url: "#"
  },
  {
    id: 3,
    title: "soil & dew 様",
    description: "美容室向けのオンライン予約システム開発。顧客管理と予約状況の一元管理ができるアプリケーションを実現しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/994fb908-2dcb-4161-dad5-e26af68f8c00/public",
    category: "app",
    url: "#"
  },
  {
    id: 4,
    title: "Trattoria Verde 様",
    description: "リフォーム会社向けのオンライン見積もりシステム。顧客が簡単に概算見積もりを取得できる機能を実装しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/8ae2f421-d3ac-4c5b-f27c-1ba40a3d9e00/public",
    category: "app",
    url: "#"
  },
  {
    id: 5,
    title: "muku café 様",
    description: "EC通販サイト向けの顧客専用マイページ機能。注文履歴やポイント管理など多機能なシステムを開発しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/a3df7066-4d73-4912-c405-c0e583ec2d00/public",
    category: "app",
    url: "#"
  },
  {
    id: 6,
    title: "波紋 様",
    description: "企業の特徴やサービスを効果的に伝えるパンフレットデザイン。読みやすさと視覚的な魅力を両立させた制作物です。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/6c53d238-1bb0-4599-2175-a26c1f524700/public",
    category: "video",
    url: "#"
  }
];

const WorkSection = () => {
  // クライアントサイドでのみSwiperを表示するための状態管理
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // 画面サイズの監視
  useEffect(() => {
    setMounted(true);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初期チェック
    checkIfMobile();
    
    // リサイズイベントの監視
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // プロジェクトカードのレンダリング
  const renderProjectCard = (project: Project) => (
    <div className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{objectFit: 'cover'}}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-sans mb-1">{project.title}</h3>
      </div>
    </div>
  );

  return (
    <section id="work" className="pt-4 md:pt-10 pb-8 md:pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="uppercase text-xs tracking-[0.2em] text-accent/80">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-light mt-2 md:mt-3 mb-3 md:mb-5">
            制作事例
          </h2>
          <div className="h-px w-16 bg-accent/30 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base opacity-80 max-w-xl mx-auto font-light hidden md:block">
            飲食店、美容室、サーフショップなど様々なお店の魅力を​<br/>
            最大限引き出すホームページを制作します。
          </p>
        </div>
        
        {/* モバイルの場合はSwiperを表示、PCの場合はグリッドを表示 */}
        {mounted && isMobile ? (
          <div className="mx-auto w-full relative pb-12">
            <p className="text-center text-sm text-foreground/70 mb-4">
              ◀︎▶︎ スライドで他の実績も見られます
            </p>
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                el: '.custom-pagination',
              }}
              grabCursor={true}
              className="mb-8"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="px-4">
                    {renderProjectCard(project)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* カスタムページネーション */}
            <div className="custom-pagination flex justify-center mt-6"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id}>
                {renderProjectCard(project)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection; 