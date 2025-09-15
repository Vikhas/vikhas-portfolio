import React from "react";
import { motion } from "framer-motion";

export default function Publications() {
  const publications = [
    {
      title: "Pattern Recognition Algorithm to Detect Suspicious Activities",
      venue: "International Conference on Sustainable Computing and Smart Systems (ICSCSS-2023), India",
      link: "https://ieeexplore.ieee.org/document/10169859",
      year: "2023"
    },
    {
      title: "Effective Marine Animal Detection and Rare Species Classification Using Autonomous Drones",
      venue: "International Conference on Next Generation Computing System (ICNGCS – 2023), India",
      link: "https://drive.google.com/file/d/1_UGlofK2Uo8NL_tCZWmcKNFlLVNjdECk/view",
      year: "2023"
    },
    {
      title: "Standalone Chatbot Application in Python",
      venue: "International Journal for Research in Applied Science & Engineering Technology (IJRASET-2022), India",
      link: "https://www.ijraset.com/best-journal/standalone-chatbot-application-in-python",
      year: "2022"
    }
  ];

  return (
    <section id="publications" className="py-24 relative overflow-hidden">
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
            Research Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Publications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My research contributions in computer vision, machine learning, and software engineering
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {pub.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {pub.venue}
                      </p>
                    </div>
                  </div>
                </div>
                
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 self-start lg:self-center"
                >
                  <span>View Paper</span>
                  <span className="text-lg">📄</span>
                </motion.a>
              </div>
            </motion.div>
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Interested in my research?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              I'm passionate about advancing technology through research. Feel free to reach out to discuss collaboration opportunities or research interests.
            </p>
            <motion.a
              href="mailto:vsgiri@ucdavis.edu"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Discuss Research
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
