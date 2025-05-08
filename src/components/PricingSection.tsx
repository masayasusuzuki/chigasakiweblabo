'use client';

import { motion } from 'framer-motion';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        {/* プランタイトル - 吹き出し形状に変更 */}
        <div className="text-center mb-6 md:mb-10 relative">
          <div className="bg-orange-500 text-white text-2xl md:text-3xl font-bold py-4 px-6 rounded-t-full rounded-bl-full rounded-br-full inline-block mb-2 relative">
            お好みで選べる3プラン
            {/* 吹き出しの矢印部分 */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[15px] border-l-transparent 
              border-r-[15px] border-r-transparent 
              border-t-[20px] border-t-orange-500">
            </div>
          </div>
          <div className="h-8"></div> {/* 吹き出しの矢印の下のスペース */}
        </div>

        {/* 料金プラン一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 max-w-6xl mx-auto">
          {/* スタートプラン */}
          <div className="border-2 md:border border-gray-200">
            <div className="bg-yellow-300 py-6 text-center">
              <h3 className="text-2xl font-bold">シンプルコース</h3>
              <p className="text-sm mt-2">1ページ構成で写真撮影・スマホ対応込み。<br />とにかく「ゼロから始める」をサポートします。</p>
            </div>

            <div className="bg-yellow-100 py-2 px-4 text-center">
              <p className="font-semibold">初期費用</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold">0円 <span className="text-sm text-gray-500">（税込み）</span></p>
            </div>

            <div className="bg-yellow-100 py-2 px-4 text-center">
              <p className="font-semibold">月額費用</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold">9,800円 <span className="text-sm text-gray-500">（税込み）</span></p>
            </div>

            <div className="px-6 py-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>お店への訪問・ヒアリング</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>写真撮影（約10カット目安）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>シンプルなホームページ制作（1ページ構成）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>スマートフォン対応</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>お問い合わせフォーム</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>営業時間・アクセス情報などの掲載</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>InstagramやGoogle Mapの埋め込み</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>管理画面（使い方のレクチャー含む）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>月1回までの軽微な修正対応</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>メッセージ相談（LINE・メール）対応</span>
                </li>
              </ul>
            </div>
          </div>

          {/* スタンダードプラン */}
          <div className="border-2 md:border border-gray-200 relative">
            {/* 添付画像に合わせたリボンデザイン */}
            <div className="absolute inset-x-0 top-0 -mt-4 flex justify-center">
              <div className="relative w-32 h-10">
                {/* リボン本体 */}
                <div className="absolute inset-0 bg-red-600 shadow-[0_0_10px_3px_rgba(255,255,150,0.5)] z-10"></div>
                {/* 左の三角形 */}
                <div className="absolute -left-3 top-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[12px] border-r-red-600 border-b-[10px] border-b-transparent z-10"></div>
                {/* 右の三角形 */}
                <div className="absolute -right-3 top-0 w-0 h-0 border-t-[10px] border-t-transparent border-l-[12px] border-l-red-600 border-b-[10px] border-b-transparent z-10"></div>
                {/* テキスト */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-base z-20 drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]">
                  一番人気
                </div>
              </div>
            </div>
            <div className="bg-orange-400 py-6 text-center">
              <h3 className="text-2xl font-bold">こだわりコース</h3>
              <p className="text-sm mt-2">ページ数やデザインにもこだわりながら、<br />お店の世界観に合ったホームページを一緒につくります。</p>
            </div>

            <div className="bg-orange-200 py-2 px-4 text-center">
              <p className="font-semibold">初期費用</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold">33,000円 <span className="text-sm text-gray-500">（税込み）</span></p>
            </div>

            <div className="bg-orange-200 py-2 px-4 text-center">
              <p className="font-semibold">月額費用</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold">9,800円 <span className="text-sm text-gray-500">（税込み）</span></p>
            </div>

            <div className="px-6 py-4">
              <p className="mb-2 font-bold">✅ スタートプランの全て ＋ 以下が加わります：</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>複数ページ対応（最大3ページ目安）<br />　└ 例：トップ／メニュー紹介／店舗情報 など</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>写真撮影のバリエーション強化（20カット目安）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>レイアウト・構成の個別提案</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>キャッチコピーや導線の相談</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>より柔軟なデザイン調整（フォント・色・配置）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>月2回までの修正対応</span>
                </li>
              </ul>
            </div>
          </div>

          {/* プレミアムプラン */}
          <div className="border-2 md:border border-gray-200">
            <div className="bg-teal-500 py-6 text-center">
              <h3 className="text-2xl font-bold text-white">プレミアムコース</h3>
              <p className="text-sm mt-2 text-white">写真・動画に加えて、LINEや予約機能なども対応可能。<br />仕組みから整える"本気の一歩"をサポートします。</p>
            </div>

            <div className="bg-teal-100 py-2 px-4 text-center">
              <p className="font-semibold">初期費用</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold">55,000円 <span className="text-sm text-gray-500">（税込み）</span></p>
            </div>

            <div className="bg-teal-100 py-2 px-4 text-center">
              <p className="font-semibold">月額費用</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold">9,800円 <span className="text-sm text-gray-500">（税込み）</span></p>
            </div>

            <div className="px-6 py-4">
              <p className="mb-2 font-bold">✅ スタンダードプランの全て ＋ 以下が加わります：</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>店舗紹介 or メニュー紹介の動画撮影・編集（30〜60秒想定）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>LINE公式アカウントの初期設定と導線設計</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>予約・問い合わせフォームのカスタマイズ（例：美容室や個別予約系）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>お知らせ更新ページ（ブログ形式）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>月3回までの修正対応</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>簡易アクセス解析（Google Analytics）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 