import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6 md:mb-10">
          <span className="uppercase text-xs tracking-[0.2em] text-accent/80">About</span>
          <h2 className="text-3xl md:text-4xl font-light mt-2 mb-3">
            &ldquo;茅ヶ崎のホームページ屋さん&rdquo;って？
          </h2>
          <div className="h-px w-16 bg-accent/30 mx-auto mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-foreground/80 mb-4 leading-relaxed font-light">
              茅ヶ崎市を拠点に、店舗・個人事業主さま向けに<br/>
              ホームページ制作・Webデザイン・動画制作を行っています。
            </p>
            
            <p className="text-foreground/80 mb-4 leading-relaxed font-light">
              茅ヶ崎が大好きで、地元のお店の魅力を<br/>
              もっと多くの人に届けたいという思いから、<br/>
              <span className="font-mincho">2025</span>年<span className="font-mincho">5</span>月にこのサービスを立ち上げました。
            </p>
            
            <p className="text-foreground/80 mb-4 leading-relaxed font-light font-medium">
              【経歴】
            </p>
            <ul className="text-foreground/80 mb-6 leading-relaxed font-light list-disc pl-5">
              <li>動画制作・撮影歴：<span className="font-mincho">8</span>年（企業VP・YouTube・広告 など）</li>
              <li>Web制作／システム開発：<span className="font-mincho">2</span>年（Next.js・Photoshop・Figma など）</li>
            </ul>
            
            <p className="text-foreground/80 mb-3 leading-relaxed font-light">
              「自分のお店の魅力が、ちゃんと伝わる。」<br/>
              そんなサイトづくりを目指しています。
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed font-light">
              まずはお気軽にご相談ください。
            </p>
            
            <div className="border-t border-gray-200 pt-6 grid grid-cols-3 gap-4">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-light mb-1 tracking-tighter">
                  <span className="font-mincho font-medium">50</span>
                  <span className="text-accent">&nbsp;+</span>
                </h3>
                <p className="text-xs uppercase tracking-wider opacity-70">制作実績</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-light mb-1 tracking-tighter">
                  <span className="font-mincho font-medium">8</span>
                  <span className="text-accent">&nbsp;+</span>
                </h3>
                <p className="text-xs uppercase tracking-wider opacity-70">業界経験</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-light mb-1 tracking-tighter">
                  <span className="font-mincho font-medium">97</span>
                  <span className="text-accent">&nbsp;%</span>
                </h3>
                <p className="text-xs uppercase tracking-wider opacity-70">顧客満足度</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden">
              <div className="relative h-[400px] w-full overflow-hidden flex flex-col justify-center items-center rounded-2xl">
                <div className="relative w-[300px] h-[300px] overflow-hidden rounded-full">
                  <Image 
                    src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/cc5c4eba-f1e7-4a09-f993-f6ba465cf500/public" 
                    alt="茅ヶ崎のホームページ屋さん" 
                    className="w-full h-full object-cover rounded-full"
                    width={300}
                    height={300}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light mt-4">
                  代表：<span className="font-sans">Masayasu Suzuki</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 