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
    title: "茅ヶ崎市のカフェ",
    description: "地元の食材を活かしたカフェのWebサイト。温かみのあるデザインで、来店を促すサイト設計を実現しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/27db2250-db4d-4e0b-dac8-c3ce2886fc00/public",
    category: "website",
    url: "#"
  },
  {
    id: 2,
    title: "メニュー表の制作",
    description: "本格的なイタリア料理を提供するレストランのメニュー表。高級感と親しみやすさを両立させたデザインです。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/fc0fb0b7-b622-4dba-11b8-a29f6e83b700/public",
    category: "website",
    url: "#"
  },
  {
    id: 3,
    title: "予約システム構築",
    description: "美容室向けのオンライン予約システム開発。顧客管理と予約状況の一元管理ができるアプリケーションを実現しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/35e91528-01b8-4bd7-9fa0-60ad9a499c00/public",
    category: "app",
    url: "#"
  },
  {
    id: 4,
    title: "見積もりフォーム作成",
    description: "リフォーム会社向けのオンライン見積もりシステム。顧客が簡単に概算見積もりを取得できる機能を実装しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/2c3a76cf-6849-4d1f-ae54-de08a4891a00/public",
    category: "app",
    url: "#"
  },
  {
    id: 5,
    title: "顧客マイページの実装",
    description: "EC通販サイト向けの顧客専用マイページ機能。注文履歴やポイント管理など多機能なシステムを開発しました。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/52843d6a-a009-472d-9243-4b5228d53800/public",
    category: "app",
    url: "#"
  },
  {
    id: 6,
    title: "パンフレット制作",
    description: "企業の特徴やサービスを効果的に伝えるパンフレットデザイン。読みやすさと視覚的な魅力を両立させた制作物です。",
    image: "https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/f59a16d5-de8a-473b-cb53-3e8518e0b000/public",
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
    <div className="group">
      <div className="relative overflow-hidden mb-5 shadow-sm">
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
      
      <div>
        <span className="text-xs uppercase tracking-wider text-accent/80">
          {project.category === 'website' && 'Webサイト'}
          {project.category === 'app' && 'アプリ開発'}
          {project.category === 'video' && '動画制作'}
        </span>
        <h3 className="text-xl font-light mt-2 mb-3">{project.title}</h3>
        <p className="text-foreground/70 text-sm font-light hidden md:block">{project.description}</p>
      </div>
    </div>
  );

  return (
    <section id="work" className="pt-12 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase text-xs tracking-[0.2em] text-accent/80">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-light mt-3 mb-5">
            過去の制作例
          </h2>
          <div className="h-px w-16 bg-accent/30 mx-auto mb-6"></div>
          <p className="text-base opacity-80 max-w-xl mx-auto font-light hidden md:block">
            Webサイト制作からアプリ開発、動画制作まで、お客様のニーズに合わせた
            さまざまな制作実績をご紹介します。
          </p>
        </div>
        
        {/* モバイルの場合はSwiperを表示、PCの場合はグリッドを表示 */}
        {mounted && isMobile ? (
          <div className="mx-auto w-full relative pb-12">
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