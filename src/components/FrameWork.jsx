import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { OrbitingCircles } from "./OrbitalPlanets";

export function FrameWork() {
  const CustomIcons = {
  aceternity: () => (
    <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold text-[12px] p-1 rounded-full">
      A
    </div>
  ),
  magicui: () => (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-[12px] p-1 rounded-full">
      M
    </div>
  ),
  lucide: () => (
    <svg
      className="text-black dark:text-white"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
};

  return (
    <div className="relative flex h-[12rem] w-full flex-col items-center justify-center overflow-hidden">
     <OrbitingCircles iconSize={40}>
  <SiHtml5 className="text-orange-500 text-[40px]" />
  <SiCss3 className="text-blue-600 text-[40px]" />
  <SiJavascript className="text-yellow-500 text-[40px]" />
  <SiReact className="text-cyan-400 text-[40px]" />
  <SiTailwindcss className="text-sky-400 text-[40px]" />
  <SiNextdotjs className="text-black dark:text-white text-[40px]" />
  <img src="/vite.svg" alt="Vite.dev" />
  <div className="text-[40px]">{CustomIcons.aceternity()}</div>
  <div className="text-[40px]">{CustomIcons.magicui()}</div>
  <div className="text-[40px]">{CustomIcons.lucide()}</div>
</OrbitingCircles>
     <OrbitingCircles iconSize={30} reverse={3} radius={100}>
  <SiHtml5 className="text-orange-500 text-[40px]" />
  <SiCss3 className="text-blue-600 text-[40px]" />
  <SiJavascript className="text-yellow-500 text-[40px]" />
  <SiReact className="text-cyan-400 text-[40px]" />
  <SiTailwindcss className="text-sky-400 text-[40px]" />
  <SiNextdotjs className="text-black dark:text-white text-[40px]" />
  <img src="/vite.svg" alt="Vite.dev" />
  <div className="text-[40px]">{CustomIcons.aceternity()}</div>
  <div className="text-[40px]">{CustomIcons.magicui()}</div>
  <div className="text-[40px]">{CustomIcons.lucide()}</div>
</OrbitingCircles>

    </div>
  );
}



