import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6p9tops', 'template_p85tpug', form.current, 'RqX2A1zEq6a7J7GZA')
      .then(
        () => {
          toast.success('Your message has been sent!', {
            position: 'top-right',
          });
          e.target.reset();
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            position: 'top-right',
          });
        }
      );
  };

  return (
    <section id='Contact' className='bg-gray-900'>
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8 text-[#D4AF37] pt-10">Get in Touch</h2>
        <p className="text-center text-white mb-12">
          Feel free to reach out if you have any questions or just want to connect.
        </p>
        <div className="max-w-lg mx-auto bg-white p-8 shadow-2xl rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            {/* Name and Phone Number: side by side on medium and large screens, stacked on small screens */}
            <div className="mb-6 md:flex md:space-x-4">
              <div className="w-full mb-6 md:mb-0">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="WhatsApp, preferably"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#D4AF37] text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
