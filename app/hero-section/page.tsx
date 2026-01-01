"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            WELCOME TO MY WORLD
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-5xl text-gray-900 dark:text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Hi, I&apos;m Neha Arun Patil
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Frontend Developer passionate about creating beautiful and
            functional web experiences
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link href="/project-section" passHref>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 ">
                View My Work
              </Button>
            </Link>
            <Button variant="outline" size="lg" asChild>
              <a
                href="/Neha_Patil_Frontend_Developer-CV.pdf"
                download="Neha_Patil_Resume.pdf"
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
