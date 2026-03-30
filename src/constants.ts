import { SiteContent } from './types';

export const initialContent: SiteContent = {
  hero: {
    title: "청소년의 꿈을 디자인하는\n이데아교육원",
    subtitle: "진로 설계부터 취업까지, 청소년의 미래를 함께 고민합니다.",
    buttonText: "프로그램 보기",
    backgroundImage: "https://images.unsplash.com/photo-1523240715630-9918c1381999?auto=format&fit=crop&q=80&w=1920"
  },
  about: {
    title: "미래를 여는 교육의 가치",
    content: "이데아교육원은 청소년들이 자신의 적성을 발견하고 미래 직업 세계에 능동적으로 대처할 수 있도록 돕는 진로 및 취업 교육 전문 기관입니다.",
    vision: "모든 청소년이 자신만의 고유한 빛을 발할 수 있는 세상을 만듭니다."
  },
  programs: [
    {
      id: "1",
      title: "진로 탐색 캠프",
      description: "다양한 직업 체험과 적성 검사를 통해 나만의 진로를 찾아가는 2박 3일 집중 캠프입니다.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      category: "진로"
    },
    {
      id: "2",
      title: "자기소개서 마스터 클래스",
      description: "입시와 취업의 첫 관문, 나만의 스토리를 담은 매력적인 자기소개서 작성을 돕습니다.",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800",
      category: "취업"
    },
    {
      id: "3",
      title: "미래 직업 체험 박람회",
      description: "AI, 로봇, 메타버스 등 4차 산업혁명 시대의 유망 직업을 직접 체험해보는 기회를 제공합니다.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      category: "체험"
    }
  ],
  news: [
    {
      id: "1",
      title: "2024 하반기 진로 캠프 참가자 모집",
      date: "2024.03.20",
      content: "꿈을 찾는 청소년들을 위한 하반기 캠프가 시작됩니다.",
      category: "공지사항"
    },
    {
      id: "2",
      title: "이데아교육원, 교육부 장관상 수상",
      date: "2024.03.15",
      content: "청소년 진로 교육 활성화 공로를 인정받아 수상의 영예를 안았습니다.",
      category: "보도자료"
    }
  ],
  contact: {
    address: "서울특별시 강남구 테헤란로 123, 이데아빌딩 5층",
    phone: "02-123-4567",
    email: "contact@idea-edu.com",
    kakao: "이데아교육원",
    instagram: "@idea_edu",
    blog: "blog.naver.com/idea_edu"
  }
};
