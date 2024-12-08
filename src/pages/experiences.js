import '../styles/experiences.css'
import '../components/expCard'
import ExpCard from '../components/expCard';
import { useTranslation } from 'react-i18next';
import cTrouble from '../assets/images/code_trouble_cover.jpeg'

const ExperiencesSection = (props) => {
  const { t } = useTranslation();

  return (
    <div {...props} id='experiencias' className="experiences-wrapper">
      <div id='experiences' className="experiences-sub-wrapper">
        <h1>{t('experiences-title')}</h1>
        <div className="card-div">
          <ExpCard
            image={'https://files.passeidireto.com/d1b62efc-eaab-4f0d-b402-a9a3c20eb734/bg1.png'}
            title={t('experiences-senaiTitle')}
            description={t('experiences-senaiDescription')}
            date={t('experiences-senaiDate')}
            //back
            backTitle={t('experiences-senaiTitle-back')}
            backDescription={t('experiences-senaiDescription-back')}
          />
          <ExpCard
            image={'https://docs.temporal.io/assets/images/banner-python-temporal-0d345d125b6892840c54f7e1460c8a5a.png'}
            title={t('experiences-ebacTitle')}
            description={t('experiences-ebacDescription')}
            date={t('experiences-ebacDate')}
            //back
            backTitle={t('experiences-ebacTitle-back')}
            backDescription={t('experiences-ebacDescription-back')}
          />
          <ExpCard
            image={cTrouble}
            title={t('experiences-codeTroubleTitle')}
            description={t('experiences-codeTroubleDescription')}
            date={t('experiences-codeTroubleDate')}
            //back
            backTitle={t('experiences-codeTroubleTitle-back')}
            backDescription={t('experiences-codeTroubleDescription-back')}
          />
          <ExpCard
            image={'https://veduca.org/wp-content/uploads/2024/03/Alura-oferece-60-mil-vagas-em-cursos-gratuitos-de-Python-e-analise-de-dados.jpg'}
            title={t('experiences-aluraTitle')}
            description={t('experiences-aluraDescription')}
            date={t('experiences-aluraDate')}
            //back
            backTitle={t('experiences-aluraTitle-back')}
            backDescription={t('experiences-aluraDescription-back')}
          />
        </div>
      </div>
    </div>
  );
}

export default ExperiencesSection;
