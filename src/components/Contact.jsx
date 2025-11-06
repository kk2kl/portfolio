import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="tel:+60193158928"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-600 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">+60 19-315 8928</p>
              </div>
            </a>

            <a
              href="mailto:lawyiyang08@gmail.com"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-600 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">lawyiyang08@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://www.linkedin.com/in/law-y-904b30237"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl 
                       transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;