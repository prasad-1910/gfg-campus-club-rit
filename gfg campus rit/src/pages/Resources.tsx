import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, BookOpen, Code, Terminal, Briefcase } from 'lucide-react';
import { RESOURCES } from '../constants';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'DSA', 'Development', 'Interview', 'Language'];

  const filteredResources = activeCategory === 'All' 
    ? RESOURCES 
    : RESOURCES.filter(r => r.category === activeCategory);

  const getIcon = (category: string) => {
    switch (category) {
      case 'DSA': return <Terminal size={20} />;
      case 'Development': return <Code size={20} />;
      case 'Interview': return <Briefcase size={20} />;
      default: return <BookOpen size={20} />;
    }
  };

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
            Learning <span className="text-[#2F8D46]">Resources</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated materials to help you master coding, crack interviews, and build amazing projects.
          </p>
          
          <div className="mt-12 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-lg focus:ring-2 focus:ring-[#2F8D46] transition-all outline-none"
            />
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#2F8D46] text-white shadow-lg shadow-green-100'
                    : 'bg-white text-gray-600 border border-gray-100 hover:border-[#2F8D46] hover:text-[#2F8D46]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredResources.map((resource) => (
              <motion.a
                key={resource.id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <div className="bg-green-50 p-4 rounded-2xl text-[#2F8D46] group-hover:bg-[#2F8D46] group-hover:text-white transition-colors">
                  {getIcon(resource.category)}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#2F8D46] uppercase tracking-wider">{resource.category}</span>
                    <ExternalLink size={16} className="text-gray-300 group-hover:text-[#2F8D46] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {resource.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Official GFG Practice Portal</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Access thousands of coding problems, participate in monthly contests, and track your progress on the official GeeksforGeeks platform.
              </p>
              <div className="space-y-6">
                {[
                  'Topic-wise problem sets',
                  'Company-specific interview prep',
                  'Real-time coding environment',
                  'Detailed solution explanations'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="bg-[#2F8D46] p-1 rounded-full">
                      <Code size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://practice.geeksforgeeks.org/"
                target="_blank"
                className="inline-block mt-12 bg-[#2F8D46] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#267339] transition-all"
              >
                Start Practicing
              </a>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/practice/800/600"
                  alt="Coding practice"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
