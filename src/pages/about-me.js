import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/about-me.css';
import kubuntu from '../assets/images/kubuntu-svgrepo-com.svg';
import web from '../assets/images/web-svgrepo-com.svg';
import ai from '../assets/images/ai-solid-svgrepo-com.svg';
import CardComponent from '../components/card';

const AboutPage = () => {
  const { t } = useTranslation(); // Hook to access translations


  return (
    <div id='about' className='wrapper-two'>
      <div className='about-container'>
        <h1>  {t('about_me_title')}</h1>
        <div className='about-p'>
          <p>{t('about_me_description_1')} <span className='front-span'>{t('about_me_frontend')}</span>, {t('about_me_description_2')}
            <span className='fullstack-span'>{t('about_me_fullstack')}</span>  {t('about_me_description_3')}
            <span className='python-span'>{t('about_me_python')}</span> {t('about_me_description_4')}
          </p>
        </div>
        <h2 className='interesses'>{t('interests_title')}</h2>
        <div className='about-cards'>
          <CardComponent
            img={kubuntu}
            title={t('linux_interest_title')}
            subtitle={t('linux_interest_description')}
          />
          <CardComponent
            img={web}
            title={t('web_dev_interest_title')}
            subtitle={t('web_dev_interest_description')}
          />
          <CardComponent
            img={ai}
            title={t('ai_interest_title')}
            subtitle={t('ai_interest_description')}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
