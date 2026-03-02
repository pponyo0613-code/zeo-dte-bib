import React, { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';

const reviews = [
  {
    text: "포장 퀄리티가 상당히 좋았어요. 여러 타사 턱받이와 비교했을 때 가장 부드러웠어요. 4개월 아기 엄마 의견입니다. 넉넉한 사이즈가 오히려 장점으로 느껴졌어요.",
    author: "채이 · 구매자 단톡방",
    img: "https://beleft1004.cafe24.com/%EC%B1%84%EC%9D%B4%EB%8B%98%20%ED%9B%84%EA%B8%B0.jpg"
  },
  {
    text: "촉감도 너무 부드럽고 저는 물빠짐은 없었구요. 일단 색감에서 전 이미 넉다운. 너무 예뻐요. 이건 선물용이다 싶어서 두 장은 다시 넣었지요.",
    author: "스노우벨 · 구매자 단톡방",
    img: "https://beleft1004.cafe24.com/%EC%8A%A4%EB%85%B8%EC%9A%B0%EB%B2%A8%EB%8B%98%20%ED%9B%84%EA%B8%B0.jpg"
  },
  {
    text: "압도적 부드러움 / 안심할 수 있는 천연염색 / 넉넉한 사이즈 / KC인증 부착 / 고급스러운 포장(선물용 굿) / 부드러운 색감과 무드(수집욕 상승). 빕 종류별로 짱 많은데 진짜 보드라움은 최고예요!",
    author: "태하맘 · 구매자 단톡방",
    img: "https://beleft1004.cafe24.com/%ED%83%9C%ED%95%98%EB%A7%98%EB%8B%98%20%ED%9B%84%EA%B8%B0.jpg"
  },
  {
    text: "재질은 앞에 분들 말하신것에 동의! 너무 좋아요. 제가 쓰는 턱받이 중 제일 보드라워서 너무 맘에 들어요. 흡수력 무슨일이죠. 저희 애기 토쟁이인데 방금 분유 먹고 왈칵 다 토했는데 대박이에요.",
    author: "쩡다 · 구매자 단톡방",
    img: "https://beleft1004.cafe24.com/%EC%A9%A1%EB%8B%A4%EB%8B%98%20%ED%9B%84%EA%B8%B0.jpg"
  },
  {
    text: "먼저 포장이 너무 고급스러워서 선물 받은 기분이 들었어요. 색감도 천연 소재에서 나올 수 있는 색이 맞나 싶을 정도로 고급스럽고 정말 예뻐요. 재질은 굉장히 부드럽고 보들보들해서 아기 피부에 닿아도 자극 없이 편안하게 사용할 수 있을 것 같아요.",
    author: "고구마 먹는 춘식이 · 구매자 단톡방",
    img: "https://beleft1004.cafe24.com/%EA%B3%A0%EA%B5%AC%EB%A7%88%EB%A8%B9%EB%8A%94%20%EC%B6%98%EC%8B%9D%EC%9D%B4%EB%8B%98%20%ED%9B%84%EA%B8%B0.jpg"
  },
  {
    text: "그래도 하나만 선택하자면 남편이랑 저는 브라운으로 어렵게 골랐어요 ㅎㅎ 색 진짜예뻐요! 사진으론 너무 안담겨요 ㅠ\n\n그리고 이제보니 바이어스 같은색도 너무 예쁘네요.\n3개월 침쟁이 토쟁이아가 사이즈 넉넉해서 철통방어로 너무 잘 쓰고 있어요😍 어깨까지 덮어버리니까 손수건안찾고 바로 스윽~ 흡수력도 너무좋아서 몇번 더 버틸수있습니다 🤣🤣ㅋㅋㅋ",
    author: "브라운님 · 구매자 단톡방",
    img: "https://beleft1004.cafe24.com/%EB%B8%8C%EB%9D%BC%EC%9A%B4%EB%8B%98%20%ED%9B%84%EA%B8%B0.jpg"
  },
  {
    text: "1. 부드러운 소재: 세탁 전 만졌을 때 다른 테리 제품과 비교되는 극강의 부드러움이 느껴짐. 세탁 후에도 부드러움을 상당히 유지하는 편.\n2. 은은한 색감: 스카이/라벤더/차콜 구입하였는데, 예쁜 파스텔톤이 보유한 의상과도 잘 매치되서 마음에 듬.\n3. 넉넉한 사이즈: 분수대마냥 침을 흘리는 4개월차 아기에게는 너무나 좋은 빅 사이즈 😂\n4. 사각 라인: 개인 취향이긴 하나, 아가의 볼살 모양과 비슷하게 떨어지는 사각 라인이어서 한층 더 귀여움",
    author: "봉봉님 · 구매자 단톡방",
    img: null
  },
  {
    text: "제가 쓰는 턱받이 중 제일 보드라워서 너무 맘에 들어요. 천연염색이라 원료 좋고 색도 곱고 예뻐요. 18개월인데 여전히 간식, 음료, 감기 걸렸을 때 많이 쓰거든요.",
    author: "쪼미 · 구매자 단톡방",
    img: null
  },
  {
    text: "저두 택배 오자마자 뜯어보았는데 상자 글귀에 뭉클 한 번 하고.. 소재에 한번 더 놀랬던 거 같아요ෆ\n30개월 첫째한테 해보았을때도 사이즈 넉넉하니 좋더라고요!! 내일은 둘찌한테 한번 해봐야겠어요ꔛ",
    author: "태오리맘님 · 구매자 단톡방",
    img: null
  }
];

const faqs = [
  {
    q: "천연염색인데 색이 바래지 않나요?",
    a: "비리프엔젤은 천연염색의 고질적인 물빠짐 문제를 자체 기술로 개선 완료했습니다. 세탁 후에도 선명한 색이 유지되며, 세탁 가이드를 따르시면 오랫동안 아름다운 색상을 유지할 수 있습니다.\n\n다만 식물을 사용하여 염색하다 보니 일광견뢰도는 합성염료에 비해 조금 떨어질 수 있는 점 참고 부탁드립니다."
  },
  {
    q: "파란색 컬러에 물빠짐이 있는 것 같아요.",
    a: "해외에서는 '물이 빠지지 않으면 인디고가 아니다'라는 말이 있을 만큼, 인디고 파란색의 물빠짐은 자연스러운 현상입니다.\n\n안전성 확인을 마친 염료를 사용하오니 안심하셔도 좋지만, 물빠짐에 예민하신 분들께는 추천드리지 않습니다."
  },
  {
    q: "빨래 후 부드러움이 덜해진 것 같아요.",
    a: "세탁 방식에 따라 소재 손상이 나타날 수 있습니다. 제공된 세탁 권장사항을 지켜주신다면 오랫동안 압도적인 부드러움을 유지하실 수 있습니다."
  },
  {
    q: "소재가 무엇인가요? 알레르기 걱정은 없나요?",
    a: "밤부테리(대나무 섬유 혼방) 소재로, 벨벳처럼 부드럽고 흡수력이 뛰어납니다.\n\nOEKO-TEX Standard 100 Class 1 및 GOTS 인증 원재료를 사용하여 유해물질 걱정 없이 안심하고 사용하실 수 있습니다."
  },
  {
    q: "점보유니크와 미니데일리의 차이가 무엇인가요?",
    a: "점보유니크는 침쟁이·토쟁이·이유식을 시작하는 아이들을 위한 점보사이즈입니다. 하루에 턱받이를 3장 이상 사용하시는 분들의 만족도가 특히 높습니다.\n\n미니데일리는 데일리 착용에 최적화된 사이즈로, 사전 모델 완판 피드백을 반영하여 완성되었습니다."
  },
  {
    q: "5개 세트는 색상을 자유롭게 조합할 수 있나요?",
    a: "네, 가능합니다! 원하시는 색상으로 자유롭게 조합 가능합니다. 신청 시 원하시는 색상을 낱개로 선택해 주세요."
  },
  {
    q: "프리오더 후 취소·환불이 가능한가요?",
    a: "상품 수령 전까지 취소가 가능합니다. 자세한 사항은 카카오채널 또는 DM으로 문의해 주세요."
  },
  {
    q: "배송은 언제 시작되나요?",
    a: "프리오더 마감 후 제작이 시작되며, 예상 배송일은 4월 13일입니다. 일정이 변경되는 경우 개별 안내를 드립니다."
  },
  {
    q: "결제는 무통장 입금만 가능한가요?",
    a: "현재 자사몰을 준비 중입니다. 아쉽게도 현재는 무통장 입금만 가능합니다."
  },
  {
    q: "천연염색인데 어떻게 이렇게 빨리 받아볼 수 있나요?",
    a: "기존에 수공예 방식으로 이루어지던 천연염색을 기술 개발을 통해 공정화하여 더욱 업그레이드되고 일관된 품질을 확보했습니다.\n\n바이오매스 나노결합기술을 활용하여 기존 천연염색보다 친환경적이며 유해물질이 현저히 적게 남는 생산 시스템을 구축했습니다."
  }
];

export function PrecautionsSection({ settings }: { settings: any }) {
  return (
    <section className="pt-12 pb-24 bg-stone-100 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">꼭 읽어주세요</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 whitespace-pre-line break-keep">알고 주문해주세요 —{'\n'}천연염색의 솔직한 단점</h3>
            <p className="text-lg text-stone-600 whitespace-pre-line break-keep">천연의 아름다움에서부터 비롯된{'\n'}자연의 특성.{'\n'}미리 알고 선택해주세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="text-4xl font-serif text-stone-300 mb-4">01</div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">메타멜리즘 현상</h4>
              <p className="text-stone-600 leading-relaxed whitespace-pre-line break-keep">광원의 종류와 방향, 원단의 결에 따라{'\n'}색상이 다르게 보일 수 있습니다.{'\n'}이는 자연에서 염료를 추출하기 때문에{'\n'}나타나는 메타멜리즘 현상으로,{'\n'}천연염색만의 아름다움입니다.{'\n'}단, 선호하지 않으시는 분은 피해주세요.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="text-4xl font-serif text-stone-300 mb-4">02</div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">일광견뢰도</h4>
              <p className="text-stone-600 leading-relaxed whitespace-pre-line break-keep">장기간 햇볕 아래 있는 경우 색상이{'\n'}날아갈 수 있습니다.{'\n'}비리프엔젤은 일광견뢰도를 4단계까지{'\n'}끌어올렸지만, 아직 합성염료(5단계){'\n'}보다는 조금 떨어집니다.{'\n'}단기 일광 노출에서는 눈에 띄게{'\n'}변하지 않습니다.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2" style={{ borderColor: settings.primaryColor }}>
              <div className="text-4xl font-serif text-stone-300 mb-4">03</div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">세탁 주의사항</h4>
              <p className="text-stone-600 leading-relaxed mb-4 whitespace-pre-line break-keep">반드시 울샴푸 등 중성세제를{'\n'}사용하여 세탁하고 그늘에서{'\n'}건조하세요.</p>
              <div className="bg-red-50 text-red-800 p-4 rounded-xl text-sm whitespace-pre-line break-keep">
                <strong>사용 금지:</strong> 산소계 표백제(과붕산나트륨·과탄산나트륨), 염소계 표백제(치아염소산나트륨), 솔벤트류 세제, 과탄산소다{'\n\n'}위 세제 사용 시 색상이 변할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
      <section className="pt-12 pb-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Reviews</h2>
            <h3 className="text-2xl md:text-3xl font-serif text-stone-900 whitespace-nowrap">먼저 받아본 분들의 이야기</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedReviews.map((review, idx) => (
              <div key={idx} className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 flex flex-col">
                {review.img && (
                  <img src={review.img} alt="Review" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                )}
                <div className="p-6 flex-grow">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-stone-700 leading-relaxed mb-6 text-sm">"{review.text}"</p>
                  <p className="text-stone-500 text-xs font-medium mt-auto">{review.author}</p>
                </div>
              </div>
            ))}
          </div>
          
          {!showAll && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAll(true)}
                className="px-8 py-3 border border-stone-300 text-stone-600 font-medium rounded-full hover:bg-stone-50 transition-colors"
              >
                후기 더보기
              </button>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-stone-400 text-sm whitespace-pre-line break-keep leading-relaxed">
              피드백주신 엔젤지기 여러분 다시한번 감사합니다🥹
            </p>
          </div>
        </div>
      </section>
  );
}

