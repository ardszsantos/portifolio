// src/components/LengSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/switch.css';

const LengSwitcher = () => {
  const { i18n } = useTranslation(); // Hook to access the i18n instance

  const handleLanguageChange = (event) => {
    const isChecked = event.target.checked;
    const language = isChecked ? 'en' : 'pt'; // Toggle between 'en' and 'pt'
    i18n.changeLanguage(language); // Change the language
  };

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        onChange={handleLanguageChange}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">PT</span>
      <span className="off">EN</span>
    </div>
  );
}

export default LengSwitcher;
