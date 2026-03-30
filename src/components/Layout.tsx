import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { Menu, X, Instagram, MessageCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { content } = useContent();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-emerald-950/90 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              이데아<span className="text-emerald-400">교육원</span>
            </Link>

            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link to="/" className="hover:text-emerald-400 transition-colors">홈</Link>
              <a href="#about" className="hover:text-emerald-400 transition-colors">소개</a>
              <a href="#programs" className="hover:text-emerald-400 transition-colors">프로그램</a>
              <a href="#news" className="hover:text-emerald-400 transition-colors">소식</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">상담신청</a>
              <Link to="/admin" className="px-3 py-1 rounded-full border border-white/20 hover:bg-white hover:text-emerald-950 transition-all">관리자</Link>
            </nav>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-emerald-900 border-b border-white/10 px-4 pt-2 pb-6 space-y-1"
            >
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800" onClick={() => setIsMenuOpen(false)}>홈</Link>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800" onClick={() => setIsMenuOpen(false)}>소개</a>
              <a href="#programs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800" onClick={() => setIsMenuOpen(false)}>프로그램</a>
              <a href="#news" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800" onClick={() => setIsMenuOpen(false)}>소식</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800" onClick={() => setIsMenuOpen(false)}>상담신청</a>
              <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium bg-white text-emerald-950" onClick={() => setIsMenuOpen(false)}>관리자</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-emerald-950 text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">이데아교육원</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                청소년의 꿈과 미래를 함께 디자인하는<br />
                진로 및 취업 교육 전문 기관입니다.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">연락처</h4>
              <ul className="space-y-4 text-sm text-emerald-100/60">
                <li>주소: {content.contact.address}</li>
                <li>전화: {content.contact.phone}</li>
                <li>이메일: {content.contact.email}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">소셜 미디어</h4>
              <div className="flex space-x-4">
                <a href={`https://instagram.com/${content.contact.instagram}`} className="p-2 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-emerald-950 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-emerald-950 transition-all">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-emerald-400 hover:text-emerald-950 transition-all">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-emerald-100/40">
            © 2024 Idea Education Institute. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
