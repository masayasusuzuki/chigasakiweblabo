import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="uppercase text-xs tracking-[0.2em] text-accent/80">About</span>
          <h2 className="text-3xl md:text-4xl font-light mt-2 mb-3">
            "茅ヶ崎のホームページ屋さん"って？
          </h2>
          <div className="h-px w-16 bg-accent/30 mx-auto mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-foreground/80 mb-4 leading-relaxed font-light">
              茅ヶ崎市を拠点に、ホームページ制作・Webデザイン・動画制作を行っております。
            </p>
            
            <p className="text-foreground/80 mb-4 leading-relaxed font-light">
              地元のお店や個人事業主の方々に寄り添い、見やすく・伝わりやすいデザインをご提案しています。
            </p>
            
            <p className="text-foreground/80 mb-6 leading-relaxed font-light">
              小さなご相談からでも、お気軽にお問い合わせください。
            </p>
            
            <div className="border-t border-gray-200 pt-6 grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-3xl font-light mb-1 font-sans tracking-tighter">
                  <span className="font-sans font-medium">50</span>
                  <span className="text-accent">+</span>
                </h3>
                <p className="text-xs uppercase tracking-wider opacity-70">制作実績</p>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-1 font-sans tracking-tighter">
                  <span className="font-sans font-medium">8</span>
                  <span className="text-accent">+</span>
                </h3>
                <p className="text-xs uppercase tracking-wider opacity-70">業界経験</p>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-1 font-sans tracking-tighter">
                  <span className="font-sans font-medium">100</span>
                  <span className="text-accent">%</span>
                </h3>
                <p className="text-xs uppercase tracking-wider opacity-70">顧客満足度</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden">
              <div className="relative h-[400px] w-full overflow-hidden flex flex-col justify-center items-center rounded-2xl">
                <div className="relative w-[300px] h-[300px] overflow-hidden">
                  <img 
                    src="/images/icon.png" 
                    alt="茅ヶ崎のホームページ屋さん" 
                    className="w-full h-full object-contain"
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