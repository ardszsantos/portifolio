import '../styles/experiences.css'
import '../components/expCard'
import ExpCard from '../components/expCard';
import { useTranslation } from 'react-i18next';

const ExperiencesSection = (props) => {
  const { t } = useTranslation();

  return (
    <div {...props} id='experiencias' className="experiences-wrapper">
      <div id='experiences' className="experiences-sub-wrapper">
        <h1>{t('experiences-title')}</h1>
        <div className="card-div">
          <ExpCard
            image={'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png'}
            title={t('experiences-senaiTitle')}
            description={t('experiences-senaiDescription')}
            date={t('experiences-senaiDate')}
            //back
            backTitle={t('experiences-senaiTitle-back')}
            backDescription={t('experiences-senaiDescription-back')}
          />
          <ExpCard
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRU8sOl-pLVoZGWBODPTy-56PeVXMd-gglQ&s'}
            title={t('experiences-ebacTitle')}
            description={t('experiences-ebacDescription')}
            date={t('experiences-ebacDate')}
            //back
            backTitle={t('experiences-ebacTitle-back')}
            backDescription={t('experiences-ebacDescription-back')}
          />
          <ExpCard
            image={'https://media.licdn.com/dms/image/v2/D4D3DAQGQN2qteLzGzw/image-scale_191_1128/image-scale_191_1128/0/1729534555269/code_trouble_cover?e=1733155200&v=beta&t=lyUQD-TgLSoeElqdb5Aws41WXblM_RH5DvL7-vncsG8'}
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
