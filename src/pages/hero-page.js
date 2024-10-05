
import React from 'react';
import { useTranslation } from 'react-i18next';
import IconMarquee from '../components/slide';
import '../styles/hero-page.css';

const HeroSection = () => {
  const { t } = useTranslation(); // Hook to access translations
  const greaterthan = '>';

  return (
    <div id='hero' className="wrapper">
      <div id='ola' className='text-container'>
        <h1>
          {t('greeting')} <br />
          <span className='great-span'>{greaterthan}</span>
          <span className='ale-span'>Alexandre Rodrigues</span> 👋
        </h1>
        <p className="glowing-text" data-text={t('developer_title')}>
          {t('developer_title')}
        </p>

        <button><a href='#contato'>{t('cta')}</a></button>
      </div>

      <div className='billboard'>
        <IconMarquee />
      </div>
    </div>
  );
}

export default HeroSection;
