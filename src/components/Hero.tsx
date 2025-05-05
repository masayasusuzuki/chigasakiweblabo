'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // 繊細な粒子
    const particles: Array<{x: number, y: number, size: number, opacity: number, speed: number}> = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 60);
    
    // 粒子の生成
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    // アニメーション
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 背景のグラデーション（ごく薄いテクスチャ）
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(133, 113, 96, 0.02)');
      gradient.addColorStop(1, 'rgba(163, 124, 100, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 粒子を描画
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(163, 124, 100, ${particle.opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 緩やかな上昇
        particle.y -= particle.speed;
        
        // 画面上部に到達した場合、下部から再出現
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white/60">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/6933edb3-8db6-4873-d513-1dfee94dc000/public"
          alt="背景"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', mixBlendMode: 'soft-light' }}
          className="opacity-70"
          priority
        />
      </div>
      
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
      ></canvas>
      
      {/* 追加の装飾効果 */}
      <div className="absolute inset-0 z-0">
        <div className="w-64 h-64 absolute top-20 left-1/4 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="w-96 h-96 absolute bottom-20 right-1/4 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-20">
        <div className="max-w-3xl mx-auto text-center p-6 sm:p-8 md:py-8 rounded-3xl backdrop-blur-sm bg-white/70">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6 leading-tight tracking-normal">
            あなたのお店にちょうどいい<br />
            <span className="text-accent">"まちのWeb屋さん"</span>です
          </h1>
          
          <div className="h-px w-16 bg-accent/30 mx-auto mb-6"></div>
          
          <p className="text-sm md:text-base mb-10 opacity-90 font-normal max-w-2xl mx-auto leading-relaxed">
            美と機能性の調和を追求したデザインと、感情を揺さぶる映像制作を通して、
            お客様のビジネスの価値を最大限に引き出します。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
            <Link 
              href="/#work" 
              className="px-6 py-2.5 border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all text-foreground uppercase tracking-wider text-xs font-medium"
            >
              制作実績を見る
            </Link>
            <Link 
              href="/#contact" 
              className="px-6 py-2.5 bg-accent text-white hover:bg-accent/90 transition-all uppercase tracking-wider text-xs font-medium"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <span className="block text-xs uppercase tracking-widest mb-4 opacity-70">Scroll</span>
        <div className="w-px h-10 bg-foreground/20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero; 