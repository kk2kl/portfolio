import { motion } from 'framer-motion';

const Projects = () => {
  const base = import.meta.env.BASE_URL || '/'
  const projects = [
    {
      title: 'Cybersecurity Android Mobile App',
      short: 'Android app with classifiers for password strength, spam, phishing URLs and malware detection.',
      role: 'Team Leader',
      languages: 'Flutter (Frontend), Python (Backend)',
      features: [
        'Password Strength Classifier',
        'Spam Classifier',
        'Malicious/Phishing URL Classification',
        'Malware Detection',
        'Spam Call Detector',
        'Report and Feedback',
      ],
      image: `${base}images/cybersecurity.jpg`,
    },
    {
      title: 'ROS-based Deep Learning Mobile Robot',
      short: 'Mobile robot using 3D depth camera and YOLO for fruit ripeness detection and autonomous harvesting.',
      role: 'Team Leader',
      languages: 'Flutter, Python',
      description:
        'Mobile Robot mounted with acuators and sensors that will use 3D Depth Camera with Yolo to perform fruit ripeness classification and perform robotics arm control to harvest the fruits. Using AI Algorithm such as A* Search to find the shortest path for movement and use Robot Operating System(ROS) to perform Simultaneous Localization and Mapping (SLAM) and Navigation.',
      image: `${base}images/robot.jpg`,
    },
    {
      title: 'End-to-End AIoT Medical Adherence System',
      short: 'AIoT system for medication adherence with radar sensing and TinyML-based pill detection.',
      role: 'Team Leader',
      languages: 'React.js, Flutter, Flask, PostgreSQL',
      description:
        'This Project aims to provide a 5G-enabled solution for Medication Adherence, Real-Time Health Monitoring using HLK-LD6002 radar-based sensors for non-invasive, continuous monitoring of heart rate and respiratory patterns. Action Recognition is performed by using TensorFlow Lite for running the pill detection model, MediaPipe for face detection, pose estimation, and hand tracking. We use Figma to design wireframes for this web application. Electronics design is done using the software Proteus. 3D mechanical design is done using software Freecad and Ultimaker Cura. PostgreSQL is used as database for information storage.',
      image: `${base}images/aiot.jpg`,
    },
    {
      title: 'Hospital Information System',
      short: 'Appointment and patient record management system for hospitals.',
      languages: 'C#, ASP.NET Core, MS SQL Server',
      description: 'Developed an appointment and patient record system using Microsoft technologies.',
      image: `${base}images/hospital.jpg`,
    },
    {
      title: 'Tidal Energy Harvesting System',
      short: 'Dashboard and Blender prototype for tidal energy harvesting with environmental monitoring.',
      languages: 'Javascript, Blender',
      description:
        'Design the dashboard application for Tidal Energy Harvesting and use the Blender software to design the prototype for the Tidal Energy Harvesting System.',
      image: `${base}images/tidal.jpg`,
    },
    {
      title: 'Neural Network Design - Hybrid Energy Storage',
      short: 'Designed and evaluated ANN/CNN/TCN/LSTM models and deployed TinyML on microcontrollers.',
      languages: 'Python, C, TensorFlow, TinyML, Eloquent',
      description:
        'Using Tensorflow to train AI Model to reduce the latency in the energy source selection (supercapacitors or batteries) in Fully Active Hybrid Energy Storage System, experiment with various types of neural networks, such as ANN, CNN, TCN, LSTM and Ensemble Learning. The neural network model is converted into tflite format and subsequently converted into .h header using TinyML techniques to ensure the deployment in microcontroller with limited computational power and memory resources. Using KiCAD software to design PCB Board. Using Tkinter and Sqlite to design the GUI Dashboard for Real Time Data Display. Write the embedded system codes to interact with actuators and sensors.',
      image: `${base}images/fyp.jpg`,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#020617] relative">
      <div className="absolute inset-0 bg-[url('/circuit.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300 group card-futuristic"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="text-blue-400 mb-2 font-medium">{project.role}</p>
                  )}
                  {/* short description: always visible */}
                  {project.short && (
                    <p className="text-gray-300 text-sm mb-3">
                      {project.short}
                    </p>
                  )}
                  <p className="text-blue-300/80 text-sm mb-4 font-medium">
                    {project.languages}
                  </p>
                  {project.features ? (
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      {project.features.map((feature, i) => (
                        <li key={i} className="group-hover:text-blue-300 transition-colors">{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">University Level / Personal Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: 'Smart IoT Library Management System',
                desc: 'Construct the hardware and software for this IoT System',
                img: `${base}images/yy1.jpg`,
              },
              {
                title: 'Smart Watering System',
                desc: 'Completed the embedded system design for the automatic plant watering system',
                img: `${base}images/yy2.jpg`,
              },
              {
                title: 'Analog Electronics Audio Amplifier',
                desc: 'Completed the Op-amp LM386 and Voltage Regulator Circuit design to amplify microphone output or generate audio tones.',
                img: `${base}images/yy3.jpg`,
              },
              {
                title: 'PLC Project',
                desc: 'Learn how to use Omron PLC Ladder Logic Programming to control actuators and sensors.',
                img: `${base}images/yy4.jpg`,
              },
              {
                title: 'Mobile Robot',
                desc: 'Design hardware and software for mobile robots, with a Bluetooth controller for movement.',
                img: `${base}images/yy5.jpg`,
              },
              {
                title: 'ROS Assignments',
                desc: 'Uses ROS2 nodes, topics, publishers/subscribers and custom messages for navigation/control packages.',
                img: `${base}images/yy6.jpg`,
              },
              {
                title: 'Intelligent Visual Surveillance System',
                desc: 'Computer vision: background subtraction, motion detection, morphological ops, contour detection and object classification.',
                img: `${base}images/yy7.jpg`,
              },
              {
                title: 'Shape Classifier (Streamlit & Sklearn)',
                desc: 'Shape classifier using Streamlit, sklearn (KNN, SVM, Decision Tree, Random Forest, Logistic Regression, Gradient Boosting).',
                img: `${base}images/yy8.jpg`,
              },
            ].map((u, i) => (
              <div key={i} className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group">
                <img src={u.img} alt={u.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-left">
                    <h4 className="text-sm font-semibold text-white">{u.title}</h4>
                    <p className="text-xs text-gray-300 mt-1">{u.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;