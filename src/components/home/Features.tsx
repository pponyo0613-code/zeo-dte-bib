import React from 'react';
import { Check } from 'lucide-react';

export function NaturalVsChemicalSection({ settings }: { settings: any }) {
  const comparisons = [
    {
      title: '공정설계',
      chemical: '일반적인 대량 생산에\n맞춰진 공정 설계',
      natural: '아이의 피부를\n최우선으로 고려한\n전체 공정 재설계'
    },
    {
      title: '인체 안전성',
      chemical: '다양한 화학물질 사용.\n잔류 물질에 대한\n우려 존재',
      natural: '식물 유래 염료\n사용으로 유해물질\n원천 차단. 민감한\n아기 피부에 안전'
    },
    {
      title: '환경 영향',
      chemical: '폐수 발생 및\n합성 물질 배출.',
      natural: '생분해성 염료\n사용으로\n환경 오염 최소화.\n친환경 공정'
    },
    {
      title: '색감 및 유지력',
      chemical: '일정하고 선명한\n색감 구현.',
      natural: '자연스럽고 은은한\n색감. 특허 기술\n적용으로 우수한\n세탁 견뢰도 확보'
    }
  ];

  return (
      <section className="pt-12 pb-24 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Process Difference</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">기준이 다른 공정</h3>
            <p className="text-lg text-stone-600 whitespace-pre-line break-keep">비리프엔젤은 아이를 최우선으로{'\n'}고려한 공정으로 재설계했습니다.</p>
          </div>

          {/* Mobile-friendly comparison cards */}
          <div className="space-y-6">
            {comparisons.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm">
                <h4 className="text-xl font-bold text-stone-900 mb-6 text-center">{item.title}</h4>
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="bg-stone-50 p-4 md:p-6 rounded-2xl">
                    <div className="text-stone-400 font-bold mb-3 text-xs md:text-sm text-center">일반 공정</div>
                    <p className="text-stone-500 text-xs md:text-base leading-relaxed whitespace-pre-line break-keep">{item.chemical}</p>
                  </div>
                  <div className="bg-stone-50 p-4 md:p-6 rounded-2xl border-2 border-stone-200 shadow-md transform scale-105 z-10" style={{ borderColor: settings.primaryColor }}>
                    <div className="font-bold mb-3 text-xs md:text-sm text-center" style={{ color: settings.primaryColor }}>🌿 비리프엔젤 공정</div>
                    <p className="text-stone-800 font-bold text-xs md:text-base leading-relaxed whitespace-pre-line break-keep">{item.natural}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export function RawMaterialsSection() {
  const [showAll, setShowAll] = React.useState(false);
  const materials = [
    { name: '꼭두서니', image: 'https://beleft1004.cafe24.com/%EA%BC%AD%EB%91%90%EC%84%9C%EB%8B%88.jpg' },
    { name: '석류', image: 'https://beleft1004.cafe24.com/%EC%84%9D%EB%A5%98.jpg' },
    { name: '오배자', image: 'https://beleft1004.cafe24.com/%EC%98%A4%EB%B0%B0%EC%9E%90.jpg' },
    { name: '아선약', image: 'https://beleft1004.cafe24.com/%EC%95%84%EC%84%A0%EC%95%BD.jpg' },
    { name: '가자', image: 'https://beleft1004.cafe24.com/%EA%B0%80%EC%9E%90.jpg' },
    { name: '히말라야 대황', image: 'https://beleft1004.cafe24.com/%ED%9E%88%EB%A7%90%EB%9D%BC%EC%95%BC%20%EB%8C%80%ED%99%A9.jpg' },
    { name: '금잔화', image: 'https://beleft1004.cafe24.com/%EA%B8%88%EC%9E%94%ED%99%94.jpg' },
    { name: '뽕잎', image: 'https://beleft1004.cafe24.com/%EB%BD%95%EC%9E%8E.jpg' },
    { name: '쪽잎', image: 'https://beleft1004.cafe24.com/%EC%AA%BD%EC%9E%8E.jpg' },
  ];

  const displayedMaterials = showAll ? materials : materials.slice(0, 1);

  return (
    <section className="pt-12 pb-24 bg-stone-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Nature's Gift</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">자연에서 온 귀한 원재료</h3>
          <p className="text-base md:text-lg text-stone-600 whitespace-pre-line break-keep">
            비리프엔젤은 인공 색소가 아닌{'\n'}자연의 식물에서 추출한 염료만을 사용합니다.
          </p>
        </div>

        <div className={`grid gap-12 ${showAll ? 'grid-cols-1 max-w-sm mx-auto' : 'grid-cols-1 max-w-xs mx-auto'}`}>
          {displayedMaterials.map((item, idx) => (
            <div key={idx} className="group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm border border-stone-200">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center font-medium text-stone-800 text-lg md:text-xl">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showAll ? (
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-3 border border-stone-300 text-stone-600 font-medium rounded-full hover:bg-stone-100 transition-colors"
            >
              원재료 더보기
            </button>
          ) : (
            <button 
              onClick={() => setShowAll(false)}
              className="px-8 py-3 border border-stone-300 text-stone-600 font-medium rounded-full hover:bg-stone-100 transition-colors"
            >
              다시 접기
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export function BrandStorySection({ settings }: { settings: any }) {
  return (
      <section id="about" className="pt-12 pb-24 bg-stone-50 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img src="https://beleft1004.cafe24.com/%EB%B9%84%EB%A6%AC%ED%94%84%EC%97%94%EC%A0%A4%20%EB%A9%94%EC%9D%B8%EC%BB%B71.jpg" alt="Brand Story" className="w-full rounded-3xl shadow-lg object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Brand Story</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 leading-tight">
              FOR ANGEL'S DWELL<br/>
              <span className="text-xl md:text-2xl text-stone-500 italic mt-4 block whitespace-pre-line break-keep">"마음껏 물고 빨아도 괜찮아{'\n'}너의 꿈을 펼쳐보렴"</span>
            </h3>
            
            <div className="space-y-6 text-stone-600 leading-relaxed mb-10 text-base md:text-lg whitespace-pre-line break-keep">
              <p>엄마들을 위한 업체들은 많습니다.{'\n'}비리프엔젤은 다시 되돌아가기로 했습니다.</p>
              <p>비리프엔젤은 오로지{'\n'}아직 어리고 보호받아야 할{'\n'}아이들을 위하는 업체입니다.</p>
              <p>아이에 대한 걱정만 덜어내도{'\n'}엄마들의 스트레스는 90%가 날아갑니다.{'\n'}비리프엔젤은 엄마들이 믿고 맡길 수 있는{'\n'}아기천사들의 정원을 꿈꿉니다.</p>
            </div>

            <div className="mb-10 rounded-2xl overflow-hidden shadow-md">
              <img src="https://beleft1004.cafe24.com/%EB%B9%84%EB%A6%AC%ED%94%84%EC%97%94%EC%A0%A4%20%EC%97%84%EB%A7%88%EC%99%80%20%EC%95%84%EA%B8%B0%EC%BB%B7.JPG" alt="Brand Vision" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 md:p-8 rounded-3xl border border-stone-100 shadow-sm">
              {[
                'OEKO-TEX Class 1', 'GOTS 인증', '화학물질 83% 감축', 
                '폐수 80% 감축', 'CO2 70% 감축', '특허받은 완충 패키징'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-stone-800 font-medium bg-stone-50 p-3 rounded-xl">
                  <div className="bg-white p-1 rounded-full shadow-sm">
                    <Check size={16} style={{ color: settings.primaryColor }} />
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export function ProcessInterviewSection({ settings }: { settings: any }) {
  return (
      <section className="pt-12 pb-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Process Interview</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight whitespace-pre-line break-keep">공정의 처음부터 끝까지,{'\n'}직접 설계했습니다</h3>
            <p className="text-base md:text-lg text-stone-600 whitespace-pre-line break-keep">믿을 수 있는 제품을 만들기 위해{'\n'}모든 공정에 관여했습니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://beleft1004.cafe24.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202026-03-02%20154001.jpg" alt="염색공정" className="w-full rounded-2xl shadow-md object-cover aspect-[3/4]" referrerPolicy="no-referrer" />
              <img src="https://beleft1004.cafe24.com/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202026-03-02%20154134.jpg" alt="봉제공정" className="w-full rounded-2xl shadow-md object-cover aspect-[3/4] mt-8" referrerPolicy="no-referrer" />
            </div>
            <div>
              <blockquote className="text-xl md:text-2xl font-serif text-stone-900 leading-relaxed mb-8 border-l-4 pl-6 py-2 whitespace-pre-line break-keep" style={{ borderColor: settings.primaryColor }}>
                "우리 아이에게 입힐 수 있는{'\n'}옷을 만들기 위해,{'\n'}아이보다 이익을 우선하던{'\n'}기존의 공정을 재설계했습니다."
              </blockquote>
              <div className="space-y-6 text-stone-600 leading-relaxed mb-10 text-base md:text-lg whitespace-pre-line break-keep">
                <p>비리프엔젤은 단순히 '천연염색'이라는{'\n'}태그를 붙이는 것에 그치지 않습니다.{'\n'}원사결정- 염색-후가공-봉제-부자재까지{'\n'}모든 과정을 직접 관여합니다.</p>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['생산과정 직접관여', '공정 인터뷰 공개', '화이트바이오 나노결합기술개발'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 bg-stone-100 text-stone-700 rounded-lg text-xs md:text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
