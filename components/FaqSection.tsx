// 
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const faqs = [
    {
      question: "What is DeFi-Tasker?",
      answer:
        "DeFi-Tasker is a Web3 platform that combines decentralized finance tools with task automation to help users maximize their earnings in the crypto space. Our platform provides an intuitive interface for managing DeFi operations efficiently.",
    },
    {
      question: "How does the automation system work?",
      answer:
        "Our automation system uses smart contracts to execute predefined tasks based on specific triggers or schedules. This allows you to automate repetitive DeFi operations like yield farming, liquidity provision, or token swaps without constant manual intervention.",
    },
    {
      question: "Is DeFi-Tasker secure?",
      answer:
        "Yes, security is our top priority. DeFi-Tasker is non-custodial, meaning we never take control of your funds. All operations are executed through secure smart contracts that have been audited by leading security firms. Additionally, we implement industry-standard security practices to protect user data and interactions.",
    },
    {
      question: "Which blockchains are supported?",
      answer:
        "DeFi-Tasker currently supports Ethereum, Binance Smart Chain, Polygon, Avalanche, and Solana. We're continuously working to add support for more blockchains to provide a comprehensive cross-chain experience.",
    },
    {
      question: "How do I connect my wallet?",
      answer:
        "DeFi-Tasker supports multiple wallet connections including MetaMask, WalletConnect, Coinbase Wallet, and more. Simply click on the 'Connect Wallet' button in the top right corner of the dashboard and select your preferred wallet provider.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about DeFi-Tasker and how it can help you navigate the decentralized finance landscape.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <motion.button
                className="flex justify-between items-center w-full p-6 text-left bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleFaq(index)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ChevronDown className="h-5 w-5 text-purple-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300 bg-gray-900/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
