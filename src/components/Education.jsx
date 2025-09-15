import React from "react";

export default function Education() {
  const edu = [
    {degree:"MS Computer Science",school:"University of California, Davis",period:"Sep 2025 – Jun 2027 (expected)"},
    {degree:"BE Computer Science and Engineering",school:"PSG iTech",period:"2019 – 2023, GPA: 9.47/10"}
  ];

  return (
    <section id="education" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-blue-600 mb-12">Education</h2>
        <div className="space-y-6">
          {edu.map((e,i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-6 border hover:border-blue-200 hover:shadow-lg transition">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{e.degree}</h3>
                <span className="text-sm text-gray-500">{e.period}</span>
              </div>
              <p className="text-blue-600 font-medium mt-2">{e.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
