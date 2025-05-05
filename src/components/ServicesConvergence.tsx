import React from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

const ServicesConvergence = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-slate-900 leading-tight">
              まるごと<span className="text-accent">おまかせ</span>ください
            </h2>
            
            {/* 装飾的な下線 */}
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-stone-400 to-orange-300 rounded-full"></div>
          </div>
          
          <p className="text-base opacity-80 max-w-2xl mx-auto font-light mb-8">
            Webサイト制作から動画制作、アプリ開発まで、デジタルコンテンツに関わる
            <span className="font-medium text-accent">様々なサービスを一括して</span>
            ご提供します。
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto w-full">
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <ServiceCard
              title="アプリ開発"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/6f103ade-5ec0-40a3-b5af-d67dae289d00/public"
              description="業務効率化のための予約システムや顧客管理など、使いやすさと機能性を両立したWebアプリケーションをお作りします。"
            />
            <ServiceCard
              title="Webサイト制作"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/8f6ec41f-d379-4527-ea38-35cf0b4b8700/public"
              description="集客から成約までを意識した戦略的なWebサイト制作。スマホ対応・SEO対策で御社のWeb集客を強化いたします。"
            />
            <ServiceCard
              title="動画制作"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/10a49037-deb3-4b88-7451-56c8269f0200/public"
              description="商品やサービスの魅力を引き出す映像制作。SNS用短尺動画からプロモーション映像まで対応しております。"
            />
            <ServiceCard
              title="LINE構築"
              imageUrl="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/55d01f89-0022-4a3e-adeb-86124734d600/public"
              description="公式アカウント設計から予約システム連携まで、顧客関係強化につながるLINE活用をサポートいたします。"
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
              <h2 className="text-2xl tracking-tight mb-4 font-serif">まるっと、全部おまかせください</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-slate-700 text-lg font-serif leading-relaxed text-left text-justify">ホームページ制作、動画編集、LINE連携、予約システムなど、お店やビジネスに必要な「デジタルまわり」を、まるごと対応します。窓口が一つだから、やりとりがスムーズで、納期も無駄なく進みます。</p>
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
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed text-justify">{description}</p>
      </div>
    </div>
  )
}

export default ServicesConvergence; 