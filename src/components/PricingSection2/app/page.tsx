import Image from "next/image"
import { Mail, Calculator } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter leading-relaxed">
                    <div className="flex flex-col mb-4">
                      <span className="text-6xl block mb-3" style={{ transform: "scale(1.1)" }}>
                        初期費用0円
                      </span>
                      <span className="text-4xl">ではじめられる</span>
                    </div>
                    茅ヶ崎のお店専門のホームページ制作
                  </h1>

                  <div className="flex items-center space-x-2 mt-8">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col">
                        <p className="text-2xl font-medium">初期費用</p>
                        <div className="h-1 bg-red-600 mt-1 mb-2" style={{ width: "100%" }}></div>
                      </div>
                      <div className="flex items-baseline">
                        <span
                          className="text-7xl font-black text-red-600"
                          style={{
                            transform: "scaleY(1.3)",
                            textShadow: "1px 0 0 #dc2626",
                          }}
                        >
                          0
                        </span>
                        <span className="text-3xl ml-2 text-red-600 font-bold">円</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-6">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col">
                        <p className="text-2xl font-medium">月額</p>
                        <div className="h-1 bg-red-600 mt-1 mb-2" style={{ width: "3.5rem" }}></div>
                      </div>
                      <div className="flex items-baseline">
                        <span
                          className="text-7xl font-black text-red-600"
                          style={{
                            transform: "scaleY(1.3)",
                            textShadow: "1px 0 0 #dc2626",
                          }}
                        >
                          9,800
                        </span>
                        <span className="text-3xl ml-2 text-red-600 font-bold">円〜</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <button className="px-8 py-4 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center">
                      <Mail className="mr-2 h-5 w-5" />
                      <span className="text-lg font-bold">無料で相談してみる</span>
                    </button>
                    <button className="px-8 py-4 text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center">
                      <Calculator className="mr-2 h-5 w-5" />
                      <span className="text-lg font-bold">料金の詳細を見る</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700">月額9,800円～の定額制で、写真や文章の相談まで一緒に。</p>
                  <p className="text-lg text-gray-700">
                    必要な機能だけ、少しずつ加えていける柔軟な仕組みにしています。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
      </main>
    </div>
  )
}
