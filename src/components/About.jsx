import React from 'react';
import { Target, Users, Award, CheckCircle2 } from 'lucide-react';
import Header from "../components/header.jsx";
import imgg from "../assets/image-removebg-preview.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Compact Height */}
      <section className="relative py-10 px-4 bg-gradient-to-br bg-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in">
            Our Journey
          </h1>
          <p className="text-teal-50 text-base max-w-2xl mx-auto leading-relaxed">
            CashMish was founded on the basis of giving an alternative option to those looking to either upgrade their phone, find a way to help get some extra money in their pocket, or for those who has a surplus of electronics that they don't know what to do with.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
      </section>

      {/* Stats Section - Balanced Margins */}
      <div className="max-w-4xl mx-auto w-full -mt-8 px-4 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Projects Done', value: '500+' },
            { label: 'Happy Clients', value: '200+' },
            { label: 'Units Processed', value: '10k+' },
            { label: 'Expert Team', value: '15+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-lg text-center border border-teal-50">
              <div className="text-xl font-bold text-teal-600">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-10 px-4 max-w-5xl mx-auto w-full flex-1">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          
          {/* Left Side: Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
              <Target className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">
              Complimentary Services
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We want our customer to get the best value for their phones. We do extensive inspection to determine the appropriate reward; it may even be more than you were originally quoted!
            </p>
            <ul className="space-y-2">
              {['Customer Service Guarantees', 'Information and Help Every Step of the Way'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Image and Cards */}
          <div className="grid grid-cols-2 gap-3 h-full">
            <div className="space-y-3 flex flex-col justify-center">
              <div className="bg-teal-50 p-4 rounded-2xl">
                <Users className="w-6 h-6 text-teal-600 mb-2" />
                <h3 className="font-bold text-gray-800 text-sm">Expert Team</h3>
              </div>
              <div className="bg-cyan-50 p-4 rounded-2xl">
                <Award className="w-6 h-6 text-cyan-600 mb-2" />
                <h3 className="font-bold text-gray-800 text-sm">Top Rated</h3>
              </div>
            </div>
            
            {/* Image Container - Fixed path logic */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-2 shadow-inner">
               <img 
                 src={imgg} 
                 alt="Our Journey" 
                 className="w-full h-auto object-contain max-h-[180px]" 
               />
            </div>
          </div>
          
        </div>
      </section>

      {/* Simple Footer space if needed */}
      <div className="h-4"></div>
    </div>
  );
}