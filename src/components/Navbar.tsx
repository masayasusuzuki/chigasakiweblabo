'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // コンポーネントがマウントされたことを確認
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ハッシュリンクをクリックしたときの処理
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // モバイルメニューを閉じる
    setIsMobileMenuOpen(false);
    // 対象の要素にスクロール
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // URLのハッシュを更新（ヒストリー追加なし）
      window.history.replaceState(null, '', `/#${id}`);
    }
  };

  // SSRでのレンダリング時はメニューを閉じておく
  if (!isMounted) {
    return (
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-secondary/10 py-3 shadow-sm transition-all duration-500"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.png" 
              alt="茅ヶ崎のホームページ屋さんロゴ" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-sans font-medium tracking-wider">茅ヶ崎のホームページ屋さん</span>
          </Link>
          <div className="md:hidden w-10 h-10"></div>
        </div>
      </header>
    );
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-secondary/10 py-3 shadow-sm transition-all duration-500"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/logo.png" 
            alt="茅ヶ崎のホームページ屋さんロゴ" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-sans font-medium tracking-wider">茅ヶ崎のホームページ屋さん</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <a 
            href="#work" 
            onClick={(e) => handleHashClick(e, 'work')}
            className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors elegant-border"
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleHashClick(e, 'about')}
            className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors elegant-border"
          >
            About
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleHashClick(e, 'pricing')}
            className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors elegant-border"
          >
            Price
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleHashClick(e, 'contact')}
            className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors elegant-border"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-center justify-center relative h-5">
            <span className={`absolute h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 top-1/2 -translate-y-1/2' : 'w-6 top-0'}`} />
            <span className={`absolute h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-6' : 'opacity-100 w-5 top-1/2 -translate-y-1/2'}`} />
            <span className={`absolute h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 top-1/2 -translate-y-1/2' : 'w-6 bottom-0'}`} />
          </div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-secondary/10 shadow-sm">
          <div className="container mx-auto pt-16 pb-10 px-8 flex flex-col space-y-8">
            <a 
              href="#work" 
              onClick={(e) => handleHashClick(e, 'work')}
              className="text-lg uppercase tracking-widest font-sans hover:text-accent transition-colors py-3 border-b border-gray-200 flex items-center justify-between"
            >
              Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleHashClick(e, 'about')}
              className="text-lg uppercase tracking-widest font-sans hover:text-accent transition-colors py-3 border-b border-gray-200 flex items-center justify-between"
            >
              About
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleHashClick(e, 'pricing')}
              className="text-lg uppercase tracking-widest font-sans hover:text-accent transition-colors py-3 border-b border-gray-200 flex items-center justify-between"
            >
              Price
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleHashClick(e, 'contact')}
              className="text-lg uppercase tracking-widest font-sans hover:text-accent transition-colors py-3 border-b border-gray-200 flex items-center justify-between"
            >
              Contact
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 