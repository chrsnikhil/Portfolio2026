import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About me illustration" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why do I <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">do all of this?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              I believe in the power of decentralization to reshape digital ownership and interaction.
              Building transparent, permissionless, and efficient systems isn't just about code—it's about
              crafting the infrastructure for the next generation of the internet.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Web3 & Fullstack Expert</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Building comprehensive solutions that bridge the gap between traditional web technologies and decentralized protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Smart Contract Specialist</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Specialized in writing secure smart contracts in <span className="font-bold">Solidity</span> and <span className="font-bold">Move</span> for complex DeFi and volatility index systems.
                </p>
              </div>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/chris-nikhil-6883ba290/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#0B0B0B] text-white hover:bg-[#0B0B0B] rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
