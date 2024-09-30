import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/about-me.css';
import kubuntu from '../assets/images/kubuntu-svgrepo-com.svg';
import web from '../assets/images/web-svgrepo-com.svg';
import CardComponent from '../components/card';

import { FaReact, FaPython, FaGitAlt, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaDocker, FaVuejs, FaPhp, FaSass, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiLinux, SiDjango, SiFlask, SiMysql, SiMongodb, SiTypescript } from 'react-icons/si';


const AboutSection = (props) => {
  const { t } = useTranslation();


  return (
    <div {...props} id='about' className='wrapper-two'>
      <div id='sobre' className='about-container'>
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
        </div>
      </div>
      <div className='skills'>
        <h2>main skills</h2>
        <div className='skills-icons'>
          <div className='icon'>
            <FaJsSquare size={50} color='#F7DF1E' />
            <p>JavaScript</p>
          </div>
          <div className='icon'>
            <FaHtml5 size={50} color='#E34F26' />
            <p>HTML</p>
          </div>
          <div className='icon'>
            <FaCss3Alt size={50} color='#1572B6' />
            <p>CSS</p>
          </div>
          <div className='icon'>
            <FaPython size={50} color='#3776AB' />
            <p>Python</p>
          </div>
          <div className='icon'>
            <FaGitAlt size={50} color='#F05032' />
            <p>Git</p>
          </div>
          <div className='icon'>
            <FaReact size={50} color='#61DBFB' />
            <p>React</p>
          </div>
          <div className='icon'>
            <FaNodeJs size={50} color='#68A063' />
            <p>Node.js</p>
          </div> 
          <div className='icon'>
            <FaFigma size={50} color='#F24E1E' />
            <p>Figma</p>
          </div>
        </div>

        <h2>currently learning</h2>
        <div className='skills-icons'>

          <div className='icon'>
            <SiNextdotjs size={50} color='#000000' />
            <p>Next.js</p>
          </div>
          <div className='icon'>
            <SiTailwindcss size={50} color='#38B2AC' />
            <p>Tailwind CSS</p>
          </div>

          <div className='icon'>
            <SiLinux size={50} color='#FCC624' />
            <p>Linux</p>
          </div>
          <div className='icon'>
            <SiDjango size={50} color='#092E20' />
            <p>Django</p>
          </div>
          <div className='icon'>
            <SiFlask size={50} color='#000000' />
            <p>Flask</p>
          </div>
          <div className='icon'>
            <FaDocker size={50} color='#2496ED' />
            <p>Docker</p>
          </div>
          <div className='icon'>
            <FaVuejs size={50} color='#42b883' />
            <p>Vue.js</p>
          </div>
          <div className='icon'>
            <FaPhp size={50} color='#777BB4' />
            <p>PHP</p>
          </div>
          <div className='icon'>
            <FaSass size={50} color='#CC6699' />
            <p>SASS</p>
          </div>
          <div className='icon'>
            <SiMysql size={50} color='#4479A1' />
            <p>MySQL</p>
          </div>
          <div className='icon'>
            <SiMongodb size={50} color='#47A248' />
            <p>MongoDB</p>
          </div>
          <div className='icon'>
            <SiTypescript size={50} color='#3178C6' />
            <p>TypeScript</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;
