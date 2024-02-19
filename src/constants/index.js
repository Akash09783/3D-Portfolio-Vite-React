import {
  
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    
    carrent,
    jobit,
    tripguide,
    threejs,
    logo,
  } from "../assets";
  import roomies from '../assets/roomie.png'
  import yt from '../assets/yt.png'
  import me1 from '../assets/me.png'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Js ",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: " Node.js",
      icon: creator,
    },

    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
   
  ];
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company_name: "Self-Learning",
      icon: logo,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Conducted research projects gathering data and information from a variety of sources.",
        "Conducted research projects, gathering data and information from a variety of sources.Handled scripting tasks for debugging and automation.",
        "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.Used Javascript, MongoDb and HTML to develop app-solutions.",
        "Reviewed code, debugged problems, and corrected issues.Used NodeJS, MonogoDb/No-SQL to develop and manage databases.Developed and designed API's in Backend .Learned new emerging technologies and took initiative to offer technical direction and creative solutions.",
        
      ],
    },
    
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Roomie Chat App",
      description:
        "The Roomie Chat App is a revolutionary platform designed to enhance communication and collaboration among friends. This innovative app provides a seamless and user-friendly interface that allows friends to connect, share information, and stay organized. With the Roomie Chat App, users can easily coordinate household tasks, manage expenses, and plan social events, all in one convenient location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
            name: "restApi",
            color: "pink-text-gradient",
          },
      ],
      image: roomies,
      source_code_link: "https://github.com/Akash09783/Roomie-Chat-App-MERN-Deployment-",
    },
    {
      name: "YouTube_Clone",
      description:
        "Through my expertise and technical prowess, I have successfully developed a YouTube clone that mirrors the essence of the original platform. This remarkable achievement required extensive research and meticulous coding to ensure that users can enjoy a seamless video-sharing experience. From the intuitive user interface to the robust backend infrastructure, every aspect of this clone has been carefully crafted to provide a familiar and engaging environment for users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Api",
          color: "pink-text-gradient",
        },
      ],
      image: yt,
      source_code_link: "https://github.com/Akash09783/Youtube-Clone-React-Js-",
    },
    
    {
      name: "3D PortFolio",
      description:
        "The 3D Portfolio project not only showcases my technical proficiency but also demonstrates my creativity and attention to detail. Each aspect of the project has been carefully crafted to provide an engaging and interactive experience for viewers. By incorporating interactive elements and seamless navigation, I have ensured that users can easily explore and appreciate the different facets of my portfolio. Overall, this project serves as a testament to my dedication and passion for my craft.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three js",
          color: "pink-text-gradient",
        },
      ],
      image: me1,
      source_code_link: "https://github.com/Akash09783/3D-Portfolio-Vite-React",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };