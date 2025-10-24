import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
};

export default function logoImage({ src, alt, title }: Props){
    return (
         <div className="flex items-center gap-4">
      {/* 아이콘 슬롯: 모두 같은 크기로 통일 */}
      <div className="relative size-14 md:size-16 shrink-0">
        <Image
          src={src}
          alt={alt ?? `${title} logo`}  // alt는 반드시 문자열
          fill                           // 부모(Box)의 크기를 꽉 채움
          sizes="64px"
          className="object-contain"     // 비율 유지, 잘리지 않음
          priority={false}
        />
      </div>
    </div>
    )
}