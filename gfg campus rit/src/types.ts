export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'Workshop' | 'Contest' | 'Seminar' | 'Webinar';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  category: 'DSA' | 'Development' | 'Interview' | 'Language';
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  solved: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export interface RSVP {
  id: string;
  eventId: string;
  name: string;
  email: string;
  studentId: string;
  timestamp: string;
}
