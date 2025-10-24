"use client"
{/*use client를 붙이면 client side rendering이 됨, 그러면 client가 완성시키기에 onClick같은 이벤트 발생이 가능
  저걸 안 붙이면 server side rendering이 되어 완성시켜서 client에게 주어야하기에 이벤트 발생이 불가능*/}

import SectionBox from "../components/SectionBox";
import Logo from "../components/Image";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl p-6">
        {/* 공용 섹션 박스 - 어떤 정적 페이지에도 쉽게 재사용 */}
          <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
          {/* 타이틀 */}
            <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Portfolio &amp; Skills
            </h1>

          {/* 보조 설명 */}
            <p className="mx-auto mt-3 max-w-3xl text-center text-lg md:text-xl text-gray-600 leading-relaxed">
              A showcase of my technic and projects experience that I've built with passion
            </p>
          </section>
        <SectionBox title="About me">
          <p className="text-sm text-gray-600">
            <h1>I am a Full-Stack Developer</h1>
            <div className = "mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <button
              className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
              onClick={() => alert("GitHub")}
            >
              GitHub
            </button>
            <button
              className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
              onClick={() => alert("LinkedIn")}
            >
             LinkedIn
            </button>
            </div>
          </p>
        </SectionBox>
        <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-8">
          {/* 타이틀 */}
            <h2 className="col-span-full text-center my-6 text-6xl md:text-5xl font-extrabold text-gray-900">
              Technical Skills
            </h2>
        </section>
        <section className="mx-auto w-full">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <SectionBox className="h-full" title="Java">
            <Logo src="/logo/java.svg" title="Java" alt ="Java"/>
          </SectionBox>
          <SectionBox className="h-full" title="HTML">
            <Logo src="/logo/html.svg" title="HTML" alt ="HTML"/>
          </SectionBox>
          <SectionBox className="h-full" title="CSS">
            <Logo src="/logo/css.svg" title="CSS" alt ="CSS"/>
          </SectionBox>
          <SectionBox className="h-full" title="JavaScript">
            <Logo src="/logo/JS.svg" title="JavaScript" alt ="JavaScript"/>
          </SectionBox>
          <SectionBox className="h-full" title="Node.js">
            <Logo src="/logo/node.svg" title="Node.js" alt ="Node.js"/>
          </SectionBox>
          <SectionBox className="h-full" title="Spring">
            <Logo src="/logo/spring.svg" title="Spring" alt ="Spring"/>
          </SectionBox>
          <SectionBox className="h-full" title="Next.js">
            <Logo src="/logo/next.svg" title="Next.js" alt ="Next.js"/>
          </SectionBox>
        </div>
      </section>
      </main>
    </> 
  );
}
