import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CertificatesSection({ settings }: { settings: any }) {
  const [activeTab, setActiveTab] = useState('oeko');

  const tabs = [
    { id: 'oeko', label: 'OEKO-TEX CLASS 1' },
    { id: 'kc', label: 'KC 안전인증' },
    { id: 'gots', label: 'GOTS 7.0' },
    { id: 'zdhc', label: 'ZDHC Level 3' }
  ];

  return (
      <section className="pt-12 pb-24 bg-stone-900 text-stone-200 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">숫자로 증명하는 안전함</h2>
            <p className="text-lg text-stone-400 mb-12 whitespace-pre-line break-keep">인증 기준치보다 현저히 적은 잔류 물질.{'\n'}데이터가 말하는 비리프엔젤의 안전성.</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-white text-stone-900' 
                      : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[500px] relative">
            <AnimatePresence mode="wait">
              {activeTab === 'oeko' && (
                <motion.div
                  key="oeko"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-8 border-b border-stone-700 pb-4 whitespace-pre-line break-keep">OEKO-TEX STANDARD 100{'\n'}CALSS 1 기준 통과</h3>
                  <div className="w-full">
                    <p className="text-stone-400 font-medium mb-6">원단 잔류 화학물질 시험분석 결과</p>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4">
                      {[
                        { name: 'TBT', be: '<0.10', global: '<1.0' },
                        { name: 'TphT', be: '<0.10', global: '<1.0' },
                        { name: 'DBT', be: '<0.10', global: '<2.0' },
                        { name: 'DMT', be: '<0.10', global: '<2.0' },
                        { name: 'DOT', be: '<0.10', global: '<2.0' },
                        { name: 'DphT', be: '<0.10', global: '<2.0' },
                        { name: 'DPT', be: '<0.10', global: '<2.0' },
                        { name: 'MBT', be: '<0.10', global: '<2.0' },
                        { name: 'MOT', be: '<0.10', global: '<2.0' },
                        { name: 'MMT', be: '<0.10', global: '<2.0' },
                        { name: 'MphT', be: '<0.10', global: '<2.0' },
                        { name: 'TeBT', be: '<0.10', global: '<2.0' },
                        { name: 'TeET', be: '<0.10', global: '<2.0' },
                        { name: 'TCyHT', be: '<0.10', global: '<2.0' },
                        { name: 'TMT', be: '<0.10', global: '<2.0' },
                        { name: 'TOT', be: '<0.10', global: '<2.0' },
                        { name: 'TeOT', be: '<0.10', global: '<2.0' },
                        { name: 'TPT', be: '<0.10', global: '<2.0' },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-stone-800 p-4 rounded-xl text-center border border-stone-700">
                          <div className="text-stone-400 text-xs mb-1">{item.name}</div>
                          <div className="text-white font-medium text-lg">{item.be}</div>
                          <div className="text-stone-500 text-[10px] mt-1">기준: {item.global}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'kc' && (
                <motion.div
                  key="kc"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-stone-700 pb-4 whitespace-pre-line break-keep">KC 안전인증 통과</h3>
                  <div className="w-full">
                    <p className="text-stone-400 font-medium mb-6">유해성/유해물질 검사 결과</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { test: 'Arylamines', req: '<30 mg/kg', result: 'Below detection limit' },
                        { test: 'Formaldehyde Content', req: '<75 mg/kg', result: '0(not Detected)' },
                        { test: 'pH', req: 'pH 4.0~7.5', result: '6.6' },
                        { test: 'Allergic Disperse Dyes', req: 'Test for substances', result: 'Below detection limit' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                          <div className="text-stone-400 text-sm mb-2">{item.test}</div>
                          <div className="text-white font-bold text-lg mb-1">{item.result}</div>
                          <div className="text-stone-500 text-xs">기준: {item.req}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gots' && (
                <motion.div
                  key="gots"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-stone-700 pb-4">GOTS 7.0 통과 완료</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">1. 섬유 구성 기준</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">최소 70~95% 이상의{'\n'}인증된 유기농 섬유 필수</p>
                    </div>
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">2. 환경 기준</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">독성 중금속, 포름알데히드 등 유해 화학물질{'\n'}금지 및 폐수 처리</p>
                    </div>
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">3. 사회적 책임 기준</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">안전한 작업 환경 보장 및 공정한 급여,{'\n'}근로 시간 준수</p>
                    </div>
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">4. 기술적 품질</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">수축률, 색상 견뢰도 충족 및{'\n'}전체 공급망 추적 가능성 확보</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'zdhc' && (
                <motion.div
                  key="zdhc"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-stone-700 pb-4">ZDHC 유해물질 제로 배출 통과 완료</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">원료 및 완제품 MRSL 준수</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">제한 물질 목록 준수 및{'\n'}유해물질 허용치 이하</p>
                    </div>
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">제조 현장 심사</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">인증 기관이 제조 시설을 방문하여{'\n'}화학 물질 관리 시스템 감사</p>
                    </div>
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">제품 스튜어드십 평가</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">지속가능한 화학물질 관리 시스템 및{'\n'}MRSL 준수 능력 평가</p>
                    </div>
                    <div className="bg-stone-800 p-5 rounded-2xl border border-stone-700">
                      <h4 className="text-white font-bold mb-2">GHS 및 SDS 준수</h4>
                      <p className="text-stone-400 text-sm leading-relaxed whitespace-pre-line break-keep">안전보건자료 정확 작성 및 유해 화학물질{'\n'}위험성 평가 능력</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="text-center mt-16">
            <a href="#certificate-gallery" className="inline-block px-8 py-4 border border-stone-500 rounded-full hover:bg-stone-800 transition-colors text-white font-medium">
              인증서 원본 보러가기
            </a>
          </div>
        </div>
      </section>
  );
}
