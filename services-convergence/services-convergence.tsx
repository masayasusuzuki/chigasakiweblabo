import type React from "react"
import { ArrowDown, Globe, Code, Video, MessageSquare, Layers } from "lucide-react"

export default function ServicesConvergence() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <div className="max-w-5xl w-full">
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <ServiceCard
            title="Web App Development"
            icon={<Code className="h-10 w-10" />}
            description="Custom web applications"
            gradient="from-blue-500 to-blue-600"
          />
          <ServiceCard
            title="Website Creation"
            icon={<Globe className="h-10 w-10" />}
            description="Professional websites"
            gradient="from-violet-500 to-purple-600"
          />
          <ServiceCard
            title="Video Production"
            icon={<Video className="h-10 w-10" />}
            description="High-quality videos"
            gradient="from-rose-500 to-red-600"
          />
          <ServiceCard
            title="LINE Integration"
            icon={<MessageSquare className="h-10 w-10" />}
            description="Seamless LINE support"
            gradient="from-emerald-500 to-green-600"
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
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl shadow-2xl p-10 text-center w-full max-w-2xl transform transition-all duration-300 hover:shadow-blue-900/20 hover:scale-[1.02]">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-4 rounded-full">
                <Layers className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold tracking-tight mb-4">ALL-IN-ONE</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mb-6"></div>
            <p className="text-slate-300 text-xl">Comprehensive Digital Solutions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Service Card Component
function ServiceCard({
  title,
  icon,
  description,
  gradient,
}: {
  title: string
  icon: React.ReactNode
  description: string
  gradient: string
}) {
  return (
    <div
      className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
    >
      <div className={`bg-gradient-to-r ${gradient} p-6 flex justify-center`}>
        <div className="text-white">{icon}</div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}
