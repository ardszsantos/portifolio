import ProjectCard from '../components/projectCard';
import '../styles/projects.css'
import camisasTop from '../assets/images/ecommerce.png'
import camisasTopA from '../assets/images/ecommerce2.png'


const ProjectsSection = (props) => {
  return (  
    <div {...props} id='projects' className="projects-wrapper">
      <h1 id='projetos'> projects_</h1>
      <ProjectCard imgUrl={camisasTop} title={'camisasTop - Store'} description={`Projeto desenvolvido com Next.js e TypeScript, com autenticação via Clerk Auth, banco de dados gerido por neonDB e Prisma, e integração de pagamentos usando Stripe. O deploy é feito na Vercel, e as principais funcionalidades incluem a exibição de produtos e gestão de pedidos, com foco em desempenho e design responsivo.`}/>
      <ProjectCard imgUrl={camisasTopA} title={'camisasTop - Admin'} description={`Plataforma de administração construída com Next.js e TypeScript para gerenciar o ecommerce-store. Usa Clerk Auth para controle de acesso, Prisma para comunicação com neonDB, e Vercel para deploy, oferecendo funcionalidades de gerenciamento de produtos e categorias.`} />
    </div>
  );
}

export default ProjectsSection