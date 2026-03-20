import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Shield, Award, Linkedin, Github } from 'lucide-react';
import { TEAM } from '../constants';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-[#2F8D46]">GFG RIT</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a community of passionate developers, problem solvers, and tech enthusiasts dedicated to fostering a culture of coding excellence at RIT.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[#2F8D46]">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To bridge the gap between academic learning and industry requirements by providing students with practical coding experience, mentorship, and a platform to showcase their talents.
              </p>
              <ul className="space-y-4">
                {[
                  'Promote algorithmic thinking and problem-solving.',
                  'Organize high-quality technical workshops and contests.',
                  'Provide resources for placement and internship preparation.',
                  'Build a collaborative environment for peer-to-peer learning.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#2F8D46]"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[#2F8D46]">
                <Shield size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the premier tech hub at RIT, recognized for producing top-tier engineering talent and contributing significantly to the global developer community.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#2F8D46] mb-1">100%</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Student Led</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#2F8D46] mb-1">Top 5</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Campus Clubs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#2F8D46] uppercase tracking-[0.2em] mb-4">Meet the team</h2>
            <p className="text-4xl font-bold text-gray-900">The Minds Behind <span className="text-[#2F8D46]">GFG RIT</span></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#2F8D46] text-sm font-semibold mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="text-gray-400 hover:text-[#0077B5] transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2F8D46] rounded-[2.5rem] p-8 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-10 lg:mb-0 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 mx-auto lg:mx-0">
                <Award size={16} />
                <span>Our Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Recognized for Excellence in Coding Education</h2>
              <p className="text-green-50 leading-relaxed opacity-90">
                We've been awarded the "Best Technical Club" at RIT for three consecutive years, reflecting our commitment to student growth and success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
                <p className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">Placements</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">10k+</p>
                <p className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">Code Submissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
