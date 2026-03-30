export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    content: string;
    vision: string;
  };
  programs: Program[];
  news: NewsItem[];
  contact: {
    address: string;
    phone: string;
    email: string;
    kakao: string;
    instagram: string;
    blog: string;
  };
}
