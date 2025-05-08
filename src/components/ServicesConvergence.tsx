import React from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

const ServicesConvergence = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-20">
          <div className="relative inline-block mb-4 md:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-slate-900 leading-tight">
              まるごと<span className="text-accent">、おまかせ</span>ください
            </h2>
            
            {/* 装飾的な下線 */}
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-stone-400 to-orange-300 rounded-full"></div>
          </div>
          
          <p className="text-base opacity-80 max-w-2xl mx-auto font-medium mb-8 hidden md:block">
            ホームページ制作から、写真撮影・仕組みづくりまで。<br />
            <span className="font-medium text-accent">お店に必要なこと、なんでもご相談</span>
            いただけます。
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto w-full">
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16">
            <ServiceCard
              title="ホームページ制作"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/8f6ec41f-d379-4527-ea38-35cf0b4b8700/public"
              description="見た人に「ここ、行ってみたい」と思ってもらえるように。スマホ対応はもちろん、写真の配置や導線も工夫して、お店の魅力をわかりやすく伝えます。"
            />
            <ServiceCard
              title="写真撮影・動画制作"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/3a864ae0-c9bd-4c12-9768-ab083321e300/public"
              description="店内の雰囲気やメニューの魅力をしっかりと伝えるために、プロカメラマンが写真撮影から、必要に応じて動画まで対応します。「映える」ではなく、「伝わる」ビジュアルを。"
            />
            <ServiceCard
              title="業務効率化・予約システム"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/c9b4c811-f9f6-438e-5dc8-0241e50c6e00/public"
              description="予約、リピート、LINE連携、メニュー更新など。日々の業務がラクになるよう、「こうできたら便利だな」を一緒に仕組みにします。"
            />
            <ServiceCard
              title="LINE公式アカウント連携"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/55d01f89-0022-4a3e-adeb-86124734d600/public"
              description="クーポン配信・予約通知・お知らせなど、お客さまと「つながる窓口」をつくります。LINEの初期設定から、使い方のサポート・メンテナンスまで対応します。"
            />
          </div>

          {/* Converging Arrows */}
          <div className="flex justify-center mb-16 relative">
            <div className="w-full max-w-md h-24 relative">
              {/* Left Arrow */}
              <div className="absolute left-0 top-1/2 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-slate-400"></div>
              <div className="absolute left-1/3 top-0 w-0.5 h-1/2 bg-gradient-to-b from-transparent to-slate-400"></div>

              {/* Right Arrow */}
              <div className="absolute right-0 top-1/2 w-1/3 h-0.5 bg-gradient-to-l from-green-500 to-slate-400"></div>
              <div className="absolute right-1/3 top-0 w-0.5 h-1/2 bg-gradient-to-b from-transparent to-slate-400"></div>

              {/* Center Arrow */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-slate-300 to-slate-600"></div>

              {/* Arrow Head */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex justify-center">
                <ArrowDown className="h-8 w-8 text-slate-600" />
              </div>
            </div>
          </div>

          {/* All-in-One Solution */}
          <div className="flex justify-center">
            <div className="bg-white text-slate-800 rounded-xl shadow-xl p-10 text-center w-full max-w-2xl transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="flex justify-center mb-8">
                <Image 
                  src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/dd57a2bd-c834-46b0-b544-9d11b467a100/public" 
                  alt="All-in-One" 
                  width={144}
                  height={144}
                  className="h-36 w-auto"
                />
              </div>
              <h2 className="text-2xl tracking-tight mb-4 font-serif hidden md:block">まるっと、全部おまかせください</h2>
              <h2 className="text-2xl tracking-tight mb-4 font-serif md:hidden">
                まるっと、全部<br />
                おまかせください
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-slate-700 text-lg font-serif font-medium leading-relaxed text-left text-justify hidden md:block">ホームページ制作、動画編集、LINE連携、予約システムなど、お店やビジネスに必要な「デジタルまわり」を、まるごと対応します。窓口が一つだから、やりとりがスムーズで、納期も無駄なく進みます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Service Card Component
function ServiceCard({
  title,
  imageUrl,
  description,
}: {
  title: string
  imageUrl: string
  description: string
}) {
  return (
    <div
      className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105 group"
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 text-center">{title}</h3>
        <p className="text-slate-600 text-sm font-medium leading-relaxed text-justify">{description}</p>
      </div>
    </div>
  )
}

export default ServicesConvergence; 