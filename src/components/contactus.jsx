import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Header from "../components/header.jsx";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // overflow-hidden scrolling ko block karega
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-5xl w-full">
          
          {/* Header Section - Height optimized */}
          <div className="text-center mb-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              Get In Touch
            </h1>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-slide-up">
            <div className="grid lg:grid-cols-5 gap-0">
              
              {/* Left Side - Info (Original design maintained) */}
              <div className="lg:col-span-2 bg-gradient-to-br bg-blue-600 to-cyan-600 p-8 text-white relative overflow-hidden">
                <div className="relative z-10 h-full flex flex-col">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Contact Information
                  </h2>
                  <p className="text-teal-100 mb-10 text-sm sm:text-base">
                    Fill up the form and our Team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-teal-50 text-xs mb-1">Phone</div>
                        <div className="font-semibold">+8801797794888</div>
                        <div className="font-semibold">+880186383848</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-teal-50 text-xs mb-1">Email</div>
                        <div className="font-semibold">Support@uprankly.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-teal-50 text-xs mb-1">Address</div>
                        <div className="font-semibold">New York, USA</div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-20 translate-y-20 blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-300/30 rounded-full"></div>
                </div>
              </div>

              {/* Right Side - Form (Balanced Height) */}
              <div className="lg:col-span-3 p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Trancelgy"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-gray-50 text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@nureancy.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-gray-50 text-gray-800"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="When i Recieve Quotation?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-gray-50 text-gray-800"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4" // Adjusted from 6 to 4 for better fit
                      placeholder="Write here your message"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-gray-50 text-gray-800 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/25"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Area - Smaller margin to fit screen */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-teal-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Privacy</a>
            <div className="flex items-center gap-4">
               {/* Logos/Socials same as original */}
               <div className="flex gap-3">
                 <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white"><span className="text-[10px]">in</span></div>
                 <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white"><span className="text-[10px]">fb</span></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}