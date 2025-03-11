"use client"
import { sendMessage } from '@/lib/contact-action';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Map, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendMessage(formData);
      setSubmitSuccess(true);
      setFormData({
        company: '',
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-niketolad to-niketolad/90 text-white py-16" id="footer">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-12"
        >
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 lg:w-1/3"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">
              Contact Us
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-white/40 absolute bottom-0 left-0 rounded-full"
              />
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-white/10 p-2 rounded-full">
                  <Map className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="opacity-80 text-sm leading-relaxed">
                    8, Adelabu Close Opposite Nigeria Customs Training College,<br />
                    Ikeja, Lagos, Nigeria.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-white/10 p-2 rounded-full">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="opacity-80 text-sm">
                    info@nikentoladgroup.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-1 bg-white/10 p-2 rounded-full">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="opacity-80 text-sm">
                    +234 803 727 1866<br />
                    +234 802 754 6836
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
                  >
                    <Icon className="text-white text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 lg:w-2/3"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">
              Send Us a Message
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="h-1 bg-white/40 absolute bottom-0 left-0 rounded-full"
              />
            </h2>
            
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-600/20 border border-green-500 text-white p-4 rounded-lg mb-4"
              >
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1 opacity-90">We&apos;ll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-white/80">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-white/80">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded-md py-3 px-6 font-semibold text-white transition-all ${
                    isSubmitting 
                      ? 'bg-gray-500 cursor-wait' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                <p className="text-xs text-white/60 text-right">* Required fields</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-16 pt-8 border-t border-white/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Nikentolad Group. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;