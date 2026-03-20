import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-[#2F8D46] p-1.5 rounded-lg">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                GFG <span className="text-[#2F8D46]">RIT</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of developers at RIT through coding, collaboration, and community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">Events</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">Resources</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="https://www.geeksforgeeks.org/" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">GeeksforGeeks Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">DSA Roadmap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">Interview Prep</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2F8D46] transition-colors text-sm">Coding Practice</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="text-[#2F8D46]" />
                <span>gfgclub@rit.edu</span>
              </li>
              <li className="text-gray-400 text-sm">
                RIT Campus, Vidyanagar,<br />
                Bangalore, Karnataka
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} GeeksforGeeks Campus Club - RIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
