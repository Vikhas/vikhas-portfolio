import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "C++", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "SQL", level: 85, color: "from-red-500 to-red-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" }
      ]
    },
    technologies: {
      title: "Technologies & Tools",
      icon: "⚙️",
      skills: [
        { name: "Docker", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", level: 80, color: "from-blue-500 to-indigo-600" },
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Prometheus", level: 75, color: "from-red-400 to-red-600" },
        { name: "VictoriaMetrics", level: 70, color: "from-green-400 to-green-600" }
      ]
    },
    databases: {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", level: 75, color: "from-blue-600 to-indigo-700" }
      ]
    },
    certifications: {
      title: "Certifications",
      icon: "🏆",
      skills: [
        { name: "CCNA", level: 100, color: "from-blue-500 to-indigo-600", isCert: true },
        { name: "Web Development", level: 100, color: "from-purple-500 to-pink-500", isCert: true }
      ]
    }
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-slate-700">{skill.name}</span>
        <span className="text-sm text-slate-500 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
            className="absolute inset-0 bg-white/20 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );

  const CertBadge = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative group"
    >
      <div className={`bg-gradient-to-r ${skill.color} text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="font-semibold text-lg">{skill.name}</div>
            <div className="text-sm opacity-90">Certified</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
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
            Skills & Expertise
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            What I Can Do
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional certifications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-blue-50 border border-slate-200"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
        >
          {activeCategory === "certifications" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <CertBadge key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                {skillCategories[activeCategory].title}
              </h3>
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Additional Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["UNIX", "Telegraf", "JTIMON", "Postman", "REST APIs", "Microservices"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 border border-white/20"
              >
                <div className="text-sm font-semibold text-slate-700">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
