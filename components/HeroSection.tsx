"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Empowering You</span> <br />
            in the Decentralized World
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Earn effortlessly with DeFi-Tasker. We empower workers by enhancing their efficiency and help users maximize their earnings with smart Web3 tools.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button className="purple-gradient text-white font-medium rounded-full px-8 py-6 text-lg flex items-center gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:text-purple-300 rounded-full px-8 py-6 text-lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, x: 100, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <div className="relative w-full max-w-md">
            {}
            <motion.div 
              className="absolute inset-0 bg-purple-600 rounded-full blur-3xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            
            
            <motion.div
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl purple-glow"
              initial={{ 
                borderRadius: "50%", 
                clipPath: "circle(0% at 50% 50%)",
                filter: "hue-rotate(90deg) brightness(1.5)"
              }}
              animate={{ 
                borderRadius: "16px", 
                clipPath: "circle(100% at 50% 50%)",
                filter: "hue-rotate(0deg) brightness(1)"
              }}
              transition={{
                duration: 1.8,
                ease: [0.25, 1, 0.5, 1],
                clipPath: {
                  duration: 2.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
            >
             
              <motion.img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
                alt="DeFi-Tasker Web3 Illustration" 
                className="w-full h-auto"
                initial={{ scale: 1.2, y: 30 }}
                animate={{ 
                  scale: [1.2, 1.05, 1],
                  y: [30, 0]
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.7, 1],
                  ease: "easeOut"
                }}
              />
              
              {/* Wave effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent"
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              />
              
             
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-purple-500/30 rounded-2xl"
                  initial={{ scale: 0.2, opacity: 0.8 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{
                    duration: 2,
                    delay: 0.6 + i * 0.3,
                    ease: "easeOut",
                    repeat: 0
                  }}
                />
              ))}
              
              
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-purple-500"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                  }}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: `${(Math.random() * 200) - 100}%`,
                    y: `${(Math.random() * 200) - 100}%`,
                    opacity: [0, 0.8, 0.6],
                    scale: [0, 1.2, 1]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    delay: 0.8 + i * 0.1,
                    ease: "easeOut",
                    opacity: { duration: 2 + i * 0.5 },
                    scale: { duration: 2 + i * 0.5 }
                  }}
                />
              ))}
              
              
              <motion.div
                className="absolute inset-0 bg-purple-500/10"
                initial={{ boxShadow: "0 0 0px 0px rgba(138, 43, 226, 0)" }}
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(138, 43, 226, 0)",
                    "0 0 30px 5px rgba(138, 43, 226, 0.5)",
                    "0 0 20px 0px rgba(138, 43, 226, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.5, 1],
                  ease: "easeOut",
                  delay: 0.5
                }}
              />
              
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-600/40 to-transparent"
                initial={{ y: 200 }}
                animate={{ 
                  y: [200, 0],
                  scaleX: [1, 1.05, 0.98, 1]
                }}
                transition={{
                  y: { duration: 1.8, ease: "easeOut" },
                  scaleX: { 
                    duration: 2.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                  },
                  delay: 0.3
                }}
              />
            </motion.div>
            
            {/* Animated highlights */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-purple-300/30 blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/5 w-8 h-8 rounded-full bg-purple-400/30 blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;