import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const colors = [
  { id: 'rose', name: '로즈', dye: '꼭두서니', hex: '#d48a8a', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EB%A1%9C%EC%A6%88.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EB%A1%9C%EC%A6%88.jpg' },
  { id: 'pink', name: '핑크', dye: '꼭두서니', hex: '#e6a8b6', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%ED%95%91%ED%81%AC.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%ED%95%91%ED%81%AC.jpg' },
  { id: 'lilac', name: '라일락', dye: '꼭두서니', hex: '#c8b8d4', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EB%9D%BC%EC%9D%BC%EB%9D%BD.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EB%9D%BC%EC%9D%BC%EB%9D%BD.jpg' },
  { id: 'lightpink', name: '라이트핑크', dye: '꼭두서니', hex: '#f2d5d9', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EB%9D%BC%EC%9D%B4%ED%8A%B8%ED%95%91%ED%81%AC.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EB%9D%BC%EC%9D%B4%ED%8A%B8%ED%95%91%ED%81%AC.jpg' },
  { id: 'cream', name: '크림', dye: '꼭두서니', hex: '#f5f0e6', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%ED%81%AC%EB%A6%BC.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%ED%81%AC%EB%A6%BC.jpg' },
  { id: 'charcoal', name: '차콜', dye: '오배자', hex: '#5c5c5c', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EC%B0%A8%EC%BD%9C.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EC%B0%A8%EC%BD%9C.jpg' },
  { id: 'brown', name: '브라운', dye: '오배자', hex: '#8b6b5d', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EB%B8%8C%EB%9D%BC%EC%9A%B4.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EB%B8%8C%EB%9D%BC%EC%9A%B4.jpg' },
  { id: 'blue', name: '블루', dye: '인디고', hex: '#4a6b8c', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EB%B8%94%EB%A3%A8.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EB%B8%94%EB%A3%A8.jpg' },
  { id: 'sky', name: '스카이', dye: '인디고', hex: '#9bb8d4', mini: 'https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EC%8A%A4%EC%B9%B4%EC%9D%B4.jpg', jumbo: 'https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EC%8A%A4%EC%B9%B4%EC%9D%B4.jpg' },
];

const getColorHex = (name: string) => colors.find(c => c.name === name)?.hex || '#ccc';

const ColorChip = ({ name }: { name: string; key?: React.Key }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-200 rounded-full text-sm text-stone-700">
    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getColorHex(name) }}></span>
    {name}
  </span>
);

export function ProductDetailsSection({ settings }: { settings: any }) {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeTab, setActiveTab] = useState('jumbo');

  return (
      <section className="pt-12 pb-24 bg-stone-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">Be left Angel Bib</h2>
            <p className="text-sm text-stone-400 whitespace-pre-line break-keep">컬러칩을 선택하면 각 컬러의 제품과{'\n'}천연 염료를 확인할 수 있습니다.</p>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            <button 
              onClick={() => setActiveTab('jumbo')} 
              className={`px-8 py-4 rounded-full font-medium transition-all ${activeTab === 'jumbo' ? 'bg-stone-900 text-white shadow-lg scale-105' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}`}
            >
              점보유니크
            </button>
            <button 
              onClick={() => setActiveTab('mini')} 
              className={`px-8 py-4 rounded-full font-medium transition-all ${activeTab === 'mini' ? 'bg-stone-900 text-white shadow-lg scale-105' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}`}
            >
              미니데일리
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${activeTab}-${activeColor.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 mb-8 aspect-square flex items-center justify-center relative overflow-hidden"
                >
                  <img 
                    src={activeTab === 'jumbo' ? (activeColor as any).jumbo : (activeColor as any).mini} 
                    alt={`${activeTab === 'jumbo' ? '점보유니크' : '미니데일리'} - ${activeColor.name}`} 
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-sm font-medium text-stone-800 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeColor.hex }}></span>
                    {activeColor.name} ({activeColor.dye})
                  </div>
                </motion.div>
              </AnimatePresence>

              {activeColor.id === 'blue' && (
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-blue-800 text-sm leading-relaxed flex flex-col gap-4 items-start">
                  <div className="flex gap-4 items-start">
                    <AlertCircle className="shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold mb-1">인디고의 물빠짐 필수확인</p>
                      <p>해외에서는 "물빠짐이 없으면 가짜 인디고다"라고 할 만큼 자연스러운 현상입니다.</p>
                    </div>
                  </div>
                  <details className="w-full">
                    <summary className="cursor-pointer text-blue-600 font-medium hover:underline text-xs">자세히 보기</summary>
                    <p className="mt-3 text-xs text-blue-700">
                      인디고만 물빠짐이 아직 조금 남아 있으며 GOTS 원재료 인증을 모두 통과하고 안전성을 확인하였지만 혹 물빠짐에 예민하신 분들은 구매하지 않으시는 것을 추천드립니다.
                    </p>
                  </details>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-4 mb-12">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveColor(c)}
                    className={`flex flex-col items-center gap-1.5 md:gap-2 transition-transform hover:scale-105 ${activeColor.id === c.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border-2 ${activeColor.id === c.id ? 'border-stone-800' : 'border-transparent'}`}
                      style={{ backgroundColor: c.hex }}
                    ></div>
                    <span className="text-[10px] md:text-xs font-medium text-stone-700 whitespace-nowrap">{c.name}</span>
                  </button>
                ))}
              </div>

              <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
                {activeTab === 'jumbo' ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-2xl font-serif text-stone-900 mb-2">점보유니크</h3>
                    <p className="text-sm font-bold tracking-widest text-stone-500 mb-4">For Active Babies</p>
                    <p className="text-stone-600 leading-relaxed mb-6 whitespace-pre-line break-keep">
                      침쟁이·토쟁이·이유식을 시작하는{'\n'}아이들을 위한 점보사이즈입니다.{'\n'}아이보리 바이어스가 얼굴을{'\n'}화사하게 해주는 프레임 효과가{'\n'}있으며, 하루 3장 이상 사용하시는{'\n'}분들의 만족도가 특히 높습니다.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['침 많은 아이', '이유식 시작', '아이보리 바이어스', '점보 사이즈'].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-2xl font-serif text-stone-900 mb-2">미니데일리</h3>
                    <p className="text-sm font-bold tracking-widest text-stone-500 mb-4">For Daily Styling</p>
                    <p className="text-stone-600 leading-relaxed mb-6 whitespace-pre-line break-keep">
                      데일리 착용에 최적화된 사이즈로{'\n'}코디하기 편합니다.{'\n'}비교적 크기가 작아 옷을 덜 가리며,{'\n'}머리카락 찝힘을 방지하고{'\n'}아기가 수면중에도 턱받이 교체가{'\n'}수월합니다.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['코디편함', '침 적은 아이', '사이드 똑딱이', '머리찝힘방지'].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export function PreorderSetsSection() {
  return (
      <section className="pt-12 pb-32 bg-stone-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Pre-order Sets</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">추천 컬러 세트 구성</h3>
          </div>

          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-4">🔥 대부분의 엄마들이 선택한 구성</span>
              <h4 className="text-3xl font-bold text-stone-900 mb-2">5개 세트</h4>
              <div className="flex items-center justify-center gap-3 mb-2">
                <p className="text-3xl font-serif text-stone-900">69,500원</p>
                <p className="text-lg text-stone-400 line-through">92,500원</p>
              </div>
              <p className="text-stone-600 font-medium mb-1">무료배송 + 최저 단가(13,900원/개)</p>
              <p className="text-stone-500 text-sm">하루 2~3회 교체하면 5개가 가장 현실적이에요.</p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
              <img src="https://beleft1004.cafe24.com/%EC%A0%90%EB%B3%B4%EC%9C%A0%EB%8B%88%ED%81%AC%20%EC%A0%84%EC%B2%B4%EC%BB%B7.jpg" alt="점보유니크 전체 컬러" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h5 className="text-lg font-bold text-stone-900 mb-4">이달의 베스트 Best Seller</h5>
                <div className="flex flex-wrap gap-2">
                  {['크림', '라일락', '차콜', '핑크', '스카이'].map((c, i) => (
                    <ColorChip key={i} name={c} />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h5 className="text-lg font-bold text-stone-900 mb-4">여아 베스트 For Girls</h5>
                <div className="flex flex-wrap gap-2">
                  {['크림', '로즈', '핑크', '라일락', '차콜'].map((c, i) => (
                    <ColorChip key={i} name={c} />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h5 className="text-lg font-bold text-stone-900 mb-4">남아 베스트 For Boys</h5>
                <div className="flex flex-wrap gap-2">
                  {['크림', '블루', '스카이', '라일락', '차콜'].map((c, i) => (
                    <ColorChip key={i} name={c} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-10">
              <h4 className="text-2xl font-bold text-stone-900 mb-2">3개 세트</h4>
              <div className="flex items-center justify-center gap-3 mb-2">
                <p className="text-2xl font-serif text-stone-900">44,700원</p>
                <p className="text-base text-stone-400 line-through">53,700원</p>
              </div>
              <p className="text-stone-500 text-sm">가성비용 (14,900원/개)</p>
            </div>

            <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
              <img src="https://beleft1004.cafe24.com/%EB%AF%B8%EB%8B%88%EB%8D%B0%EC%9D%BC%EB%A6%AC%20%EC%A0%84%EC%B2%B4%EC%BB%B7.jpg" alt="미니데일리 전체 컬러" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h5 className="text-lg font-bold text-stone-900 mb-4">이달의 베스트 Best Seller</h5>
                <div className="flex flex-wrap gap-2">
                  {['크림', '라일락', '차콜'].map((c, i) => (
                    <ColorChip key={i} name={c} />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h5 className="text-lg font-bold text-stone-900 mb-4">여아 베스트 For Girls</h5>
                <div className="flex flex-wrap gap-2">
                  {['크림', '라일락', '핑크'].map((c, i) => (
                    <ColorChip key={i} name={c} />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h5 className="text-lg font-bold text-stone-900 mb-4">남아 베스트 For Boys</h5>
                <div className="flex flex-wrap gap-2">
                  {['크림', '라일락', '스카이'].map((c, i) => (
                    <ColorChip key={i} name={c} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-stone-900 mb-2">1개 단품</h4>
              <div className="flex items-center justify-center gap-3 mb-2">
                <p className="text-xl font-serif text-stone-900">15,900원</p>
                <p className="text-sm text-stone-400 line-through">17,900원</p>
              </div>
              <p className="text-stone-400 text-sm mb-4">컬러 테스트용</p>
              <div className="flex flex-wrap justify-center gap-2">
                {colors.map((c, i) => (
                  <ColorChip key={i} name={c.name} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-stone-500 bg-white border border-stone-100 py-4 rounded-xl shadow-sm text-sm whitespace-pre-line break-keep">
            * 세트상품은 색상 자유 조합 가능.{'\n'}신청 시 원하는 색상을 낱개로 선택해 주세요.
          </div>
        </div>
      </section>
  );
}
