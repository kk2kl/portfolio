import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Internship (R&D) at Agmo Tech (Agmo Studio)',
    date: '21 July - 12 Oct 2025',
    description: 'Worked in the R&D department focusing on backend API development for Multitenant Chatbot and exploring the Physical AI Robotics Arm project.',
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Working Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div className="flex items-center">
              <Building2 className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-500 dark:text-gray-400">{experience.date}</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {experience.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;