import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Pattern Recognition for Suspicious Activities",
      desc: "Deep learning pipeline comparing MobileNetV2 and CNN; CNN achieved 95% accuracy on surveillance data classification.",
      tech: ["Python", "Deep Learning", "Computer Vision", "OpenCV", "TensorFlow"],
      category: "AI/ML",
      icon: "👁️",
      color: "from-purple-500 to-pink-500",
      features: ["95% Accuracy", "Real-time Processing", "Computer Vision"],
      status: "Research",
      githubLink: "https://github.com/Vikhas/PATTERN-RECOGNITION-ALGORITHM-TO-DETECT-SUSPICIOUS-ACTIVITIES"
    },
    {
      name: "Itech Expo Application",
      desc: "Real-time crowd updates & event details web app used by 500+ users with Node.js, MongoDB, and modern frontend technologies.",
      tech: ["React", "Node.js", "MongoDB", "Real-time", "WebSocket"],
      category: "Full-Stack",
      icon: "🌐",
      color: "from-green-500 to-teal-500",
      features: ["500+ Users", "Real-time Updates", "Event Management"],
      status: "Deployed",
      githubLink: "https://github.com/Vikhas/ITECH-EXPO"
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setHoveredProject(index)}
      onHoverEnd={() => setHoveredProject(null)}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Status badge */}
      <div className="absolute top-6 right-6">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          project.status === 'Production' ? 'bg-green-100 text-green-700' :
          project.status === 'Deployed' ? 'bg-blue-100 text-blue-700' :
          'bg-purple-100 text-purple-700'
        }`}>
          {project.status}
        </span>
      </div>

      {/* Category and icon */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-2xl`}>
          {project.icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{project.category}</div>
        </div>
      </div>

      {/* Project title */}
      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed mb-6 text-lg">
        {project.desc}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features:</h4>
        <div className="flex flex-wrap gap-2">
          {project.features.map((feature, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm font-medium shadow-sm`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        className="flex gap-3 relative z-10"
      >
        <a
          href={project.githubLink || "#"}
          target={project.githubLink ? "_blank" : "_self"}
          rel={project.githubLink ? "noopener noreferrer" : ""}
          className={`flex-1 py-3 px-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center block`}
        >
          View Details
        </a>
      </motion.div>

      {/* Hover effect overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredProject === index ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-3xl pointer-events-none z-0"
      />
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
          >
            My Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my most impactful projects spanning AI/ML, backend systems, and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Interested in seeing more?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              I have several other projects and contributions. Feel free to reach out to discuss my work or potential collaborations.
            </p>
            <motion.a
              href="https://github.com/Vikhas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
