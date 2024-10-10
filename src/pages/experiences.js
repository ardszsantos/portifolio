import '../styles/experiences.css'
import '../components/expCard'
import ExpCard from '../components/expCard';


const ExperiencesSection = (props) => {
  const grt = '>'  
  return (
    <div {...props} id='experiencias' className="experiences-wrapper">
      <div id='experiences' class="experiences-sub-wrapper">
        <h1>{grt} experiences_</h1>
        <div class="card-div">
          <ExpCard
            image={'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png'}
            title={'Administração de Servidores Linux - SENAI'}
            description={'Curso de 60 horas focado na criação, gerenciamento e manutenção de servidores Linux, com foco em segurança e automação de tarefas.'}
            date={'04/24 - 06/24'}
          />

          <ExpCard
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRU8sOl-pLVoZGWBODPTy-56PeVXMd-gglQ&s'}
            title={'Curso Full Stack Python - EBAC'}
            description={'Curso profissionalizante Full Stack, focado no desenvolvimento full-stack com Python, abordando tópicos de front-end a automação, banco de dados e DevOps.'}
            date={'2023 - Presente'}
          />

          <ExpCard
            image={'https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477'}
            title={'Desenvolvimento Back-End - Code Trouble'}
            description={'Voluntário no desenvolvimento do back-end de uma plataforma colaborativa estilo Stack Overflow. Usando NestJS e Swagger para APIs robustas e documentadas.'}
            date={'2024 - Presente'}
          />

          <ExpCard
            image={'https://veduca.org/wp-content/uploads/2024/03/Alura-oferece-60-mil-vagas-em-cursos-gratuitos-de-Python-e-analise-de-dados.jpg'}
            title={'Cursos Completados - Alura'}
            description={`Completei mais de 20 cursos na plataforma Alura, incluindo áreas de desenvolvimento como Python, JavaScript, HTML, CSS, Machine Learning, e mais. Veja todos os cursos na imagem anexa.`}
            date={'2023 - Presente'}
          />

        </div>
      </div>
    </div>
  );
}

export default ExperiencesSection;