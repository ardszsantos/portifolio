import { useTranslation } from 'react-i18next';
import '../styles/hero-page.css';

const SpringButton = () => {
  const { t } = useTranslation();

  return (  
    <a className='buttona' href='#contato'><button>{t('cta')}</button></a>
  );
}

export default SpringButton;