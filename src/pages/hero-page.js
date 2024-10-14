import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import IconMarquee from '../components/slide';
import '../styles/hero-page.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const greaterthan = '>';

  const [props, set] = useSpring(() => ({
    transform: 'rotateY(0deg) rotateX(0deg) translateZ(0px)',
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div id='hero' className="wrapper">
      <div id='ola' className='text-container'>
        <animated.h1
          style={props}
          onMouseMove={(e) => {
            const rect = e.target.getBoundingClientRect();
            const dx = e.clientX - rect.left - rect.width / 2;
            const dy = e.clientY - rect.top - rect.height / 2;
            const angleX = (dy / rect.height) * 45;
            const angleY = (dx / rect.width) * 45;
            set({
              transform: `rotateY(${angleY}deg) rotateX(${angleX}deg) translateZ(20px)`,
            });
          }}
          onMouseLeave={() =>
            set({
              transform: 'rotateY(0deg) rotateX(0deg) translateZ(0px)',
              boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            })
          }
        >
          {t('greeting')} <br />
          <span className='great-span'>{greaterthan}</span>
          <span className='ale-span'>Alexandre Rodrigues</span> 👋
        </animated.h1>
        <p>{t('developer_title')}</p>
        <button><a href='#contato'>{t('cta')}</a></button>
      </div>

      <div className='billboard'>
        <IconMarquee />
      </div>
    </div>
  );
}

export default HeroSection;
