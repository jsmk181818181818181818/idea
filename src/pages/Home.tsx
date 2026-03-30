import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { ChevronRight, ArrowRight, Calendar, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
  const { content } = useContent();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.hero.backgroundImage} 
            alt="Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 whitespace-pre-line leading-tight"
          >
            {content.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-100/80 mb-10 max-w-2xl mx-auto"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#programs" 
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-950 rounded-full font-bold text-lg hover:bg-emerald-400 hover:text-emerald-950 transition-all group"
            >
              {content.hero.buttonText}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-8 leading-tight">
                {content.about.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {content.about.content}
              </p>
              <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                <p className="text-emerald-900 font-medium italic text-xl">
                  "{content.about.vision}"
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="About" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-950 rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl">
                <div>
                  <div className="text-4xl font-bold mb-1">10+</div>
                  <div className="text-xs uppercase tracking-tighter opacity-60">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4"
            >
              Our Programs
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              성장을 위한 맞춤형 교육
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-emerald-400/50 transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-bold rounded-full mb-4">
                    {program.category}
                  </span>
                  <h4 className="text-2xl font-bold mb-4">{program.title}</h4>
                  <p className="text-emerald-100/60 mb-6 line-clamp-2">
                    {program.description}
                  </p>
                  <button className="flex items-center text-emerald-400 font-bold group/btn">
                    자세히 보기 <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">News & Archive</h2>
              <h3 className="text-4xl font-bold text-emerald-950">활동 소식</h3>
            </div>
            <button className="hidden md:flex items-center text-emerald-950 font-bold hover:text-emerald-600 transition-colors">
              전체보기 <ChevronRight className="ml-1" />
            </button>
          </div>

          <div className="space-y-6">
            {content.news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center space-x-6">
                  <div className="hidden md:flex flex-col items-center justify-center w-20 h-20 bg-emerald-50 rounded-2xl text-emerald-950">
                    <Calendar size={24} className="mb-1" />
                    <span className="text-[10px] font-bold uppercase opacity-60">News</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-bold text-emerald-600">{item.category}</span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <ChevronRight className="hidden md:block text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-950 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">교육 상담 신청</h2>
              <p className="text-emerald-100/60 mb-12 text-lg">
                청소년의 밝은 미래를 위해 이데아교육원이 함께하겠습니다.<br />
                궁금하신 점을 남겨주시면 정성껏 답변해 드립니다.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl"><MapPin size={24} /></div>
                  <div>
                    <div className="text-xs font-bold uppercase opacity-40 mb-1">Address</div>
                    <div className="font-medium">{content.contact.address}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl"><Phone size={24} /></div>
                  <div>
                    <div className="text-xs font-bold uppercase opacity-40 mb-1">Phone</div>
                    <div className="font-medium">{content.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl"><Mail size={24} /></div>
                  <div>
                    <div className="text-xs font-bold uppercase opacity-40 mb-1">Email</div>
                    <div className="font-medium">{content.contact.email}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-12 md:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">이름</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="성함을 입력하세요" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">연락처</label>
                    <input type="tel" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="010-0000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">관심 프로그램</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all appearance-none">
                    <option>진로 탐색 캠프</option>
                    <option>자기소개서 컨설팅</option>
                    <option>미래 직업 체험</option>
                    <option>기타 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">문의 내용</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="상담 내용을 입력하세요"></textarea>
                </div>
                <button className="w-full py-5 bg-emerald-950 text-white rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg">
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
