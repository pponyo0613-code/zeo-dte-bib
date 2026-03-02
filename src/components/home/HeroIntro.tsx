import React from 'react';
import { motion } from 'motion/react';

export function HeroSection({ settings }: { settings: any }) {
  return (
    <section className="relative h-[calc(85vh+100px)] md:h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EB%A9%94%EC%9D%B8%EC%BB%B7.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-white font-medium leading-tight mb-6 whitespace-pre-line break-keep"
        >
          광고 없이 9시간{'\n'}1차 모집 완판.{'\n'}이번 프리오더가 가장 저렴합니다.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 inline-block bg-black/30 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20"
        >
          <p className="text-white font-medium text-lg md:text-xl">
            프리오더가 최대 개당 13,900원
          </p>
          <p className="text-stone-300 text-sm mt-1">종료 후 정상가: 17,900원 예정</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-bold rounded-full">OEKO-TEX Class 1</span>
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-bold rounded-full">GOTS(원재료)</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-stone-200 font-light mb-10 whitespace-pre-line break-keep space-y-2"
        >
          <p>프리오더 종료 후 정상가로 전환됩니다.</p>
          <p className="text-sm text-stone-400">신청: 네이버폼 / 결제: 무통장 / 배송: 4/13 시작(예정)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="https://naver.me/GQG0bC9I"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 md:px-10 md:py-5 text-white font-bold rounded-full transition-colors shadow-xl text-base md:text-lg border-2 border-transparent hover:bg-opacity-90"
            style={{ backgroundColor: settings.primaryColor }}
          >
            가장 저렴할 때 구매하기
          </a>
          <a
            href="https://www.threads.net/@be_left_angel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full transition-colors shadow-xl text-base md:text-lg border-2 border-white/30 hover:bg-white/20"
          >
            스레드 보러가기
          </a>
        </motion.div>
      </div>
    </section>
  );
}


export function WhyDifferentSection({ settings }: { settings: any }) {
  return (
    <>

      {/* 2. Trust Block */}
      <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4 leading-tight whitespace-pre-line break-keep">
            9시간만에 완판된 이유
          </h2>
          <p className="text-lg md:text-xl text-stone-600 mb-12 whitespace-pre-line break-keep">
            아이들에게 유해한 건 0.01%도{'\n'}주고 싶지 않은{'\n'}대표자의 진심을 알아봐주신{'\n'}고마우신 분들이 계셨습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {[
              "1. 천연염색 물빠짐\n98%개선",
              "2. 피부 자극 최소화",
              "3. 오코텍스 클래스1\n인증의 안정성",
              "4. 천연염색으로 만들어낸\n파스텔 컬러의 감성"
            ].map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-3xl flex items-center justify-center min-h-[140px] shadow-sm border border-stone-100">
                <p className="text-lg font-medium text-stone-800 whitespace-pre-line break-keep">{item}</p>
              </div>
            ))}
          </div>
          <div className="inline-block border-b-2 border-stone-900 pb-2 mb-4">
            <p className="text-xl md:text-2xl font-bold text-stone-900">
              비리프엔젤에서만 가능합니다.
            </p>
          </div>
          <p className="text-stone-500 font-medium">첫 오픈가 종료 후 정상가로 전환됩니다.</p>
        </div>
      </section>

      {/* 3. Empathy Block */}
      <section className="py-24 md:py-32 bg-stone-50 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-12 md:mb-16 leading-tight">
            천연염색,{'\n'}좋다는 건 알죠.{'\n'}그런데…
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-stone-600 font-medium text-left max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <p className="whitespace-pre-line break-keep">주문 후 몇 달 대기...</p>
            <p className="whitespace-pre-line break-keep">첫 세탁에 물빠짐...</p>
            <p className="whitespace-pre-line break-keep">혹시 피부에 남는 염료 걱정...</p>
            <p className="whitespace-pre-line break-keep">예쁜데 불안한 경험...</p>
            <div className="pt-6 mt-6 border-t border-stone-200">
              <p className="font-bold text-stone-900 text-2xl md:text-3xl whitespace-pre-line break-keep bg-yellow-100 inline-block px-2">그래서 기술개발로 해결했습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution Block */}
      <section className="py-24 md:py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://beleft1004.cafe24.com/%ED%84%B1%EB%B0%9B%EC%9D%B4%20%EC%9B%90%EB%8B%A8%20%ED%81%B4%EB%A1%9C%EC%A6%88%EC%97%85%EC%BB%B7.jpg" alt="원단 조직 확대" className="w-full rounded-2xl shadow-md object-cover aspect-[3/4]" referrerPolicy="no-referrer" />
              <img src="https://beleft1004.cafe24.com/%ED%84%B1%EB%B0%9B%EC%9D%B4%20%EB%98%91%EB%94%B1%EC%9D%B4%EC%BB%B7.jpg" alt="똑딱이 강조" className="w-full rounded-2xl shadow-md object-cover aspect-[3/4] mt-8 md:mt-12" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-8 md:mb-10 leading-tight">
                비리프엔젤<br/>제로다이(Zero Dye)
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-stone-600 font-medium mb-12">
                {[
                  "데이터베이스화를 통한 공정화로 빠른 생산 프로세스 설계",
                  "후가공 최적화로 물빠짐 98%개선 수축률 94%개선",
                  "피부에 해로운 성분은 하나도 남기지 않는 (Zero Dye) 개발",
                  "원재료까지 안전한 GOTS 인증과 오코텍스 클래스 1 인증 확보"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-stone-50 p-5 md:p-6 rounded-2xl">
                    <div className="w-2 h-2 rounded-full bg-stone-400 shrink-0"></div>
                    <p className="whitespace-pre-line break-keep">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-stone-900 text-white p-6 rounded-2xl shadow-md text-center">
                <p className="text-lg md:text-xl font-bold whitespace-pre-line break-keep">
                  천연염색 타이틀로{'\n'}만족하지 않았습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
