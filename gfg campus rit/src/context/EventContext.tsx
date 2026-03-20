import React, { createContext, useContext, useState, useEffect } from 'react';
import { Event, RSVP } from '../types';
import { EVENTS as INITIAL_EVENTS } from '../constants';

interface EventContextType {
  events: Event[];
  rsvps: RSVP[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  addRSVP: (rsvp: Omit<RSVP, 'id' | 'timestamp'>) => void;
  getRSVPsForEvent: (eventId: string) => RSVP[];
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(() => {
    const saved = localStorage.getItem('gfg_rit_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  const [rsvps, setRsvps] = useState<RSVP[]>(() => {
    const saved = localStorage.getItem('gfg_rit_rsvps');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('gfg_rit_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('gfg_rit_rsvps', JSON.stringify(rsvps));
  }, [rsvps]);

  const addEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...eventData,
      id: Math.random().toString(36).substr(2, 9),
    };
    setEvents(prev => [newEvent, ...prev]);
  };

  const updateEvent = (id: string, eventData: Partial<Event>) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...eventData } : e));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
    setRsvps(prev => prev.filter(r => r.eventId !== id));
  };

  const addRSVP = (rsvpData: Omit<RSVP, 'id' | 'timestamp'>) => {
    const newRSVP: RSVP = {
      ...rsvpData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
    };
    setRsvps(prev => [...prev, newRSVP]);
  };

  const getRSVPsForEvent = (eventId: string) => {
    return rsvps.filter(r => r.eventId === eventId);
  };

  return (
    <EventContext.Provider value={{ events, rsvps, addEvent, updateEvent, deleteEvent, addRSVP, getRSVPsForEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};
