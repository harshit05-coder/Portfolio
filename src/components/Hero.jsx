// import image from "/public/image.jpg";
import image_ from "/public/image_.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image_}
            alt="image_"
            className="w-[300px] pt-3 cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] "
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Harshit Singh
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Full Stack Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I am a passionate Full-Stack Developer skilled in JavaScript,
            React.js, Node.js, MongoDB, and Express.js, with a strong foundation
            in Object-Oriented Programming (OOPS). I specialize in creating
            dynamic, interactive web applications with an eye for detail and
            user-centric design, leveraging Firebase for real-time database
            integration, Redux for efficient state management, and Git and
            GitHub for seamless version control and collaboration. Let's build
            something great together!!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
