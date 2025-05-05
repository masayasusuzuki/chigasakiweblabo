'use client';

import { motion } from 'framer-motion';

// スキルデータの定義
const skills = [
  {
    category: "Webサイト制作",
    description: "お客様の要望に合わせた、見やすく使いやすいWebサイトを制作します。スマホ対応も万全です。",
    items: [
      { name: "React", level: 90, description: "高度なインタラクティブサイト開発" },
      { name: "Next.js", level: 85, description: "高速で検索に強いサイト構築" },
      { name: "HTML/CSS", level: 95, description: "Webサイトの基本構造とデザイン" },
      { name: "JavaScript", level: 90, description: "動きのある機能実装" },
      { name: "レスポンシブデザイン", level: 95, description: "スマホ・タブレット対応" },
      { name: "Tailwind CSS", level: 90, description: "効率的なスタイリング" },
    ]
  },
  {
    category: "UI/UXデザイン",
    description: "見た目の美しさだけでなく、使いやすさを重視したデザインで、お客様のビジネスを支援します。",
    items: [
      { name: "Figma", level: 95, description: "最新デザインツールの活用" },
      { name: "Adobe XD", level: 90, description: "プロトタイプ作成" },
      { name: "ワイヤーフレーム設計", level: 90, description: "使いやすい画面設計" },
      { name: "プロトタイピング", level: 95, description: "事前の操作性確認" },
      { name: "ユーザーテスト", level: 80, description: "実際の使いやすさ検証" },
      { name: "アクセシビリティ", level: 85, description: "誰もが使いやすい配慮" },
    ]
  },
  {
    category: "動画制作",
    description: "印象に残る映像制作で、お客様の商品やサービスの魅力を最大限に引き出します。",
    items: [
      { name: "Adobe Premiere Pro", level: 90, description: "プロ仕様の映像編集" },
      { name: "After Effects", level: 85, description: "特殊効果とモーション" },
      { name: "DaVinci Resolve", level: 80, description: "高品質な色調補正" },
      { name: "動画撮影", level: 85, description: "魅力的な映像撮影" },
      { name: "カラーグレーディング", level: 85, description: "映像の色味調整" },
      { name: "モーショングラフィックス", level: 80, description: "文字や図形のアニメーション" },
    ]
  }
];

// レベルの説明を関数化
const getLevelDescription = (level: number) => {
  if (level >= 90) return "経験豊富";
  if (level >= 80) return "得意分野";
  if (level >= 70) return "実務レベル";
  return "基本スキル";
};

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

const SkillsSection = () => {
  return (
    <>
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">開発・制作スキル</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-3 gradient-text">{skillGroup.category}</h3>
                <p className="text-sm text-gray-600 mb-6">{skillGroup.description}</p>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-accent">{getLevelDescription(skill.level)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{skill.description}</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50 font-serif">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">料金プラン</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-serif text-justify md:text-center">
              お客様のニーズや予算に合わせた柔軟なプランをご用意しています。<br />
              どのプランも高品質なサービスを提供いたします。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.recommended ? 'ring-2 ring-accent' : 'border border-gray-100'} font-serif relative`}
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
            <p className="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto font-serif text-justify md:text-center">
              ※すべてのプランには、企画・デザイン・コーディング・公開設定が含まれます。
              サイトの規模や機能によって料金が変動する場合がございます。
              詳細はお問い合わせください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection; 