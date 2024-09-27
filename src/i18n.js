// TRANSLATION
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Hero section
      "greeting": "Hello, I'm",
      "developer_title": "Front End Developer passionate about creating innovative and efficient solutions.",
      "cta": "CONTACT ME",

      // About Me section
      "about_me_title": "> about me_",
      "about_me_description": "I'm 18 years old, completely passionate about coding. Despite my current focus on front-end, I aim to become a full-stack developer. Besides web development, I have experience with process automation using Python and Data Analysis.",
      "interests_title": "Interests",
      "linux_interest_title": "Linux",
      "linux_interest_description": "Kubuntu (native KDE) is my preferred OS for development. Currently, I run a dual boot system with Kubuntu & Windows 10 on my personal machine.",
      "web_dev_interest_title": "Web Development",
      "web_dev_interest_description": "Web development is my main focus area. I have experience with modern technologies like React, Next.js, and Tailwind, and I focus on creating dynamic and responsive interfaces.",
      "ai_interest_title": "Artificial Intelligence",
      "ai_interest_description": "I use AI tools to optimize and accelerate my workflow in web development, leveraging these technologies to enhance productivity and efficiency in my projects.",

      // NavBar section
      "nav_about": "#about",
      "nav_skills": "#skills",
      "nav_projects": "#projects",
      "nav_contact": "#contact",
      "terminal_welcome_message": "Welcome to the terminal! Type 'help' to see available commands.",
      "terminal_error_message": "Command not found!",

      // Card Descriptions (About Me)
      "about_me_description_1": "I am 18 years old, and I am completely passionate about code. Despite my current focus on ",
      "about_me_frontend": "front-end",
      "about_me_description_2": "my goal is to become a ",
      "about_me_fullstack": "fullstack developer. ",
      "about_me_description_3": "In addition to web development, I have experience with process automation using ",
      "about_me_python": "Python",
      "about_me_description_4": "and in Data Analysis.",
      
      // Skills Section
      "skills_title": "> skills_",

    }
  },
  pt: {
    translation: {
      // Hero section
      "greeting": "Olá, sou",
      "developer_title": "Desenvolvedor Front End apaixonado por criar soluções inovadoras e eficientes.",
      "cta": "ENTRE EM CONTATO",

      // About Me section
      "about_me_title": "> sobre mim_",
      "about_me_description": "Tenho 18 anos, sou completamente apaixonado por código. Apesar do meu foco atual em front-end, tenho como objetivo me tornar um desenvolvedor fullstack. Além do desenvolvimento web, tenho experiência com automação de processos usando Python e Análise de Dados.",
      "interests_title": "Interesses",
      "linux_interest_title": "Linux",
      "linux_interest_description": "Kubuntu (nativo com KDE) é meu OS preferido para desenvolvimento. Atualmente, uso um sistema de dual boot na minha máquina pessoal com Kubuntu & Windows 10.",
      "web_dev_interest_title": "Desenvolvimento Web",
      "web_dev_interest_description": "O desenvolvimento web é minha principal área de foco. Tenho experiência com tecnologias modernas como React, Next.js e Tailwind, focando na criação de interfaces dinâmicas e responsivas.",
      "ai_interest_title": "Inteligência Artificial",
      "ai_interest_description": "Utilizo ferramentas de IA para otimizar e acelerar meu fluxo de trabalho no desenvolvimento web, aproveitando essas tecnologias para aprimorar a produtividade e a eficiência em meus projetos.",

      // NavBar section
      "nav_about": "#sobre",
      "nav_skills": "#habilidades",
      "nav_projects": "#projetos",
      "nav_contact": "#contato",
      "terminal_welcome_message": "Bem-vindo ao terminal! Digite 'help' para ver os comandos disponíveis.",
      "terminal_error_message": "Comando não encontrado!",

      // Card Descriptions (About Me)
      "about_me_description_1": "Tenho 18 anos, sou completamente apaixonado por código. Apesar do meu foco atual em ",
      "about_me_frontend": "front-end",
      "about_me_description_2": "tenho como objetivo me tornar um ",
      "about_me_fullstack": "desenvolvedor fullstack. ",
      "about_me_description_3": "Além do desenvolvimento web, tenho experiência com automação de processos usando ",
      "about_me_python": "Python",
      "about_me_description_4": "e em Análise de Dados.",

      // Skills Section
      "skills_title": "> habilidades_",
      
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
