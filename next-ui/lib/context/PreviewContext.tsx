import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Preview {
  _id:string|null;
  imgUrl?: string;
  title?: string;
  description?: string;
  plantImg?:string;
  vName?:string;
  sName?:string;
  isHerbal?:boolean
}

interface PreviewContextProps {
  preview: Preview;
  setPreview: React.Dispatch<React.SetStateAction<Preview>>;
}



const PreviewContext = createContext<PreviewContextProps | undefined>(undefined);

const PreviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preview, setPreview] = useState<Preview>({
    _id:"",
    imgUrl: '',
    title: 'default title',
    description: '',
    plantImg:"",
    vName:"",
    sName:"",
    isHerbal:false
  });

  return (
    <PreviewContext.Provider value={{ preview, setPreview }}>
      {children}
    </PreviewContext.Provider>
  );
};

const usePreview = (): PreviewContextProps => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error('usePreview must be used within a PreviewProvider');
  }
  return context;
};


export { PreviewProvider, usePreview };