export function PreorderBarSection() {
  return (
      <section id="preorder" className="pt-[100px] md:pt-0 pb-32 bg-stone-900 text-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-stone-400 mb-4">Pre-order</h2>
          <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight whitespace-pre-line break-keep">
            기간한정 혜택
          </h3>
          
          <div className="mb-12 space-y-2">
            <p className="text-xl md:text-2xl font-bold text-white">배송 전 취소 가능</p>
            <p className="text-lg md:text-xl font-medium text-stone-300">다음 오픈은 가격 인상 예정입니다.</p>
            <p className="text-stone-400 mt-4">프리오더가 망설여지신다면, 일단 신청하시고 배송 전 언제든 취소하세요.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-left">
            <div className="bg-stone-800 p-6 rounded-2xl">
              <p className="text-stone-400 text-sm mb-2">프리오더 기간</p>
              <p className="font-medium">~3월 17일 오후 12시</p>
            </div>
            <div className="bg-stone-800 p-6 rounded-2xl">
              <p className="text-stone-400 text-sm mb-2">예상 배송일</p>
              <p className="font-medium">4월 13일</p>
            </div>
            <div className="bg-stone-800 p-6 rounded-2xl">
              <p className="text-stone-400 text-sm mb-2">결제 방법</p>
              <p className="font-medium">무통장 입금</p>
            </div>
            <div className="bg-stone-800 p-6 rounded-2xl">
              <p className="text-stone-400 text-sm mb-2">신청 방법</p>
              <p className="font-medium">네이버폼</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://naver.me/GQG0bC9I" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-100 transition-colors">
              네이버폼으로 신청
            </a>
            <a href="https://www.threads.net/@be_left_angel" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-stone-600 text-white font-medium rounded-full hover:bg-stone-800 transition-colors">
              스레드 보러가기
            </a>
          </div>
          <p className="mt-6 text-stone-400 text-sm">⚠ 1차 완판 — 2차도 수량이 한정되어 있습니다</p>
        </div>
      </section>
  );
}



