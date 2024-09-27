export const  colors = ["#172554","#3B0764", "#083344","#052E16"]

const bindStacks = [
    <span>- <a href="https://nextjs.org/" className="font-semibold" target="_blank">Nextjs</a> for the front-end</span>,
    <span>- <a href="https://tailwindcss.com/" className="font-semibold" target="_blank">Tailwind CSS</a> for the styling</span>,
    <span>- <a href="https://nodejs.orj/" className="font-semibold" target="_blank">Node JS</a> for the back-end</span>,
    <span>- <a href="https://firebase.com/" className="font-semibold" target="_blank">Firebase</a> for the database</span>
]

const QrStacks = [ 
    <span>- <a href="https://nextjs.org/" className="font-semibold" target="_blank">Nextjs</a> for the front-end</span>,
    <span>- <a href="https://tailwindcss.com/" className="font-semibold" target="_blank">Tailwind CSS</a> for the styling</span>,
    <span>- <a href="https://nodejs.org/en" className="font-semibold" target="_blank">Node js</a> for the server</span>,
    <span>- <a href="https://nodejs.org/en" className="font-semibold" target="_blank">Express</a> for the back-end</span>,
    <span>- <a href="https://redis.io/" className="font-semibold" target="_blank">Redis</a> for the caching</span>,
    <span>- <a href="https://www.mongodb.com/" className="font-semibold" target="_blank">MongoDB</a> for the database</span>
]

const Loka = [ 
    <span>- <a href="https://nextjs.org/" className="font-semibold" target="_blank">Nextjs</a> for the front-end</span>,
    <span>- <a href="https://tailwindcss.com/" className="font-semibold" target="_blank">Tailwind CSS</a> for the styling</span>,
]


export const projects = [
  {
    id: 1,
    title: "Twitter Clone",
    slug: "twitter-clone",
    type: "Web Application",
    previewImages: ["/projects/previews/tw1.png", "/projects/previews/tw2.png"],
    description: "A social media platform designed to bring people closer together and offers a seamless and engaging experience.",
    demoLink: "https://twitter-clone-three-blond.vercel.app/",
    codeLink: "https://twitter-clone-three-blond.vercel.app/",
    overview: "Twitter Clone is a social media platform featuring real-time chat, notifications, media posting, and group creation/joining capabilities and more. Developed with React using Next.js for the frontend and Firebase for the backend API, with styling implemented using Tailwind CSS, Twitter Clone offers seamless user interaction and content sharing. It showcases modern web development skills, emphasizing user engagement and responsive design.",
    role: "Full Stack Web Developer",
    stacks: bindStacks
  },
  {
    id: 2,
    title: "QrGenerator",
    slug: "qrgenerator",
    type: "Web Application",
    previewImages: ["/projects/previews/qr1.png", "/projects/previews/qr2.png"],
    description: "A web application designed to provide seamless and instant Qr Generator.",
    overview: "QrGenerator is a web application for generate Qr and built using React, Next.js, and Tailwind CSS for the frontend, and Node.js, Typescript. QrGenerator ensures instant and reliable functionality, making it ideal for dynamic and responsive experiences.",
    demoLink: "https://qrcode-generator-elvrby.vercel.app/",
    codeLink: "https://github.com/elvrby/qrcode-generator",
    role: "Full-stack",
    stacks: QrStacks
  },
  {
    id: 3,
    title: "Loka Chips",
    slug: "lokachips",
    type: "Frontend Web Application",
    previewImages: ["/projects/previews/l1.png", "/projects/previews/l2.png"],
    description: "A dynamic and user-friendly e-commerce platform designed to provide a seamless shopping experience.",
    overview: "Loka Chips is an e-commerce platform built as a frontend web application using React, Next.js, and Tailwind CSS. It offers a seamless shopping experience with intuitive user interfaces and robust functionalities, making online shopping efficient and enjoyable.",
    demoLink: "https://loka-chips.vercel.app/",
    codeLink: "https://loka-chips.vercel.app/",
    role: "Front-end",
    stacks: Loka
  },
]


