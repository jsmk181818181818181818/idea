import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { LayoutDashboard, FileText, Settings, Plus, Trash2, Save, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Admin() {
  const { content, updateContent } = useContent();
  const [activeTab, setActiveTab] = useState<'hero' | 'about' | 'programs' | 'news' | 'contact'>('hero');
  const [localContent, setLocalContent] = useState(content);

  const handleSave = () => {
    updateContent(localContent);
    alert('저장되었습니다!');
  };

  const updateHero = (field: string, value: string) => {
    setLocalContent({
      ...localContent,
      hero: { ...localContent.hero, [field]: value }
    });
  };

  const updateAbout = (field: string, value: string) => {
    setLocalContent({
      ...localContent,
      about: { ...localContent.about, [field]: value }
    });
  };

  const updateContact = (field: string, value: string) => {
    setLocalContent({
      ...localContent,
      contact: { ...localContent.contact, [field]: value }
    });
  };

  const addProgram = () => {
    const newProgram = {
      id: Date.now().toString(),
      title: '새 프로그램',
      description: '설명을 입력하세요',
      image: 'https://images.unsplash.com/photo-1523240715630-9918c1381999',
      category: '카테고리'
    };
    setLocalContent({
      ...localContent,
      programs: [...localContent.programs, newProgram]
    });
  };

  const removeProgram = (id: string) => {
    setLocalContent({
      ...localContent,
      programs: localContent.programs.filter(p => p.id !== id)
    });
  };

  const updateProgram = (id: string, field: string, value: string) => {
    setLocalContent({
      ...localContent,
      programs: localContent.programs.map(p => p.id === id ? { ...p, [field]: value } : p)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-950 text-white flex flex-col">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-xl font-bold tracking-tighter">IDEA Admin</h1>
          <p className="text-[10px] uppercase tracking-widest text-emerald-400/60 mt-1">Management System</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('hero')}
            className={cn(
              "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              activeTab === 'hero' ? "bg-emerald-800 text-white" : "text-emerald-100/40 hover:bg-white/5 hover:text-white"
            )}
          >
            <LayoutDashboard size={18} />
            <span>히어로 섹션</span>
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={cn(
              "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              activeTab === 'about' ? "bg-emerald-800 text-white" : "text-emerald-100/40 hover:bg-white/5 hover:text-white"
            )}
          >
            <FileText size={18} />
            <span>소개 관리</span>
          </button>
          <button 
            onClick={() => setActiveTab('programs')}
            className={cn(
              "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              activeTab === 'programs' ? "bg-emerald-800 text-white" : "text-emerald-100/40 hover:bg-white/5 hover:text-white"
            )}
          >
            <Plus size={18} />
            <span>프로그램 관리</span>
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={cn(
              "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              activeTab === 'contact' ? "bg-emerald-800 text-white" : "text-emerald-100/40 hover:bg-white/5 hover:text-white"
            )}
          >
            <Settings size={18} />
            <span>사이트 설정</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-white/5 text-sm font-medium hover:bg-white/10 transition-all">
            <LogOut size={16} />
            <span>사이트로 돌아가기</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-emerald-950">
                {activeTab === 'hero' && '히어로 섹션 편집'}
                {activeTab === 'about' && '소개 내용 편집'}
                {activeTab === 'programs' && '프로그램 리스트 편집'}
                {activeTab === 'contact' && '사이트 및 연락처 설정'}
              </h2>
              <p className="text-gray-500 mt-1">웹사이트의 내용을 실시간으로 수정할 수 있습니다.</p>
            </div>
            <button 
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-3 bg-emerald-950 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg"
            >
              <Save size={18} />
              <span>변경사항 저장</span>
            </button>
          </div>

          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-10">
            {activeTab === 'hero' && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-3">메인 타이틀</label>
                  <textarea 
                    value={localContent.hero.title}
                    onChange={(e) => updateHero('title', e.target.value)}
                    rows={3}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-3">서브 타이틀</label>
                  <input 
                    type="text"
                    value={localContent.hero.subtitle}
                    onChange={(e) => updateHero('subtitle', e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-3">배경 이미지 URL</label>
                  <input 
                    type="text"
                    value={localContent.hero.backgroundImage}
                    onChange={(e) => updateHero('backgroundImage', e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                  />
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-3">소개 타이틀</label>
                  <input 
                    type="text"
                    value={localContent.about.title}
                    onChange={(e) => updateAbout('title', e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-3">소개 내용</label>
                  <textarea 
                    value={localContent.about.content}
                    onChange={(e) => updateAbout('content', e.target.value)}
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-3">비전 문구</label>
                  <input 
                    type="text"
                    value={localContent.about.vision}
                    onChange={(e) => updateAbout('vision', e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                  />
                </div>
              </div>
            )}

            {activeTab === 'programs' && (
              <div className="space-y-12">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-emerald-950">등록된 프로그램 ({localContent.programs.length})</h3>
                  <button 
                    onClick={addProgram}
                    className="flex items-center space-x-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                  >
                    <Plus size={16} />
                    <span>새 프로그램 추가</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {localContent.programs.map((program) => (
                    <div key={program.id} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group">
                      <button 
                        onClick={() => removeProgram(program.id)}
                        className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">프로그램명</label>
                          <input 
                            type="text"
                            value={program.title}
                            onChange={(e) => updateProgram(program.id, 'title', e.target.value)}
                            className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">카테고리</label>
                          <input 
                            type="text"
                            value={program.category}
                            onChange={(e) => updateProgram(program.id, 'category', e.target.value)}
                            className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-medium"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">설명</label>
                          <textarea 
                            value={program.description}
                            onChange={(e) => updateProgram(program.id, 'description', e.target.value)}
                            rows={2}
                            className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-medium"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">이미지 URL</label>
                          <input 
                            type="text"
                            value={program.image}
                            onChange={(e) => updateProgram(program.id, 'image', e.target.value)}
                            className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-emerald-500 transition-all text-sm font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-3">주소</label>
                    <input 
                      type="text"
                      value={localContent.contact.address}
                      onChange={(e) => updateContact('address', e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-3">전화번호</label>
                    <input 
                      type="text"
                      value={localContent.contact.phone}
                      onChange={(e) => updateContact('phone', e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-3">이메일</label>
                    <input 
                      type="text"
                      value={localContent.contact.email}
                      onChange={(e) => updateContact('email', e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-3">카카오톡 채널</label>
                    <input 
                      type="text"
                      value={localContent.contact.kakao}
                      onChange={(e) => updateContact('kakao', e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
