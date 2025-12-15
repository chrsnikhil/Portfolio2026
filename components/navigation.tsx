import { MousePointer2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanyard } from "@/components/lanyard-context"

export function Navigation() {
  const { toggleLanyard, triggerBounce } = useLanyard()
  return (
    <div className="container mx-auto px-4 pt-8 pb-4 relative z-50 animate-in slide-in-from-top-full duration-1000 ease-out">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 group cursor-pointer hover:rotate-12 transition-transform duration-300">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[18px] font-bold leading-[20px] hover:scale-110 transition-transform duration-200">
            Home
          </a>
          <a href="#about" className="text-[18px] font-bold leading-[20px] hover:scale-110 transition-transform duration-200">
            About
          </a>
          <a href="#projects" className="text-[18px] font-bold leading-[20px] hover:scale-110 transition-transform duration-200">
            Projects
          </a>
          <a href="#achievements" className="text-[18px] font-bold leading-[20px] hover:scale-110 transition-transform duration-200">
            Achievements
          </a>
        </div>

        <Button
          className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0 hover:scale-105 transition-transform duration-200"
          onClick={() => triggerBounce()}
        >
          <MousePointer2 className="w-10 h-10" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
