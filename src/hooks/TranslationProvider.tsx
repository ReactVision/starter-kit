import React, { useCallback, useContext, useEffect, useState } from 'react';
import translations from '../translations'

export const TranslationContext = React.createContext({});

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState('es')
    const translation = translations[language]

    const t = useCallback(
        (parent,key) => {
          return  translation[parent][key];
        },
        [translation],
      );

    const contextValue = {
        language,
        setLanguage,
        t
    };

    return (
        <TranslationContext.Provider value={contextValue}>{children}</TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext) as ITranslation;