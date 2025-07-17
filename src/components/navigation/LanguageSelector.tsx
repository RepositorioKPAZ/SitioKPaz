
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage, Language } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' }
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
      <SelectTrigger className="w-[100px] h-9 border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5 text-gray-600" />
          <SelectValue>
            <div className="flex items-center gap-1">
              <span className="text-xs">{currentLanguage?.flag}</span>
              <span className="text-xs font-medium">{currentLanguage?.code.toUpperCase()}</span>
            </div>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
