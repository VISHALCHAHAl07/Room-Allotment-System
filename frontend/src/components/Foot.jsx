import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-xl font-semibold">Yuvraj @NIT Rourkela</p>
        <div>
          <a href="https://www.linkedin.com/in/yuvraj-prajapat-4890b522a" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Linkedin</a>
          {/* <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 2</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link 3</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;