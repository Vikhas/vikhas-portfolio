import React from "react";
import { motion } from "framer-motion";
import profileImg from "../images/vik2.jpg";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "2" }
  ];

  const interests = [
    { icon: "🤖", title: "AI & Machine Learning", desc: "Deep learning, computer vision, and intelligent systems" },
    { icon: "☁️", title: "Cloud & DevOps", desc: "Kubernetes, Docker, and scalable infrastructure" },
    { icon: "🔧", title: "Full-Stack Development", desc: "Building end-to-end applications and microservices" },
    { icon: "📊", title: "Data Engineering", desc: "Data pipelines, analytics, and real-time processing" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
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
            About Me
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Get to Know Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate software engineer crafting intelligent solutions and scalable systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl rotate-3"></div>
              <img 
                src={profileImg} 
                alt="Vikhas Somasundaram Giri"
                className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
            >
              💻
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
            >
              🚀
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Software Engineer & Problem Solver
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                I'm a passionate Software Engineer with full-stack experience, specializing in building 
                robust microservices and scalable systems. Currently pursuing my MS in Computer Science 
                at <span className="font-bold text-slate-800">UC Davis</span>, I'm deeply interested in AI, computer vision, and data-driven intelligent systems.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With experience at <span className="font-bold text-slate-800">Juniper Networks</span> and a strong foundation in both theoretical knowledge 
                and practical implementation, I love tackling complex challenges and turning ideas into reality.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-4">What I'm Passionate About</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I love exploring new technologies and solving complex problems across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {interest.icon}
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">{interest.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{interest.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
