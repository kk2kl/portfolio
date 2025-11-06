import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Astro-Nacsa Coding Challenge 2024',
      position: 'Third Place Winner',
      team: 'Team Meta Knight (Team Leader)',
      image: './images/award1.jpg'
    },
    {
      title: 'Petronas Chess Innovation Challenge 2024',
      position: '2nd Runner Up',
      image: './images/award2.jpg'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Awards & Honours
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {award.position}
                    </p>
                    {award.team && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {award.team}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;