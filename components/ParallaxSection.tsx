"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Lock, Zap } from 'lucide-react';

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Lightning Fast Transactions",
      description: "Execute trades and tasks with minimal latency on our optimized platform."
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-500" />,
      title: "Secure & Decentralized",
      description: "Your assets remain under your control with our non-custodial architecture."
    },
    {
      icon: <Database className="h-10 w-10 text-purple-500" />,
      title: "Smart Contract Automation",
      description: "Automate your DeFi strategies with our intelligent task system."
    }
  ];

  return (
    <section id="parallax" ref={containerRef} className="relative py-24 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y,
          backgroundImage: `url(https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Revolutionizing</span> DeFi Tasks
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our platform combines the power of blockchain with intuitive task management to create a seamless Web3 experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 card-hover border border-purple-900/50"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px rgba(138, 43, 226, 0.3)"
              }}
            >
              <div className="mb-5 bg-purple-900/30 p-3 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;