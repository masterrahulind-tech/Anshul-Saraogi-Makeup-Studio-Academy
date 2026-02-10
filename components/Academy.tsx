
import React from 'react';
import { GraduationCap, Clock, Award, CheckCircle2 } from 'lucide-react';
import { academyCourses, academyImages } from '../data/mock';

const Academy: React.FC = () => {
  return (
    <section id="academy" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#f7f5f2] rounded-full -z-10"></div>
            <img
              src={academyImages[0]}
              alt="Makeup Training Phase 1"
              className="rounded-[2rem] shadow-xl w-full h-[300px] object-cover mt-8"
            />
            <img
              src={academyImages[1]}
              alt="Makeup Training Phase 2"
              className="rounded-[2rem] shadow-xl w-full h-[300px] object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#61525a] text-white p-6 rounded-3xl z-20 shadow-xl border-4 border-white max-w-[180px] text-center">
              <GraduationCap size={32} className="text-[#fad24b] mx-auto mb-2" />
              <span className="font-bold text-sm uppercase tracking-tighter block">Certified Academy</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-[#61525a] tracking-[0.2em] uppercase mb-4">Professional Academy</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1e1919] mb-8">Transform Passion <br/> Into Profession</h3>
            
            <p className="text-[#736c64] text-lg mb-8 leading-relaxed">
              Anshul Saraogi Makeup Academy offers industry-leading makeup courses designed for aspiring artists. Learn latest techniques with hands-on training.
            </p>

            <div className="space-y-6">
              {academyCourses.map((course) => (
                <div key={course.id} className="group p-6 rounded-3xl border border-gray-100 hover:border-[#61525a]/30 hover:bg-[#fdfbf9] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-[#1e1919] group-hover:text-[#61525a] transition-colors">{course.title}</h4>
                    {course.certification && (
                      <span className="bg-[#61525a]/10 text-[#61525a] text-[10px] font-bold px-2 py-1 rounded-full flex items-center space-x-1 uppercase">
                        <Award size={10} />
                        <span>Certified</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-[#736c64] mb-4">
                    <span className="flex items-center space-x-1"><Clock size={14} /> <span>{course.duration}</span></span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-semibold uppercase">{course.level}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {course.topics.map((topic, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-medium text-[#1e1919]/70">
                        <CheckCircle2 size={12} className="text-[#fad24b]" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 bg-[#61525a] text-white px-10 py-4 rounded-full font-bold hover:bg-[#4a3e45] transition-all shadow-lg w-full md:w-auto"
            >
              Enroll for the Next Batch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
