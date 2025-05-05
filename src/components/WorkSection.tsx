'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// 作品データ
const projects = [
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
    title: "レストランのメニュー表作成",
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
    title: "見積もり・オーダーフォーム作成",
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
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="uppercase text-xs tracking-[0.2em] text-accent/80">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-light mt-3 mb-5">
            過去の制作例
          </h2>
          <div className="h-px w-16 bg-accent/30 mx-auto mb-6"></div>
          <p className="text-base opacity-80 max-w-xl mx-auto font-light">
            Webサイト制作からアプリ開発、動画制作まで、お客様のニーズに合わせた
            さまざまな制作実績をご紹介します。
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 transition-all text-sm tracking-wider ${
                activeCategory === 'all' 
                  ? 'text-accent border-b border-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveCategory('website')}
              className={`px-5 py-2 transition-all text-sm tracking-wider ${
                activeCategory === 'website' 
                  ? 'text-accent border-b border-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Webサイト
            </button>
            <button
              onClick={() => setActiveCategory('app')}
              className={`px-5 py-2 transition-all text-sm tracking-wider ${
                activeCategory === 'app' 
                  ? 'text-accent border-b border-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              アプリ開発
            </button>
            <button
              onClick={() => setActiveCategory('video')}
              className={`px-5 py-2 transition-all text-sm tracking-wider ${
                activeCategory === 'video' 
                  ? 'text-accent border-b border-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              動画制作
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group"
            >
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
                <p className="text-foreground/70 text-sm font-light">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection; 