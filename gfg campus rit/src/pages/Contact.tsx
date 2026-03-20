import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F8D46] rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Get in <span className="text-[#2F8D46]">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about the club or want to collaborate? We're here to help you on your tech journey.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                Reach out to us through any of these channels. Our team typically responds within 24 hours.
              </p>
              
              <div className="space-y-8 md:space-y-10">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="bg-green-50 p-4 rounded-2xl text-[#2F8D46]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">gfgclub@rit.edu</p>
                    <p className="text-sm text-gray-400 mt-1">For general queries and collaborations</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="bg-green-50 p-4 rounded-2xl text-[#2F8D46]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="bg-green-50 p-4 rounded-2xl text-[#2F8D46]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600">RIT Campus, Vidyanagar, Bangalore</p>
                    <p className="text-sm text-gray-400 mt-1">Computer Science Department, Block B</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-green-50 rounded-[2rem] border border-green-100">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="text-[#2F8D46]" />
                  <h4 className="text-xl font-bold text-gray-900">Join our Discord</h4>
                </div>
                <p className="text-gray-600 mb-6">
                  Get instant support and connect with 500+ members on our official Discord server.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#2F8D46] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#267339] transition-all"
                >
                  Join Server
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-[#2F8D46] mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[#2F8D46] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none bg-white">
                        <option>General Inquiry</option>
                        <option>Event Collaboration</option>
                        <option>Technical Support</option>
                        <option>Membership Query</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-[#2F8D46] transition-all flex items-center justify-center space-x-3 shadow-xl shadow-gray-200"
                    >
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
