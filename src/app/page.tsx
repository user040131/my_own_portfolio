// 1. next/navigation의 useRouter로 JS/TS식 라우팅 활용
"use client"
import { useRouter } from "next/navigation"
import { useState } from "react";
import CardContainer from "./components/CardContainer";

const svgLogo = [
  "public/logo/java.svg",
  "public/logo/JS.svg",
  "public/logo/html.svg",
  "public/logo/css.svg",
  "public/logo/next.svg",
  "public/logo/spring.svg",
  "public/logo/node.svg",
]

export default function HomePage() {
  const router = useRouter();

  const goTo = (path: string) => {
      router.push(path);
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <CardContainer>
        {/* 헤더 한 줄: 좌측 버튼 + 우측 네비 */}
  <header className="flex items-center justify-between px-6 pb-4 pt-0">
    {/* 왼쪽 동그란 버튼 */}
    <div
      aria-label="Go to main"
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-400"
    />

    {/* 오른쪽 네비 */}
    <nav aria-label="Primary">
      <ul className="flex items-center gap-10">
        <li><a href="/portfolio"   className="text-gray-700 hover:underline font-medium">Portfolio</a></li>
        <li><a href="/blog"        className="text-gray-700 hover:underline font-medium">Blog</a></li>
        <li><a href="/mini-game"   className="text-gray-700 hover:underline font-medium">MiniGame</a></li>
        <li><a href="/playground"  className="text-gray-700 hover:underline font-medium">PlayGround</a></li>
      </ul>
    </nav>
  </header>

        {/* 메인 컨텐츠 */}
        <div className="flex gap-12 items-center">
          {/* Left: 인삿말 & 설명 */}
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Hello, I am <br />
              a Full-Stack Developer
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              I create efficient and scalable <br />
              software solutions.
            </p>
          </div>
          {/* Right: 아이콘(혹은 이미지) 박스 */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#3976e7] rounded-xl w-[300px] h-[200px] flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 100 110" fill="none">
                <path d="M35,50 L25,60 L35,70" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M65,50 L75,60 L65,70" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M45,80 L55,40" stroke="white" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* 하단 Featured Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="flex gap-6">
            {/* Project 카드(샘플 두 개) */}
            <div className="bg-gray-100 rounded-xl h-20 flex-1 flex items-center justify-center opacity-70">
              {/* 샘플용 Gray bar */}
              <div className="w-4/5 h-3 rounded-full bg-gray-300"/>
            </div>
            <div className="bg-gray-100 rounded-xl h-20 flex-1 flex items-center justify-center opacity-70">
              <div className="w-4/5 h-3 rounded-full bg-gray-300"/>
            </div>
          </div>
        </div>
    </CardContainer>
  );
}

