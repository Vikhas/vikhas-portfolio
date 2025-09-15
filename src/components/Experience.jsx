import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer-3",
      company: "Juniper Networks",
      location: "Bangalore, India",
      period: "Jul 2025 – Aug 2025",
      type: "Full-time",
      icon: "🚀",
      color: "from-blue-500 to-indigo-600",
      achievements: [
        "Developed G2 integration tests to validate igp-insights with tsingest, api-server, and Kafka, ensuring accurate anomaly detection and seamless data flow across services.",
        "Improved tsingest scalability from handling just a handful of devices to supporting over a thousand by introducing parallel Kafka consumers, asynchronous publishing, and multi-tenancy support, which eliminated streaming delays."
      ],
      technologies: ["Kafka", "Kubernetes", "Microservices", "CI/CD", "Docker"]
    },
    {
      role: "Software Engineer-2",
      company: "Juniper Networks",
      location: "Bangalore, India",
      period: "Jul 2024 – Jun 2025",
      type: "Full-time",
      icon: "⚙️",
      color: "from-indigo-500 to-purple-600",
      achievements: [
        "Boosted Routing Bot with Kafka-based APIs, response caching & multithreading, improving query responsiveness by 30%.",
        "Integrated Routing Bot into the Paragon ecosystem, containerized microservices on Kubernetes, automated IGP microservice and G1 unit tests in CI/CD, and built rule-based playbooks for OC datapoints — ensuring early bug detection and reducing production issues."
      ],
      technologies: ["Python", "Kafka", "Kubernetes", "Docker", "Prometheus"]
    },
    {
      role: "Software Engineer-1",
      company: "Juniper Networks",
      location: "Bangalore, India",
      period: "Jul 2023 – Jun 2024",
      type: "Full-time",
      icon: "💻",
      color: "from-purple-500 to-pink-600",
      achievements: [
        "Built Routing Bot MVP with Dijkstra’s & dynamic thresholding, and migrated sensor framework from Telegraf to JTIMON.",
        "Deployed in Juniper’s IT network, cutting recovery time by 50% and adding Teams-based real-time alerts.",
        "Added Graceful-Restart support to OpenConfig for config and telemetry streaming."
      ],
      technologies: ["Python", "C++", "REST APIs", "VictoriaMetrics", "Git"]
    },
    {
      role: "Software Engineering Intern",
      company: "Juniper Networks",
      location: "Bangalore, India",
      period: "Jan 2023 – Jun 2023",
      type: "Internship",
      icon: "🎓",
      color: "from-pink-500 to-red-500",
      achievements: [
        "Built an IGP anomaly detection tool with SPF & FIB path validation, improving network reliability by 15%.",
        "Created a Telegraf–Prometheus data pipeline with ALERTA alerts, cutting detection time by 50% on Juniper’s live BNG network."
      ],
      technologies: ["Python", "Git", "Agile", "Testing", "Documentation"]
    },
    {
      role: "Product Developer Intern",
      company: "Kaar Technologies",
      location: "Chennai, India",
      period: "Aug 2021 – Feb 2022",
      type: "Internship",
      icon: "🌐",
      color: "from-green-500 to-teal-500",
      achievements: [
        "Designed and deployed onboarding web application",
        "Built RESTful APIs with Node.js backend",
        "Developed responsive frontend with HTML/CSS",
        "Implemented user authentication and data management"
      ],
      technologies: ["Node.js", "HTML/CSS", "JavaScript", "REST APIs", "MongoDB"]
    }
  ];

  const TimelineItem = ({ experience, index, isLast }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-slate-300 to-slate-200"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-6 w-4 h-4 bg-white rounded-full border-4 border-slate-300 z-10"></div>
      <div className={`absolute left-6 top-6 w-4 h-4 bg-gradient-to-r ${experience.color} rounded-full z-20`}></div>

      <div className="ml-16">
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-xl flex items-center justify-center text-2xl`}>
                {experience.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{experience.role}</h3>
                <p className="text-lg font-semibold text-slate-600">{experience.company}</p>
                <p className="text-sm text-slate-500">{experience.location}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-slate-700">{experience.period}</div>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                experience.type === 'Full-time' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
              }`}>
                {experience.type}
              </span>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-slate-700 mb-4">Key Achievements:</h4>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0`}></div>
                  <span className="text-slate-600 leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-slate-700 mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 bg-gradient-to-r ${experience.color} text-white rounded-lg text-sm font-medium shadow-sm`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
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
            Professional Journey
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A timeline of my professional growth and key contributions across different roles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "2+", icon: "⏱️" },
            { label: "Companies", value: "2", icon: "🏢" },
            { label: "Roles", value: "5", icon: "👔" },
            { label: "Technologies", value: "15+", icon: "🛠️" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
