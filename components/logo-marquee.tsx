import { SiSui, SiBitcoin, SiEthereum, SiNextdotjs } from "react-icons/si";
import { FaLaptopCode, FaVideo, FaEdit } from "react-icons/fa";

export function LogoMarquee() {
  const items = [
    { label: "Sui", icon: SiSui },
    { label: "Bitcoin", icon: SiBitcoin },
    { label: "Ethereum", icon: SiEthereum },
    { label: "NextJS", icon: SiNextdotjs },
    { label: "Fullstack Development", icon: FaLaptopCode },
    { label: "Editing", icon: FaEdit },
    { label: "VideoGraphy", icon: FaVideo },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <item.icon className="h-12 w-12" />
              <span className="text-3xl font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
