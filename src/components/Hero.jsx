import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Starfield from './Starfield';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden">
  {/* Galaxy background effect */}
  <Starfield count={160} color="#9be7ff" interactive={true} />
    <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-40 animate-twinkle z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Hi, I'm Yi Yang 👋
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I am a fresh graduate and a passionate AI learner with a deep curiosity to explore every aspect of artificial intelligence — from the fundamentals of neural network design to real-world applications across various domains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="#projects"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium 
                        hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105
                        border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm"
            >
              Explore More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <a
              href="#about"
              className="inline-block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowDown className="w-8 h-8 mx-auto animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;