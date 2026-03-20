import { Event, TeamMember, Resource, LeaderboardEntry, BlogPost } from './types';

export const COLORS = {
  primary: '#2F8D46', // GFG Green
  secondary: '#000000',
  accent: '#F1F1F1',
  text: '#333333',
};

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'DSA Mastery Workshop',
    date: 'March 25, 2026',
    time: '4:00 PM - 6:00 PM',
    location: 'Main Auditorium, RIT',
    description: 'A deep dive into advanced data structures and algorithms with hands-on problem solving.',
    image: 'https://picsum.photos/seed/dsa/800/600',
    category: 'Workshop',
  },
  {
    id: '2',
    title: 'Code-A-Thon 2026',
    date: 'April 10, 2026',
    time: '10:00 AM - 10:00 PM',
    location: 'Computer Lab 3, RIT',
    description: 'A 12-hour coding marathon to solve real-world problems and win exciting prizes.',
    image: 'https://picsum.photos/seed/code/800/600',
    category: 'Contest',
  },
  {
    id: '3',
    title: 'Web Dev Roadmap',
    date: 'April 15, 2026',
    time: '5:00 PM - 7:00 PM',
    location: 'Online (Google Meet)',
    description: 'Learn the modern web development stack and how to build production-ready apps.',
    image: 'https://picsum.photos/seed/web/800/600',
    category: 'Webinar',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. S. Kumar',
    role: 'Faculty Coordinator',
    image: 'https://picsum.photos/seed/faculty/400/400',
  },
  {
    id: '2',
    name: 'Rahul Sharma',
    role: 'Club President',
    image: 'https://picsum.photos/seed/rahul/400/400',
    linkedin: '#',
    github: '#',
  },
  {
    id: '3',
    name: 'Priya Verma',
    role: 'Technical Lead',
    image: 'https://picsum.photos/seed/priya/400/400',
    linkedin: '#',
    github: '#',
  },
  {
    id: '4',
    name: 'Ankit Singh',
    role: 'Event Manager',
    image: 'https://picsum.photos/seed/ankit/400/400',
    linkedin: '#',
  },
];

export const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'DSA Self-Paced Course',
    description: 'Comprehensive guide to mastering Data Structures and Algorithms.',
    link: 'https://www.geeksforgeeks.org/data-structures/',
    category: 'DSA',
  },
  {
    id: '2',
    title: 'Top 50 Interview Questions',
    description: 'Most frequently asked coding interview questions by top tech giants.',
    link: 'https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/',
    category: 'Interview',
  },
  {
    id: '3',
    title: 'React JS Roadmap',
    description: 'Step-by-step guide to becoming a professional React developer.',
    link: 'https://www.geeksforgeeks.org/reactjs-roadmap-for-beginners-in-2024/',
    category: 'Development',
  },
  {
    id: '4',
    title: 'Python for Beginners',
    description: 'Learn Python from scratch with interactive examples and exercises.',
    link: 'https://www.geeksforgeeks.org/python-programming-language/',
    category: 'Language',
  },
];

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'Rahul Sharma', points: 2450, solved: 145 },
  { rank: 2, name: 'Priya Verma', points: 2320, solved: 138 },
  { rank: 3, name: 'Amit Das', points: 2100, solved: 120 },
  { rank: 4, name: 'Sneha Kapur', points: 1950, solved: 115 },
  { rank: 5, name: 'Vikram Singh', points: 1800, solved: 105 },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How I Cracked My First Internship',
    excerpt: 'A detailed account of my journey from learning basics to landing a role at a top tech firm.',
    author: 'Rahul Sharma',
    date: 'March 10, 2026',
    image: 'https://picsum.photos/seed/blog1/800/400',
  },
  {
    id: '2',
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how AI tools are changing the way we write code and build user interfaces.',
    author: 'Priya Verma',
    date: 'March 5, 2026',
    image: 'https://picsum.photos/seed/blog2/800/400',
  },
];
