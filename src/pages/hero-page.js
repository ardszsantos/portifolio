
import React from 'react';
import { useTranslation } from 'react-i18next';
import IconMarquee from '../components/slide';
import '../styles/hero-page.css';

const HeroSection = () => {
  const { t } = useTranslation(); // Hook to access translations
  const greaterthan = '>';

  return (
    <div id='hero' className="wrapper">
      <div className='text-container'>
        <h1>
          {t('greeting')} <br />
          <span className='great-span'>{greaterthan}</span>
          <span className='ale-span'>Alexandre Rodrigues</span> 👋
        </h1>
        <p>{t('developer_title')}</p>
      </div>

      <div className='billboard'>
        <IconMarquee />
      </div>
    </div>
  );
}

export default HeroSection;
