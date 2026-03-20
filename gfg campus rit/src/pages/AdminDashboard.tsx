import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, Users, Calendar, MapPin, Clock, X, Save, Eye } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { Event } from '../types';

const AdminDashboard = () => {
  const { events, addEvent, updateEvent, deleteEvent, getRSVPsForEvent } = useEvents();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [viewingRSVPsId, setViewingRSVPsId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<Event, 'id'>>({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: 'https://picsum.photos/seed/event/800/600',
    category: 'Workshop',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateEvent(editingId, formData);
      setEditingId(null);
    } else {
      addEvent(formData);
      setIsAdding(false);
    }
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: 'https://picsum.photos/seed/event/800/600',
      category: 'Workshop',
    });
  };

  const startEdit = (event: Event) => {
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      image: event.image,
      category: event.category,
    });
    setEditingId(event.id);
    setIsAdding(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Admin <span className="text-[#2F8D46]">Dashboard</span></h1>
            <p className="text-gray-600 mt-2">Manage club events and track registrations.</p>
          </div>
          <button
            onClick={() => {
              setIsAdding(true);
              setEditingId(null);
            }}
            className="bg-[#2F8D46] text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-[#267339] transition-all shadow-lg shadow-green-100"
          >
            <Plus size={20} />
            <span>Create New Event</span>
          </button>
        </div>

        {/* Event List */}
        <div className="grid grid-cols-1 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold text-[#2F8D46] uppercase tracking-wider">{event.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{getRSVPsForEvent(event.id).length} RSVPs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button
                  onClick={() => setViewingRSVPsId(event.id)}
                  className="flex-1 md:flex-none p-3 text-gray-600 hover:text-[#2F8D46] hover:bg-green-50 rounded-xl transition-all flex items-center justify-center space-x-2"
                  title="View RSVPs"
                >
                  <Eye size={18} />
                  <span className="md:hidden">RSVPs</span>
                </button>
                <button
                  onClick={() => startEdit(event)}
                  className="flex-1 md:flex-none p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all flex items-center justify-center space-x-2"
                  title="Edit Event"
                >
                  <Edit2 size={18} />
                  <span className="md:hidden">Edit</span>
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this event?')) {
                      deleteEvent(event.id);
                    }
                  }}
                  className="flex-1 md:flex-none p-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all flex items-center justify-center space-x-2"
                  title="Delete Event"
                >
                  <Trash2 size={18} />
                  <span className="md:hidden">Delete</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add/Edit Modal */}
        {isAdding && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAdding(false)}></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">{editingId ? 'Edit' : 'Create'} Event</h2>
                  <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Event Title</label>
                      <input
                        required
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                        placeholder="e.g. DSA Mastery Workshop"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none bg-white"
                      >
                        <option value="Workshop">Workshop</option>
                        <option value="Contest">Contest</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Webinar">Webinar</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                      <input
                        required
                        type="text"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                        placeholder="e.g. March 25, 2026"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Time</label>
                      <input
                        required
                        type="text"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                        placeholder="e.g. 4:00 PM - 6:00 PM"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                      <input
                        required
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                        placeholder="e.g. Main Auditorium, RIT"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none resize-none"
                        placeholder="Tell us about the event..."
                      ></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
                      <input
                        required
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F8D46] focus:ring-2 focus:ring-green-100 transition-all outline-none"
                        placeholder="https://picsum.photos/..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2F8D46] text-white py-4 rounded-xl font-bold hover:bg-[#267339] transition-all flex items-center justify-center space-x-2 shadow-xl shadow-green-100"
                  >
                    <Save size={20} />
                    <span>{editingId ? 'Update' : 'Create'} Event</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {/* RSVPs Modal */}
        {viewingRSVPsId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setViewingRSVPsId(null)}></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Event RSVPs</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {events.find(e => e.id === viewingRSVPsId)?.title}
                  </p>
                </div>
                <button onClick={() => setViewingRSVPsId(null)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto p-8">
                {getRSVPsForEvent(viewingRSVPsId).length === 0 ? (
                  <div className="text-center py-12">
                    <Users size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-500">No registrations yet for this event.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                          <th className="pb-4">Name</th>
                          <th className="pb-4">Email</th>
                          <th className="pb-4">Student ID</th>
                          <th className="pb-4 text-right">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {getRSVPsForEvent(viewingRSVPsId).map((rsvp) => (
                          <tr key={rsvp.id}>
                            <td className="py-4 font-bold text-gray-900">{rsvp.name}</td>
                            <td className="py-4 text-gray-600">{rsvp.email}</td>
                            <td className="py-4 text-gray-600">{rsvp.studentId}</td>
                            <td className="py-4 text-right text-xs text-gray-400">
                              {new Date(rsvp.timestamp).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
