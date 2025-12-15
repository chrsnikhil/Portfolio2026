import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Sep 2025",
      title: "ETH New Delhi Winner",
      description:
        "Won Best Use of World Mini Kit for building a decentralized Airbnb platform. Enabled gasless authentication and verifiable identity for hosts and guests.",
      icon: "https://github.com/ethglobal.png",
    },
    {
      period: "Oct 2025",
      title: "ETH Online Winner",
      description:
        "Won Best Vincent App for ViVault, an automated asset rebalancing system powered by our proprietary volatility index. Optimized for risk-adjusted returns.",
      icon: "https://github.com/ethglobal.png",
    },
    {
      period: "May 2025",
      title: "Google Advanced Data Analytics",
      description:
        "Completed the rigorous certification covering Python, SQL, Tableau, and Machine Learning. Analyzed blockchain datasets to predict DeFi market trends.",
      icon: "https://img.icons8.com/color/480/google-logo.png",
    },
    {
      period: "Nov 2025",
      title: "X Spaces Presentation",
      description:
        "Presented ViVault to Vincent Stakeholders on X Spaces. Successfully demonstrated our in-house volatility index and asset rebalancing strategy to 500+ listeners.",
      icon: "https://img.icons8.com/ios-filled/500/twitterx--v1.png",
    },
  ]

  return (
    <section id="achievements" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">achievements</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              A track record of building, shipping, and securing decentralized applications. From hackathon wins to auditing protocols.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <FileText className="w-5 h-5" />
              See full resume
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 object-contain p-2"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
