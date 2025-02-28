"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layers, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
    // Show success message or toast
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900/70 pt-16 pb-8 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Layers className="h-8 w-8 text-purple-500 mr-2" />
              <span className="text-2xl font-bold gradient-text">DeFi-Tasker</span>
            </motion.div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering users in the decentralized world with smart tools and automation to maximize earnings and efficiency.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Github className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-colors"
                  whileHover={{ scale: 1.1, backgroundColor: "#9333ea" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'Services', id: 'parallax' },
                  { name: 'About Us', id: 'pricing' },
                  { name: 'FAQ', id: 'faq' },
                ].map((item) => (
                  <li key={item.id}>
                    <motion.a
                      className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                      onClick={() => scrollToSection(item.id)}
                      whileHover={{ x: 5, color: "#a855f7" }}
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with the latest in DeFi and Web3.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 focus:border-purple-500"
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full purple-gradient text-white font-medium"
                  >
                    Subscribe
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DeFi-Tasker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;