export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
      <section className="pt-12 pb-24 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900">자주 묻는 질문</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-stone-50 hover:bg-stone-100 transition-colors"
                >
                  <span className="font-medium text-stone-900">{faq.q}</span>
                  {openFaq === idx ? <Minus size={20} className="text-stone-500" /> : <Plus size={20} className="text-stone-500" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-5 bg-white text-stone-600 leading-relaxed whitespace-pre-line border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export function CertificateGallerySection() {
  return (
      <section id="certificate-gallery" className="pt-12 pb-24 bg-stone-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 mb-4">Certificate Gallery</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">인증서 원본 사진</h3>
            <p className="text-lg text-stone-600">비리프엔젤이 취득한 4가지 인증의 원본 서류입니다.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
              <img src="https://beleft1004.cafe24.com/%EC%98%A4%EC%BD%94%ED%85%8D%EC%8A%A4%20%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C%20100%20%ED%81%B4%EB%9E%98%EC%8A%A4%201%20%EC%9D%B8%EC%A6%9D%EC%84%9C.jpg" alt="OEKO-TEX Standard 100" className="w-full h-auto rounded-xl mb-4 border border-stone-100" referrerPolicy="no-referrer" />
              <p className="text-center font-medium text-stone-800">OEKO-TEX Standard 100</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
              <img src="https://beleft1004.cafe24.com/KC%EC%95%88%EC%A0%84%EC%9D%B8%EC%A6%9D.jpg" alt="KC 안전인증" className="w-full h-auto rounded-xl mb-4 border border-stone-100" referrerPolicy="no-referrer" />
              <p className="text-center font-medium text-stone-800">KC 안전인증</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
              <img src="https://beleft1004.cafe24.com/GOTS%20%EC%9D%B8%EC%A6%9D%EC%84%9C.jpg" alt="GOTS 7.0" className="w-full h-auto rounded-xl mb-4 border border-stone-100" referrerPolicy="no-referrer" />
              <p className="text-center font-medium text-stone-800">GOTS 7.0</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
              <img src="https://beleft1004.cafe24.com/ZDHC%20%EB%A0%88%EB%B2%A83%20%EC%9D%B8%EC%A6%9D%EC%84%9C.jpg" alt="ZDHC Level 3" className="w-full h-auto rounded-xl mb-4 border border-stone-100" referrerPolicy="no-referrer" />
              <p className="text-center font-medium text-stone-800">ZDHC Level 3</p>
            </div>
          </div>
        </div>
      </section>
  );
}
