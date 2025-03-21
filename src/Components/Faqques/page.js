"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What is the MERN Stack?",
    answer:
      "MERN stands for MongoDB, Express.js, React.js, and Node.js — a popular tech stack for building full-stack web applications.",
  },
  {
    question: "Why should I learn MERN Stack?",
    answer:
      "It’s widely used in industry, allows full-stack development using JavaScript only, and provides high scalability and performance.",
  },
  {
    question: "Do I need to know JavaScript before MERN?",
    answer:
      "Yes, a good understanding of JavaScript is necessary since all technologies in the stack are JavaScript-based.",
  },
  {
    question: "Is MERN suitable for beginners?",
    answer:
      "Absolutely! It’s a great way to learn both frontend and backend development in a single language ecosystem.",
  },
  {
    question: "What kind of projects can I build with MERN?",
    answer:
      "You can build social media apps, e-commerce sites, blogs, dashboards, chat apps, and much more.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-3xl text-red-600 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-red-200 pb-3"
          >
            <div
              className="cursor-pointer flex justify-between items-center text-xl font-semibold transition text-red-700"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="text-red-500 transition-transform">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="mt-2 ml-2 text-base text-red-600 transition-all duration-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
