import github from "/public/ecom.png";
import blog from "/public/shorting.png";
import { motion } from "framer-motion";
const projectData = [
  {
    image: github,
    url: "https://mern-ecommerce-1-frontend.onrender.com/",
    title: "UrbanBay: E-Commerce",
    description:
      "A React application that fetches and displays GitHub user profiles and repositories, showcasing user details",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node",
      "MongoDB",
      "FireBase",
    ],
  },
  {
    image: blog,
    url: "https://sortingvisual1.netlify.app/",
    title: "Shorting Visualizer",
    description:
      "Streamlined CRUD operations by implementing an intuitive and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const handleProject = () => {
    window.open(project.url, "_blank");
  };
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          onClick={handleProject}
          className="w-full
cursor-pointer rounded-2x1 transition-all duration-300
hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div
              onClick={handleProject}
              className="text-x1 font-semibold cursor-pointer"
            >
              {project.title}
            </div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col
  items-center justify-center gap-16 p-4 md: px-14 md: py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6x1">
          My Projects
        </h1>
      </ScrollReveal>
      <div
        className="flex w-full max-w-[1000px] flex-col gap-16
  text-white"
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
