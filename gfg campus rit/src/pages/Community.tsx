import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Medal, Star, ArrowUpRight, MessageSquare, User, Zap } from 'lucide-react';
import { LEADERBOARD, BLOG_POSTS } from '../constants';

const Community = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-[#2F8D46]">Community</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrate achievements, share knowledge, and grow together with the most vibrant tech community at RIT.
          </p>
        </div>
      </section>

      {/* Leaderboard & Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Leaderboard */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
                  <Trophy className="text-[#2F8D46]" />
                  <span>Top Performers</span>
                </h2>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">March 2026</span>
              </div>
              
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-8 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Rank</th>
                        <th className="px-8 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-8 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Problems Solved</th>
                        <th className="px-8 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider text-right">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {LEADERBOARD.map((entry, idx) => (
                        <tr key={idx} className="hover:bg-green-50/30 transition-colors">
                          <td className="px-8 py-6">
                            <div className="flex items-center space-x-3">
                              {entry.rank === 1 && <Medal className="text-yellow-500" size={20} />}
                              {entry.rank === 2 && <Medal className="text-gray-400" size={20} />}
                              {entry.rank === 3 && <Medal className="text-amber-600" size={20} />}
                              <span className={`font-bold ${entry.rank <= 3 ? 'text-gray-900' : 'text-gray-400'}`}>
                                #{entry.rank}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                <User size={20} />
                              </div>
                              <span className="font-bold text-gray-900">{entry.name}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-gray-600 font-medium">{entry.solved}</span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="text-[#2F8D46] font-bold">{entry.points.toLocaleString()}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Participation Stats */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Stats</h2>
              <div className="bg-[#2F8D46] p-8 rounded-[2rem] text-white shadow-xl shadow-green-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Star size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80 font-medium">Total Activity</p>
                    <p className="text-2xl font-bold">High</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-80">Active Members</span>
                    <span className="font-bold">482</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white w-[85%] h-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-80">Monthly Growth</span>
                    <span className="font-bold">+12%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h3>
                <div className="space-y-6">
                  {[
                    { title: '100 Days of Code', user: 'Amit Das', icon: <Zap size={16} /> },
                    { title: 'Contest Winner', user: 'Sneha Kapur', icon: <Trophy size={16} /> },
                    { title: 'Top Contributor', user: 'Rahul Sharma', icon: <MessageSquare size={16} /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="bg-green-50 p-2 rounded-lg text-[#2F8D46]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.user}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold text-[#2F8D46] uppercase tracking-[0.2em] mb-4">From the blog</h2>
              <p className="text-4xl font-bold text-gray-900">Student <span className="text-[#2F8D46]">Insights</span></p>
            </div>
            <button className="text-[#2F8D46] font-bold flex items-center space-x-2 hover:underline">
              <span>Read all posts</span>
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="aspect-[2/1] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-green-50 px-3 py-1 rounded-full text-xs font-bold text-[#2F8D46]">
                      {post.date}
                    </div>
                    <span className="text-gray-400 text-xs font-medium">By {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-[#2F8D46] font-bold flex items-center space-x-2 group">
                    <span>Read More</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
