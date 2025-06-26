// TRANSLATION
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



const resources = {
  

  en: {
    translation: {
      // Hero section
      "greeting": "Hello, I'm",
      "developer_title": "Front End Developer",
      "cta": "CONTACT ME",

      // About Me section
      "about_me_title": "> about me_",
      "about_me_description": "I'm 18 years old, completely passionate about coding. Despite my current focus on front-end, I aim to become a full-stack developer. Besides web development, I have experience with process automation using Python and Data Analysis.",
      "interests_title": "Interests",
      "linux_interest_title": "Linux",
      "linux_interest_description": "OpenSUSE (KDE Plasma) is my preferred OS for development. Currently, I run a dual boot system with OpenSUSE & Windows 11 on my personal machine.",
      "web_dev_interest_title": "Web Development",
      "web_dev_interest_description": "Web development is my main focus area. I have experience with modern technologies like React, Next.js, and Tailwind, and I focus on creating dynamic and responsive interfaces.",
      "ai_interest_title": "Artificial Intelligence",
      "ai_interest_description": "I use AI tools to optimize and accelerate my workflow in web development, leveraging these technologies to enhance productivity and efficiency in my projects.",

      // NavBar section
      "nav_experiencias": "#experiences",
      "nav_about": "#about",
      "nav_projects": "#projects",
      "nav_contact": "#contact",
      "terminal_welcome_message": "type: help ",
      "terminal_error_message": "Command not found!",
      "terminal_help_message": "Available cmds: cd (hero, about, projects, contact) | echo (text) | exit ",

      "about_me_description_1": "I'm a",
      "about_me_frontend": "front-end developer",
      "about_me_description_2": "with experience in",
      "about_me_fullstack": " full-stack projects",
      "about_me_description_3": "mainly working with modern web technologies.",
      "about_me_description_4": "",

          //experiences
      "experiences-title": "> experiences_",
      "experiences-senaiTitle": "Linux Server Administration - SENAI",
      "experiences-senaiDescription": "60-hour course focused on the creation, management, and maintenance of Linux servers, with a focus on security and task automation.",
      "experiences-senaiDate": "04/24 - 06/24",
      "experiences-senaiTitle-back": "Linux Server Administration",
      "experiences-senaiDescription-back": "The Linux Server Administration course at SENAI equipped me with the skills to install, configure, and manage Linux servers. I gained experience in handling various services such as DHCP, DNS, LDAP, file, web, and remote access servers, as well as firewall management. This training provided the expertise needed to manage Linux systems and ensure secure and efficient server operation.",


      "experiences-ebacTitle": "Full Stack Python Course - EBAC",
      "experiences-ebacDescription": "Professional Full Stack course focused on full-stack development with Python, covering topics from front-end to automation, databases, and DevOps.",
      "experiences-ebacDate": "2023 - Present",
      "experiences-ebacTitle-back": "Full Stack Python Course",
      "experiences-ebacDescription-back": "The Full Stack Python course at EBAC provided comprehensive training in front-end and back-end development. I gained expertise in HTML, CSS, and JavaScript for building responsive interfaces, as well as mastering Python for server-side logic. The course covered database management, API development and integration, and the creation of scalable, real-world applications. I also worked on multiple full-stack projects that reinforced these skills, preparing me to deliver professional solutions in a variety of tech environments.",  

      "experiences-codeTroubleTitle": "Full-Stack Development - Code Trouble",
      "experiences-codeTroubleDescription": "Volunteer in the development of a collaborative platform similar to Stack Overflow. I work on both front-end and back-end, using technologies like React, NestJS, and TypeORM.",
      "experiences-codeTroubleDate": "2024 - Present",
      "experiences-codeTroubleTitle-back": "Full-Stack Development",
      "experiences-codeTroubleDescription-back": "At Code Trouble, I work on full-stack development, contributing to database structuring with TypeORM and Aiven, and building robust APIs with NestJS. On the front-end, I develop interfaces using React, ensuring a functional and intuitive user experience. I also collaborate on API documentation with Swagger and the deployment process on Beanstalk, ensuring efficient delivery of project features.",


      "experiences-aluraTitle": "Courses Completed - Alura",
      "experiences-aluraDescription": "I have completed a lot of courses on the Alura platform, including development areas such as Python, JavaScript, HTML, CSS, GO, C and more.",
      "experiences-aluraDate": "2023 - Present",
      "experiences-aluraTitle-back": "Alura Courses",
      "experiences-aluraDescription-back": "The Alura courses provided me with a strong foundation in web development, including HTML, CSS and JavaScript. I completed modules covering everything from basic structure and responsiveness to more advanced topics such as DOM manipulation, object-oriented programming, and creating dynamic pages with JavaScript. I also gained knowledge in Python, with a focus on data science, and Machine Learning using SKLearn. Additionally, I explored Arduino programming and web development environments, further deepening my understanding of building dynamic and scalable applications.",



      // Projects Section
      "projects_title": "> projects_",
      "project1_title": "camisasTop - Store",
      "project1_description": "Full-stack online store for selling any product.",
      "project1_detailed_description": "A complete e-commerce platform with both front-end and back-end implementation, providing features like product management, cart, and payment integration for seamless user experience.",

      "project2_title": "Code Trouble Web - WIP",
      "project2_description": "Interactive front-end app that helps developers track and resolve code issues.",
      "project2_detailed_description": "Code Trouble leverages a contemporary tech stack—React, Vite, and TypeScript for structure and performance, Sass for styling, and Framer Motion for smooth animations—to create a fast, responsive, and visually engaging user experience. With robust form handling via React Hook Form and rich text editing powered by React Quill, Code Trouble streamlines the process of reporting and tracking coding problems, making it easier for teams to collaborate on debugging and improving their codebases.",   
      
      "project3_title": "Clinica Santé",
      "project3_description": "Landing page built for a dentistry company.",
      "project3_detailed_description": "Landing page created to showcase the services of Clinica Santé.",

      "project4_title": "URL Shortener",
      "project4_description": "Simple URL shortener.",
      "project4_detailed_description": "This project uses React and Bootstrap on the front end to create a simple, responsive user interface. On the back end, NestJS is used with TypeORM for database management, leveraging MySQL hosted on Aiven. The project also integrates Swagger for automatic API documentation, making it easier to view and use routes. The shortener allows users to input long URLs and get shortened URLs with immediate redirection.",

      "project5_title": "Corinthians Panel",
      "project5_description": "News page about Corinthians built with NewsAPI.",
      "project5_detailed_description": "A simple page that displays news about Corinthians, using the NewsAPI to get the latest news and display them in a clean and responsive layout.",

      "project6_title": "Toque AI",
      "project6_description": "QR Code-based service to locate missing people, pets, and objects.",
      "project6_detailed_description": "Toque AI is a QR Code-based platform for identifying and recovering lost people, pets, and objects, as well as replacing doorbells and intercoms in residences. I work as a front-end developer on the website and app, focusing on responsiveness, performance, and user experience.",

      // Footer Section (new translations)
      "footer_all_rights": "All rights reserved.",
      "footer_name": "Alexandre Rodrigues",

      // Contact Section (new translations)
      "contact_title": "Get in Touch",
      "contact_whatsapp": "11 99870-1122",
      "contact_email": "alexandrerdrsantos01@gmail.com",
      "contact_instagram": "@llexanddre",
      "contact_discord": "ale.devv",
      "contact_form_email": "Your Email",
      "contact_form_subject": "Subject",
      "contact_form_message": "Your Message",
      "contact_form_button": "Send Message"

      

    }
  },
  pt: {
    translation: {
      // Hero section
      "greeting": "Olá, sou",
      "developer_title": "Desenvolvedor Front End",
      "cta": "ENTRE EM CONTATO",

      // About Me section
      "about_me_title": "> sobre mim_",
      "about_me_description": "Tenho 18 anos, sou completamente apaixonado por código. Apesar do meu foco atual em front-end, tenho como objetivo me tornar um desenvolvedor fullstack. Além do desenvolvimento web, tenho experiência com automação de processos usando Python e Análise de Dados.",
      "interests_title": "Interesses",
      "linux_interest_title": "Linux",
      "linux_interest_description": "OpenSUSE (KDE Plasma) é meu OS preferido para desenvolvimento. Atualmente, uso um sistema de dual boot na minha máquina pessoal com OpenSUSE & Windows 11.",
      "web_dev_interest_title": "Desenvolvimento Web",
      "web_dev_interest_description": "O desenvolvimento web é minha principal área de foco. Tenho experiência com tecnologias modernas como React, Next.js e Tailwind, focando na criação de interfaces dinâmicas e responsivas.",
      "ai_interest_title": "Inteligência Artificial",
      "ai_interest_description": "Utilizo ferramentas de IA para otimizar e acelerar meu fluxo de trabalho no desenvolvimento web, aproveitando essas tecnologias para aprimorar a produtividade e a eficiência em meus projetos.",

      // NavBar section
      "nav_experiencias": "#experiencias",
      "nav_about": "#sobre",
      "nav_projects": "#projetos",
      "nav_contact": "#contato",
      "terminal_welcome_message": "Digite: help ",
      "terminal_error_message": "Comando não encontrado!",
      "terminal_help_message": "Comandos disponíveis: cd (ola, sobre, projetos, contato) | echo (texto) | exit ",

      // Card Descriptions (About Me)
      "about_me_description_1": "Sou um",
      "about_me_frontend": "desenvolvedor front-end",
      "about_me_description_2": "com experiência em",
      "about_me_fullstack": " projetos full-stack",
      "about_me_description_3": "atuando principalmente com tecnologias web modernas.",
      "about_me_description_4": "",

      //experiences

      "experiences-title": "> experiências_",
      "experiences-senaiTitle": "Administração de Servidores Linux - SENAI",
      "experiences-senaiDescription": "Curso de 60 horas focado na criação, gerenciamento e manutenção de servidores Linux, com foco em segurança e automação de tarefas.",
      "experiences-senaiDate": "04/24 - 06/24",
      "experiences-senaiTitle-back": "Administração de Servidores Linux",
      "experiences-senaiDescription-back": "O curso de Administração de Servidores Linux do SENAI me capacitou a instalar, configurar e gerenciar servidores Linux. Adquiri experiência no manuseio de diversos serviços como DHCP, DNS, LDAP, servidores de arquivos, web e acesso remoto, além de gerenciamento de firewall. Este treinamento me proporcionou a expertise necessária para gerenciar sistemas Linux e garantir a operação segura e eficiente dos servidores.",

      "experiences-ebacTitle": "Curso Full Stack Python - EBAC",
      "experiences-ebacDescription": "Curso profissionalizante Full Stack, focado no desenvolvimento full-stack com Python, abordando tópicos de front-end a automação, banco de dados e DevOps.",
      "experiences-ebacDate": "2023 - Presente",
      "experiences-ebacTitle-back": "Curso Full Stack Python",
      "experiences-ebacDescription-back": "O curso Full Stack Python da EBAC proporcionou uma formação completa em desenvolvimento front-end e back-end. Dominei HTML, CSS e JavaScript para a construção de interfaces responsivas, além de Python para lógica de servidor. O curso abrangeu gerenciamento de bancos de dados, desenvolvimento e integração de APIs e a criação de aplicações escaláveis em cenários reais. Trabalhei em diversos projetos full-stack que reforçaram essas habilidades, preparando-me para entregar soluções profissionais em diferentes ambientes de tecnologia.",
    
    "experiences-codeTroubleTitle": "Desenvolvimento Full-Stack - Code Trouble",
    "experiences-codeTroubleDescription": "Voluntário no desenvolvimento de uma plataforma colaborativa estilo Stack Overflow. Trabalho no front-end e back-end, utilizando tecnologias como React, NestJS e TypeORM.",
    "experiences-codeTroubleDate": "2024 - Presente",
    "experiences-codeTroubleTitle-back": "Desenvolvimento Full-Stack",
    "experiences-codeTroubleDescription-back": "No Code Trouble, atuo no desenvolvimento full-stack, contribuindo para a estruturação do banco de dados com TypeORM e Aiven, e na criação de APIs robustas com NestJS. No front-end, desenvolvo interfaces utilizando React, garantindo uma experiência de usuário funcional e intuitiva. Também colaboro na documentação das APIs com Swagger e no processo de deploy no Beanstalk, assegurando a entrega eficiente das funcionalidades.",

      "experiences-aluraTitle": "Cursos Completados - Alura",
      "experiences-aluraDescription": "Concluí diversos cursos na plataforma Alura, incluindo áreas de desenvolvimento como Python, JavaScript, HTML, CSS, GO, C entre outros.",
      "experiences-aluraDate": "2023 - Presente",
      "experiences-aluraTitle-back": "Cursos Completados",
      "experiences-aluraDescription-back": "Os cursos da Alura proporcionaram uma sólida base em desenvolvimento web, incluindo HTML, CSS e JavaScript. Completei módulos que abordaram desde conceitos básicos de estrutura e responsividade até tópicos mais avançados como manipulação do DOM, programação orientada a objetos e a criação de páginas dinâmicas com JavaScript. Também adquiri conhecimentos em Python, com foco em ciência de dados, e Machine Learning utilizando SKLearn. Além disso, tive contato com programação de Arduino e ambientes de desenvolvimento web, aprofundando meu entendimento na criação de aplicações dinâmicas e escaláveis.",


      // Projetos
      "projects_title": "> projetos_",
      "project1_title": "camisasTop - Loja",
      "project1_description": "Loja online full-stack feita para vender qualquer produto.",
      "project1_detailed_description": "Uma plataforma completa de e-commerce, com implementação de front-end e back-end, oferecendo recursos como gerenciamento de produtos, carrinho e integração de pagamentos para uma experiência de usuário fluida.",

      "project2_title": "Code Trouble Web - WIP",
      "project2_description": "Aplicação front-end interativa que ajuda desenvolvedores a gerenciar e resolver problemas de código.",
      "project2_detailed_description": "O Code Trouble utiliza uma stack tecnológica contemporânea — React, Vite e TypeScript para estrutura e desempenho, Sass para estilização, e Framer Motion para animações suaves — para criar uma experiência de usuário rápida, responsiva e visualmente envolvente. Com um gerenciamento robusto de formulários via React Hook Form e edição de texto enriquecido com React Quill, o Code Trouble simplifica o processo de relatar e rastrear problemas de código, facilitando a colaboração entre equipes na depuração e melhoria de suas bases de código.",

      "project3_title": "Clinica Santé",
      "project3_description": "Landing page criada para uma empresa de odontologia.",
      "project3_detailed_description": "Landing page criada para apresentar os serviços da Clínica Santé.",

      "project4_title": "Encurtador de URL",
      "project4_description": "Encurtador de URL simples.",
      "project4_detailed_description": "Este projeto utiliza React e Bootstrap no front-end para criar uma interface de usuário simples e responsiva. No back-end, é utilizado NestJS com TypeORM para gerenciamento de banco de dados, utilizando MySQL hospedado na Aiven. O projeto também integra Swagger para documentação automática da API, facilitando o uso e a visualização das rotas. O encurtador permite que os usuários insiram URLs longas e obtenham URLs curtas com redirecionamento imediato.",

      "project5_title": "Painel Corinthians",
      "project5_description": "Página de notícias sobre o Corinthians utilizando a NewsAPI.",
      "project5_detailed_description": "Uma página simples que exibe notícias sobre o Corinthians, utilizando a API do NewsAPI para obter as últimas notícias e exibi-las em um layout limpo e responsivo.",

      "project6_title": "Toque AI",
      "project6_description": "Serviço baseado em QR Code para localizar pessoas, animais de estimação e objetos perdidos.",
      "project6_detailed_description": "A Toqueai é uma plataforma baseada em QR Code para identificação e recuperação de pessoas, pets e objetos perdidos, além de substituir campainhas e porteiros em residências. Atuo como desenvolvedor front-end no desenvolvimento do site e aplicativo, focando em responsividade, performance e experiência do usuário.",

      // Footer Section (new translations)
      "footer_all_rights": "Todos os direitos reservados.",
      "footer_name": "Alexandre Rodrigues",

      // Contact Section (new translations)
      "contact_title": "Entre em Contato",
      "contact_whatsapp": "11 99870-1122",
      "contact_email": "alexandrerdrsantos01@gmail.com",
      "contact_instagram": "@llexanddre",
      "contact_discord": "ale.devv",
      "contact_form_email": "Seu Email",
      "contact_form_subject": "Assunto",
      "contact_form_message": "Sua Mensagem",
      "contact_form_button": "Enviar Mensagem"

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
