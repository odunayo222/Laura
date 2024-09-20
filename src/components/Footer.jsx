import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-20 xl:px-44">
      <div className="container mx-auto">

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Laura Whitlock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
