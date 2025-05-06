'use client';

import { motion } from 'framer-motion';

// 料金プランデータ
const pricingPlans = [
  {
    name: "シンプルプラン",
    price: "¥55,000",
    features: [
      "1ページ完結型のLP",
      "スマホ対応",
      "問い合わせフォーム付き"
    ],
    color: "from-blue-400 to-cyan-400",
    delay: 0.1
  },
  {
    name: "スタンダードプラン",
    price: "¥88,000",
    features: [
      "3〜5ページ",
      "店舗紹介・メニュー・アクセスなど基本構成",
      "SEO・SNS連携込み"
    ],
    color: "from-purple-400 to-pink-400",
    recommended: true,
    delay: 0.2
  },
  {
    name: "こだわりプラン",
    price: "¥132,000〜",
    features: [
      "動画埋め込み",
      "予約システム",
      "アプリ連携",
      "CMS導入など拡張対応可"
    ],
    color: "from-amber-400 to-orange-500",
    delay: 0.3
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">料金プラン</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-sans text-justify md:text-center">
            お客様のニーズや予算に合わせた柔軟なプランをご用意しています。<br />
            どのプランも高品質なサービスを提供いたします。
          </p>
        </div>

        {/* 期間限定キャンペーン */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative animate-pulse">
            {/* パルスエフェクト */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur-xl"></div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 py-6 px-4 md:px-8 rounded-xl shadow-lg relative">
              <div className="text-center">
                <p className="text-xl md:text-3xl font-bold mb-3 text-white tracking-wide">
                  期間限定キャンペーン実施中
                </p>
                <div className="bg-white/95 py-3 px-4 md:px-6 rounded-lg inline-block">
                  <p className="text-lg md:text-xl text-orange-800 leading-relaxed">
                    <span className="block text-base mb-1 md:inline md:mb-0">2025年5月30日まで</span>
                    <span className="block text-lg font-bold md:inline">全価格から10%オフ</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.recommended ? 'ring-2 ring-accent' : 'border border-gray-100'} font-sans relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.delay }}
              viewport={{ once: true }}
            >
              {plan.recommended && (
                <div className="absolute -right-8 top-7 bg-accent text-white text-sm font-medium py-1 px-10 transform rotate-45 shadow-md">
                  おすすめ
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-bold font-sans tracking-tighter">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">（税込）</span>
                </div>
                
                <div className={`h-1 w-20 bg-gradient-to-r ${plan.color} mb-6 rounded-full`}></div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto font-sans text-justify md:text-center">
            ※すべてのプランには、企画・デザイン・コーディング・公開設定が含まれます。
            サイトの規模や機能によって料金が変動する場合がございます。
            詳細はお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 