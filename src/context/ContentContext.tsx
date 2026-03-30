import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent } from '../types';
import { initialContent } from '../constants';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('idea_edu_content');
    return saved ? JSON.parse(saved) : initialContent;
  });

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem('idea_edu_content', JSON.stringify(newContent));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
