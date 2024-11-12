"use client"
import { sendMessage } from '@/lib/contact-action';
import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(formData);
    setFormData({
      company: '',
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <footer className="bg-niketolad/85 text-white py-12" id='footer'>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className='w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0'>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-4 text-sm md:text-xl">
              Nikentolad Group
              <br />
              8, Adelabu Close Opposite Nigeria Customs Training College, Ikeja, Lagos, Nigeria.
              <br />
              Ikeja, Lagos, Nigeria.
            </p>
            <p className='text-sm md:text-xl'>
              Email: info@nikentoladgroup.com
              <br />
              Phone: +234 803 727 1866
              <br/>
              Phone: +234 802 754 6836
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-white">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-700 rounded-md text-black focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your company"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-700 rounded-md text-black focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-700 rounded-md text-black focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-700 rounded-md text-black focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;