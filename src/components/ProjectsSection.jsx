import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Admin Dashboard',
    description:
      'An advanced MERN stack dashboard with Node.js, Express, and MongoDB on the backend, featuring Material UI, Nivo Charts, and Redux Toolkit for a modern and dynamic interface.',
    // image: '/AdminDashboard.jpg',
    image:
      'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760453508/AdminDashboard_ihl4dg.jpg',
    tags: ['Node js', 'React', 'Material UI', 'Nivo Charts', 'Redux toolkit'],
    demoUrl: 'https://ad-dashboard-one.vercel.app/dashboard',
    github: 'https://github.com/Hassan-Hammoud/Ad-Dashboard-One-Front.git',
  },
  {
    id: 2,
    title: 'Chat App',
    description:
      'A real-time chat application built using the MERN stack and Socket.io, featuring live messaging, user authentication, and an elegant Tailwind CSS interface.',
    // image: '/ChatApp.jpg',
    image:
      'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760453510/ChatApp_fawp0q.jpg',
    tags: [
      'React',
      'Socket.io',
      'TailwindCSS',
      'Real-time Chat',
      'Authentication',
    ],
    demoUrl: 'https://chat-app-gr.vercel.app/',
    github: 'https://github.com/Hassan-Hammoud/Chat-App-GR-Client.git',
  },
  {
    id: 3,
    title: 'MonuehShop',
    description:
      'A sustainable e-commerce platform built with the MERN stack, designed to showcase authentic, high-quality traditional products made by mountain village communities.',
    // image: '/ecommerce.webp',
    image:
      'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760453507/ecommerce_byze0l.webp',

    tags: ['Mern', 'React', 'E-Commerce', 'Bootsrap'],
    demoUrl: 'https://monuehshop.vercel.app/',
    github: 'https://github.com/Final-project-3Ha/deployment-2.git',
  },
  {
    id: 4,
    title: 'MERN Estate',
    description:
      'A full-stack real estate app built with the MERN stack, featuring property listings, user authentication, and Firebase storage. Designed with React, Redux, and TailwindCSS for a modern, seamless experience.',
    // image: '/realEstat.webp',
    image:
      'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760453509/realEstat_rnhfez.webp',
    tags: ['React', 'Node.js', 'Firebase', 'Redux Toolkit', 'TailwindCSS'],
    demoUrl: 'https://mern-estate-v48i.onrender.com/',
    github: 'https://github.com/Hassan-Hammoud/mern-estate-front.git',
  },
  {
    id: 5,
    title: 'YouTube Clone',
    description:
      'A fully responsive YouTube clone built with React, integrating the YouTube Data API to fetch and display real-time video content. Designed with a sleek.',
    // image: '/youTube.webp',
    image:
      'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760453509/youTube_qasgen.webp',
    tags: ['React', 'YouTube API', 'FrontendDevelopment'],
    demoUrl: 'https://youtube-clone-red-iota.vercel.app/',
    github: 'https://github.com/Hassan-Hammoud/YouTube-Clone-GR.git',
  },

  {
    id: 6,
    title: 'Template Three',
    description:
      'A fully responsive multi-section website template built with HTML, CSS, and JavaScript. Ideal for landing pages or personal portfolios.',
    // image: '/PortfolioHa.jpg',
    image:
      'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760453510/PortfolioHa_vwzcas.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    demoUrl: 'https://template-three.onrender.com/#',
    github: 'https://github.com/Hassan-Hammoud/Template-Three.git',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='py-24 px-4 relative'
    >
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my projects, Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground '
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className=' text-muted-foreground text-sm mb-4'>
                  {project.description}
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <Github
                        size={20}
                        className=''
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a
            href='https://github.com/Hassan-Hammoud'
            target='_blank'
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
