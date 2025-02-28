"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layers, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navbarHeight = useTransform(scrollY, [0, 100], ['5rem', '4rem']);
  const navbarBackground = useTransform(scrollY, [0, 100], ['rgba(0, 0, 0, 0)', 'rgba(10, 10, 20, 0.95)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'parallax' },
    { name: 'Plans', id: 'pricing' },
  ];

  // External URLs for your buttons
  const workerAppUrl = "https://localhost:3002"; // Replace with your worker app URL
  const userAppUrl = "https://localhost:3001"; // Replace with your user app URL

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between"
      style={{
        height: navbarHeight,
        backgroundColor: navbarBackground,
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
        <Layers className="h-8 w-8 text-purple-500 mr-2" />
        <span className="text-xl md:text-2xl font-bold gradient-text">DeFi-Tasker</span>
      </motion.div>

      {/* Hamburger Icon */}
      <motion.button
        className="md:hidden flex items-center justify-center z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 150 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                className="text-2xl text-gray-200 hover:text-white font-semibold cursor-pointer"
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.div className="flex flex-col space-y-4 mt-6 w-60">
              <motion.a
                href={workerAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-500 text-white rounded-full bg-purple-700 hover:bg-black transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join as Worker
              </motion.a>
              <motion.a
                href={userAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-500 text-white rounded-full bg-purple-700 hover:bg-black transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join as User
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            className="text-gray-200 hover:text-white transition-colors cursor-pointer"
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1 }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <motion.a
          href={workerAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border-2 border-purple-500 text-white rounded-full bg-purple-700 hover:bg-black text-center"
          whileHover={{ scale: 1.05 }}
        >
          Join as Worker
        </motion.a>
        <motion.a
          href={userAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border-2 border-purple-500 text-white rounded-full bg-purple-700 hover:bg-black text-center"
          whileHover={{ scale: 1.05 }}
        >
          Join as User
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Navbar;
