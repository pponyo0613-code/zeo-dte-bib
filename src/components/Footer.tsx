import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '../constants/legal';

export default function Footer({ settings }: { settings: any }) {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-20 pb-12 border-t border-stone-100 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-1">BE LEFT ANGEL</h2>
              <p className="text-xs tracking-[0.2em] text-stone-400 font-medium uppercase">For Angel's Dwell</p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-bold hover:bg-stone-800 transition-all shadow-md hover:shadow-lg"
            >
              프리오더 신청하기
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-sm">
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 uppercase tracking-wider text-xs">Social</h3>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="text-stone-400 text-[10px] uppercase font-bold">Threads</span>
                  <a href="https://www.threads.com/@be_left_angel" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors">@be_left_angel</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-400 text-[10px] uppercase font-bold">Kakao Channel</span>
                  <a href="http://pf.kakao.com/_GlBqX" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors">@비리프엔젤</a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 uppercase tracking-wider text-xs">E-mail</h3>
              <a href="mailto:arummi0817@naver.com" className="text-stone-600 hover:text-stone-900 transition-colors block">arummi0817@naver.com</a>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 uppercase tracking-wider text-xs">Policy</h3>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setModalContent({ title: '개인정보 처리방침', content: PRIVACY_POLICY })}
                  className="text-stone-600 hover:text-stone-900 transition-colors text-left"
                >
                  개인정보 처리방침
                </button>
                <button 
                  onClick={() => setModalContent({ title: '이용약관', content: TERMS_OF_SERVICE })}
                  className="text-stone-600 hover:text-stone-900 transition-colors text-left"
                >
                  이용약관
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="text-[11px] leading-relaxed text-stone-400 space-y-1">
              <p>대표자: 김미려 | 연락처: 010-2305-2100</p>
              <p>사업자: (주)비리프 | 사업자등록번호: 475-86-03224</p>
              <p>통신판매업신고증: 제 2025-경기구리-0259호</p>
              <p>주소: 경기도 구리시 안골로 6</p>
            </div>
            <div className="md:text-right">
              <p className="text-[10px] text-stone-300 font-medium">© 2026 BE LEFT ANGEL. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalContent(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
                <h3 className="text-lg font-bold text-stone-900">{modalContent.title}</h3>
                <button 
                  onClick={() => setModalContent(null)}
                  className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-sm text-stone-600 leading-relaxed whitespace-pre-wrap font-sans">
                {modalContent.content}
              </div>
              <div className="p-6 border-t border-stone-100 flex justify-end bg-stone-50/50">
                <button 
                  onClick={() => setModalContent(null)}
                  className="px-6 py-2 bg-stone-900 text-white rounded-full text-sm font-bold hover:bg-stone-800 transition-all"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
