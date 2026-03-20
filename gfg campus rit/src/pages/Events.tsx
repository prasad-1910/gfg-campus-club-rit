import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const Events = () => {
  const { events, addRSVP } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedEvent) {
      addRSVP({
        eventId: selectedEvent,
        ...formData,
      });
      setIsRegistered(true);
      setFormData({ name: '', email: '', studentId: '' });
      setTimeout(() => {
        setIsRegistered(false);
        setSelectedEvent(null);
      }, 3000);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Upcoming <span className="text-[#2F8D46]">Events</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest workshops, contests, and seminars. Register now to secure your spot!
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#2F8D46] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center space-x-2 text-[#2F8D46] text-sm font-bold mb-4">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3 text-gray-500 text-sm">
                      <Clock size={16} className="text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500 text-sm">
                      <MapPin size={16} className="text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedEvent(event.id)}
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-[#2F8D46] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8 md:p-12">
                {isRegistered ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-[#2F8D46] mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
                    <p className="text-gray-600">We've sent the event details to your email. See you there!</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Event Registration</h3>
                    <p className="text-gray-500 mb-8">Fill in your details to join the event.</p>
                    
                    <form onSubmit={handleRegister} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">USN / Student ID</label>
                        <input
                          required
                          type="text"
                          value={formData.studentId}
                          onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                          placeholder="1RI22CS001"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#2F8D46] text-white py-4 rounded-xl font-bold hover:bg-[#267339] transition-all shadow-xl shadow-green-100"
                      >
                        Confirm Registration
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
