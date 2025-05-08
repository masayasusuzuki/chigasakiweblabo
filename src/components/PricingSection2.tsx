import Image from "next/image"
import { Mail, Calculator } from "lucide-react"
import Link from "next/link"

export default function PricingSection2() {
  return (
    <section 
      className="w-full py-12 md:py-24 lg:py-32 font-sans relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/f8d2f073-db22-402f-9379-c51ff86f4700/public")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backgroundBlendMode: 'soft-light'
      }}
    >
      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center md:text-left">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 mx-auto md:mx-0">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter leading-tight">
                <div className="flex flex-col md:flex-row md:items-baseline mb-3 justify-center md:justify-start space-y-4 md:space-y-0">
                  <span className="text-5xl text-red-600 md:text-6xl md:text-black inline-block md:mr-2">
                    初期費用0円
                  </span>
                  <span className="text-3xl inline-block">
                    ではじめられる
                  </span>
                </div>
                <div className="text-xl md:text-3xl bg-primary text-white inline-block px-3 py-1 rounded-md">
                  茅ヶ崎のお店専門のホームページ制作
                </div>
              </h1>

              <div className="flex items-center space-x-2 mt-8 justify-center md:justify-start">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col">
                    <p className="text-xl font-medium">初期費用</p>
                    <div className="h-1 bg-red-600 mt-1 mb-2" style={{ width: "100%" }}></div>
                  </div>
                  <div className="flex items-baseline">
                    <span
                      className="text-7xl font-black text-red-600"
                      style={{
                        fontFamily: "'Impact', 'Arial Black', sans-serif",
                        letterSpacing: "-0.03em",
                        fontSize: "5.85rem"
                      }}
                    >
                      0
                    </span>
                    <span className="text-xl md:text-2xl ml-4 text-red-600 font-bold">円</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-6 justify-center md:justify-start">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-xl font-medium">月額</p>
                    <div className="h-1 bg-red-600 mt-1 mb-2 mx-auto md:mx-0" style={{ width: "2.5rem" }}></div>
                  </div>
                  <div className="flex items-baseline">
                    <span
                      className="text-6xl md:text-7xl font-black text-red-600"
                      style={{
                        fontFamily: "'Impact', 'Arial Black', sans-serif",
                        letterSpacing: "0.05em",
                        fontSize: "clamp(4.5rem, 5vw, 5.85rem)"
                      }}
                    >
                      9,800
                    </span>
                    <span className="text-xl md:text-2xl ml-4 text-red-600 font-bold">円〜</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-start mt-12">
                <Link href="#pricing" className="px-8 py-4 text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  <span className="text-base font-bold">料金の詳細を見る</span>
                </Link>
              </div>
            </div>

            <div className="space-y-0">
              <p className="text-xs md:text-xl text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">月額9,800円～の定額制で、写真や文章の相談まで一緒に。</p>
              <p className="text-xs md:text-xl text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis mt-0 md:mt-4">
                必要な機能だけ、少しずつ加えていける柔軟な仕組みにしています。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mx-auto md:mx-0">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/4317af8c-a474-4956-6437-39fb4195a200/public"
                  alt="飲食店ホームページの例"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/a3df7066-4d73-4912-c405-c0e583ec2d00/public"
                  alt="飲食店ホームページの例"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/8ae2f421-d3ac-4c5b-f27c-1ba40a3d9e00/public"
                  alt="飲食店ホームページの例"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/6c53d238-1bb0-4599-2175-a26c1f524700/public"
                  alt="飲食店ホームページの例"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/994fb908-2dcb-4161-dad5-e26af68f8c00/public"
                  alt="飲食店ホームページの例"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://imagedelivery.net/NAaL_-q_p_bxlVdCND_Iag/8a1ad075-d8a9-4267-d41f-f3ba1a790500/public"
                  alt="飲食店ホームページの例"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 