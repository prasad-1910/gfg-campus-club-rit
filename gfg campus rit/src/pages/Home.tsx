import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Users, Calendar, BookOpen, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

const Home = () => {
  const { events } = useEvents();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-green-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-green-50 text-[#2F8D46] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap size={16} />
                <span>Official Campus Club of RIT</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Shape the Future of <span className="text-[#2F8D46]">Tech</span> at RIT
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Join the most active coding community on campus. Master DSA, build real-world projects, and connect with industry experts.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/events"
                  className="bg-[#2F8D46] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#267339] transition-all flex items-center justify-center space-x-2 shadow-xl shadow-green-100"
                >
                  <span>Explore Events</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#2F8D46] hover:text-[#2F8D46] transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-2 sm:flex sm:items-center gap-8 sm:space-x-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Members</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">20+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Events/Year</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-3xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Resources</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://picsum.photos/seed/rit-campus/800/800"
                  alt="Students coding"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Trophy className="text-[#2F8D46]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Top Club</p>
                    <p className="text-sm font-bold text-gray-900">2025 Excellence Award</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#2F8D46] uppercase tracking-[0.2em] mb-4">What we offer</h2>
            <p className="text-4xl font-bold text-gray-900">Everything you need to <span className="text-[#2F8D46]">Excel</span></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: 'Coding Practice', desc: 'Curated problems from basic to advanced levels to sharpen your skills.' },
              { icon: <Calendar />, title: 'Regular Events', desc: 'Workshops, hackathons, and seminars featuring industry experts.' },
              { icon: <BookOpen />, title: 'Learning Paths', desc: 'Structured roadmaps for Web Dev, App Dev, AI/ML and more.' },
              { icon: <Users />, title: 'Networking', desc: 'Connect with seniors, alumni, and peers who share your passion.' },
              { icon: <Trophy />, title: 'Competitions', desc: 'Participate in club-level and inter-college coding contests.' },
              { icon: <Zap />, title: 'Career Support', desc: 'Interview preparation materials and placement guidance.' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center text-[#2F8D46] mb-6">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-sm font-bold text-[#2F8D46] uppercase tracking-[0.2em] mb-4">Don't miss out</h2>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming <span className="text-[#2F8D46]">Events</span></p>
            </div>
            <Link to="/events" className="text-[#2F8D46] font-bold flex items-center space-x-2 hover:underline">
              <span>View all events</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2F8D46]">
                    {event.category}
                  </div>
                </div>
                <p className="text-sm text-[#2F8D46] font-bold mb-2">{event.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2F8D46] transition-colors">{event.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F8D46] rounded-full blur-[120px] opacity-20"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your coding journey?</h2>
              <p className="text-gray-400 text-lg mb-10">
                Join hundreds of students who are already learning and growing together. No experience required, just passion.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#2F8D46] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#267339] transition-all shadow-2xl shadow-green-900/20"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
