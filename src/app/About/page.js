import React from "react";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-red-500">About Our Platform</h1>
        <p className="text-lg text-red-700 mt-2 max-w-xl mx-auto">
          Welcome to our online educational platform, where we provide premium MERN stack and Python development courses to help you master modern web development.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 px-4 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-red-500 mb-2">Our Mission</h2>
          <p className="text-red-700">
            To empower learners worldwide by providing accessible, practical, and up-to-date coding education in MERN stack and Python development.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-red-500 mb-2">Our Vision</h2>
          <p className="text-red-700">
            To build a global community of confident developers by offering hands-on, real-world project-based learning experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 bg-pink-50">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg">
            <img src="/team1.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-3" />
            <h4 className="text-lg font-bold text-red-500">Bushra</h4>
            <p className="text-sm text-red-600">MERN Stack Instructor</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg">
            <img src="/team2.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-3" />
            <h4 className="text-lg font-bold text-red-500">sana</h4>
            <p className="text-sm text-red-600">Python Instructor</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg">
            <img src="/team3.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-3" />
            <h4 className="text-lg font-bold text-red-500">Aliza</h4>
            <p className="text-sm text-red-600">Content Manager</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2 text-red-500">📚</div>
            <h4 className="text-lg font-semibold">Project-Based Learning</h4>
            <p className="text-sm text-red-700">Work on real-life projects to gain hands-on experience.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2 text-red-500">🧑‍🏫</div>
            <h4 className="text-lg font-semibold">Expert Instructors</h4>
            <p className="text-sm text-red-700">Learn from professionals with industry experience.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2 text-red-500">📈</div>
            <h4 className="text-lg font-semibold">Career Growth</h4>
            <p className="text-sm text-red-700">Boost your career with cutting-edge development skills.</p>
          </div>
        </div>
      </section>

      <section className="py-10 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
            <summary className="font-semibold text-red-500">What is the MERN Stack?</summary>
            <p className="text-red-700 mt-2">
              MERN stands for MongoDB, Express.js, React, and Node.js — a JavaScript-based stack used for building full-stack web applications.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
            <summary className="font-semibold text-red-500">Are the courses beginner-friendly?</summary>
            <p className="text-red-700 mt-2">
              Yes! Our courses are designed for all levels — from complete beginners to advanced developers.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
            <summary className="font-semibold text-red-500">Do I get a certificate after completion?</summary>
            <p className="text-red-700 mt-2">
              Absolutely. You will receive a certificate upon successfully completing each course.
            </p>
          </details>
        </div>
      </section>

    
      <section className="py-10 bg-yellow-100 text-center">
  <h2 className="text-2xl font-bold text-red-600 mb-4">Ready to Start Learning?</h2>
  <Link href="/Courses">
    <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
      Explore Our Courses
    </button>
  </Link>
</section>
    </div>
  );
}
