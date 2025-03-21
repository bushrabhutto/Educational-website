'use client';
import React from 'react';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Educational Blogs</h1>


      <article className="bg-yellow-50 p-6 rounded-2xl shadow-md mb-8 border border-yellow-200">
        <h2 className="text-2xl font-semibold text-red-500 mb-3">🔸 What is the MERN Stack?</h2>
        <p className="text-gray-700 mb-2">
          The MERN stack is a powerful combination of technologies used to build full-stack web applications:
        </p>
        <ul className="list-disc list-inside text-gray-700 pl-4">
          <li><strong>MongoDB:</strong> A NoSQL database used for storing data in JSON-like format.</li>
          <li><strong>Express.js:</strong> A backend framework for building APIs using Node.js.</li>
          <li><strong>React.js:</strong> A frontend JavaScript library for creating interactive UIs.</li>
          <li><strong>Node.js:</strong> A JavaScript runtime used for executing server-side code.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          MERN is widely used in industry due to its flexibility, scalability, and developer-friendly architecture.
        </p>
      </article>

    
      <article className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">🔸 Why Learn Python?</h2>
        <p className="text-gray-700 mb-2">
          Python is one of the most beginner-friendly and powerful programming languages. It is widely used for:
        </p>
        <ul className="list-disc list-inside text-gray-700 pl-4">
          <li>Web Development (using Django, Flask)</li>
          <li>Data Science and Machine Learning</li>
          <li>Automation and Scripting</li>
          <li>Game Development</li>
          <li>Cybersecurity and Ethical Hacking</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Python’s clean syntax and strong community support make it an excellent first language for aspiring developers.
        </p>
      </article>
    </div>
  );
};

export default Blogs;
