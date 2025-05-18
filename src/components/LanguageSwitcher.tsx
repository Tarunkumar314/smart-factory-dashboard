import React from 'react';
import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select
      label="Language"
      placeholder="Select language"
      data={[
        { value: 'en', label: 'English' },
        { value: 'ko', label: 'Korean' }
      ]}
      value={i18n.language}
      onChange={(value) => changeLanguage(value || 'en')}
    />
  );
};

export default LanguageSwitcher; 