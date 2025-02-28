"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Monthly Membership",
      price: isAnnual ? 39 : 49,
      period: isAnnual ? "/month, billed annually" : "/month",
      description: "Perfect for individuals getting started with DeFi",
      features: [
        "Access to basic DeFi tools",
        "Up to 10 automated tasks per day",
        "Basic analytics dashboard",
        "Email support"
      ]
    },
    {
      name: "Annual Membership",
      price: isAnnual ? 79 : 99,
      period: isAnnual ? "/month, billed annually" : "/month",
      description: "For serious DeFi enthusiasts and professionals",
      features: [
        "Access to all DeFi tools and features",
        "Unlimited automated tasks",
        "Advanced analytics and reporting",
        "Priority support 24/7",
        "Custom strategy development",
        "Early access to new features"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Membership</span> Plans
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your DeFi strategy and start maximizing your earnings today.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                isAnnual ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-purple-400 text-sm">(Save 20%)</span>
            </span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-purple-500 purple-glow' : 'border-gray-800'
              } relative card-hover`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(138, 43, 226, 0.3)"
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 ${
                  plan.popular 
                    ? 'purple-gradient text-white' 
                    : 'bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/20'
                } rounded-lg font-medium`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;