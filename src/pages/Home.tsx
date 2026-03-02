import React from 'react';
import { HeroSection, WhyDifferentSection } from '../components/home/HeroIntro';
import { NaturalVsChemicalSection, BrandStorySection, ProcessInterviewSection, RawMaterialsSection } from '../components/home/Features';
import { CertificatesSection } from '../components/home/Certificates';
import { ProductDetailsSection, PreorderSetsSection } from '../components/home/Products';
import { PrecautionsSection, ReviewsSection, PreorderBarSection, FAQSection, CertificateGallerySection } from '../components/home/Info';

export default function Home({ settings }: { settings: any }) {
  const naverFormUrl = "https://naver.me/GQG0bC9I";

  return (
    <div className="w-full pb-24 md:pb-0"> {/* Add padding bottom for sticky CTA on mobile */}
      {/* 1. Hero (가격 한정 후킹 + CTA) */}
      <HeroSection settings={settings} />

      {/* 2. 프리오더 핵심 요약 바(기간/배송/결제/가격 인상) */}
      <PreorderBarSection />

      {/* 3. 세트/가격(5개 세트 먼저) */}
      <PreorderSetsSection />

      {/* CTA After Sets */}
      <div className="bg-stone-50 pb-16 text-center">
        <a
          href={naverFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-colors shadow-lg text-lg"
        >
          가장 저렴할 때 구매하기
        </a>
      </div>

      {/* 4. 리뷰/후기(빠르게) */}
      <ReviewsSection />

      {/* CTA After Reviews */}
      <div className="bg-white pb-16 text-center">
        <a
          href={naverFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-colors shadow-lg text-lg"
        >
          프리오더 신청하기
        </a>
      </div>

      {/* 5. “왜 다른가” (기술/안전/염색/원단) */}
      <WhyDifferentSection settings={settings} />
      <NaturalVsChemicalSection settings={settings} />
      <RawMaterialsSection />
      <ProcessInterviewSection settings={settings} />

      {/* 6. 제품 디테일/색상/사이즈 */}
      <ProductDetailsSection settings={settings} />

      {/* 7. FAQ (결제/배송/취소/세탁) */}
      <PrecautionsSection settings={settings} />
      <FAQSection />

      {/* 8. 인증/스토리 (가장 아래로) */}
      <BrandStorySection settings={settings} />
      <CertificatesSection settings={settings} />
      <CertificateGallerySection />

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 md:hidden">
        <div className="text-center text-xs font-bold text-red-500 mb-2">
          마감일 D-16
        </div>
        <div className="flex gap-2">
          <a
            href="http://pf.kakao.com/_GlBqX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-2 bg-stone-100 text-stone-900 font-bold rounded-xl text-center flex items-center justify-center text-[13px] leading-tight border border-stone-300"
          >
            판매자에게<br />문의하기
          </a>
          <a
            href={naverFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] py-3 px-4 bg-stone-900 text-white font-bold rounded-xl text-center flex items-center justify-center text-[15px]"
          >
            첫 오픈가로 구매하기
          </a>
        </div>
      </div>
    </div>
  );
}
