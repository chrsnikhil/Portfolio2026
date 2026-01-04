import { Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto gap-12 items-center">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Chris Nikhil</span>, a Web Developer from{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Chennai</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Passionate about crafting intuitive and visually stunning digital experiences. I turn complex ideas into user-friendly designs that live on the web.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a href="/Chris%20Nikhil%20Resume.pdf" download="Chris Nikhil Resume.pdf" className="w-full sm:w-auto">
              <Button className="bg-[#0B0B0B] text-white hover:bg-[#0B0B0B] rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
            <a href="https://github.com/chrsnikhil" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-white rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                <Github className="w-5 h-5" />
                View Github
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
