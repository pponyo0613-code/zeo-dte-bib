import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ settings }: { settings: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight" style={{ color: settings.primaryColor }}>
              {settings.siteName}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-stone-600 hover:text-stone-900 transition-colors">홈</Link>
            <a href="#preorder" className="text-stone-600 hover:text-stone-900 transition-colors">프리오더</a>
            <a href="#about" className="text-stone-600 hover:text-stone-900 transition-colors">브랜드 스토리</a>
            <Link to="/admin" className="text-sm px-4 py-2 rounded-full border border-stone-300 hover:bg-stone-50 transition-colors">관리자</Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-stone-600 hover:bg-stone-50 rounded-md">홈</Link>
            <a href="#preorder" className="block px-3 py-2 text-stone-600 hover:bg-stone-50 rounded-md">프리오더</a>
            <a href="#about" className="block px-3 py-2 text-stone-600 hover:bg-stone-50 rounded-md">브랜드 스토리</a>
            <Link to="/admin" className="block px-3 py-2 text-stone-600 hover:bg-stone-50 rounded-md">관리자</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
