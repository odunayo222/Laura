import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State to store the video sources
  const [videoSrcs] = useState([
    "/testimonial.mp4", // URL for Video 1
    "/testimonial2.mp4", // URL for Video 2
  ]);

  // State to store the currently selected video source
  const [currentVideo, setCurrentVideo] = useState('');

  const handleVideoClick = (src) => {
    setCurrentVideo(src);
  };

  return (
    <section className="bg-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Are Saying
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Trusted by clients globally, our portfolio manager offers unparalleled financial strategies.
        </p>

        {/* Testimonials Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
            <div className="flex items-center mb-6">
              <img
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
                src="/pic3.jpg"
                alt="Portfolio Manager"
              />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-900">Laura Whitlock</p>
                <p className="text-sm text-blue-500">Portfolio Manager</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              My mission is to empower clients with personalized financial strategies. I ensure that every decision made aligns with their long-term financial success.
            </blockquote>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
            <div className="flex items-center mb-6">
              <img
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                alt="Client"
              />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-900">John Smith</p>
                <p className="text-sm text-gray-500">Satisfied Client</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              Laura’s insights transformed my financial strategy. Her knowledge and dedication brought immense value to my investment portfolio.
            </blockquote>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
            <div className="flex items-center mb-6">
              <img
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
                src="https://serenabolton.com/wp-content/uploads/2022/08/corporate-photoshoot-014.jpg"
                alt="Client"
              />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-900">Emily Johnson</p>
                <p className="text-sm text-gray-500">Long-term Client</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              Her strategic mindset and in-depth market knowledge have helped me achieve financial stability and growth over the years.
            </blockquote>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
            <div className="flex items-center mb-6">
              <img
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
                src="https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-600nw-2142820441.jpg"
                alt="Client"
              />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-900">Alex Martinez</p>
                <p className="text-sm text-gray-500">Corporate Investor</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              Laura’s approach is a perfect blend of risk management and innovative thinking. My portfolio has never been more balanced.
            </blockquote>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
            <div className="flex items-center mb-6">
              <img
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
                src="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s="
                alt="Client"
              />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-900">Samantha Brown</p>
                <p className="text-sm text-gray-500">Entrepreneur</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              She has a deep understanding of the market, and her guidance has been invaluable in navigating financial challenges.
            </blockquote>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500">
            <div className="flex items-center mb-6">
              <img
                className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
                src="https://img.freepik.com/premium-photo/portrait-photo-korean-asian-ceo-businessman_63106-1061.jpg?w=360"
                alt="Client"
              />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-900">Michael Lee</p>
                <p className="text-sm text-gray-500">Private Investor</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              Laura’s attention to detail and proactive management has given me confidence in my financial future. I highly recommend her services.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
