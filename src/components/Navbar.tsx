'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            href="#skills" 
            onClick={(e) => handleHashClick(e, 'skills')}
            className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors elegant-border"
          >
            Expertise
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
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-3' : 'opacity-100 w-4'}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-secondary/10 shadow-sm">
          <div className="container mx-auto py-8 px-6 flex flex-col space-y-6">
            <a 
              href="#work" 
              onClick={(e) => handleHashClick(e, 'work')}
              className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleHashClick(e, 'about')}
              className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleHashClick(e, 'skills')}
              className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors"
            >
              Expertise
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleHashClick(e, 'pricing')}
              className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors"
            >
              Price
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleHashClick(e, 'contact')}
              className="text-sm uppercase tracking-widest font-sans hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 