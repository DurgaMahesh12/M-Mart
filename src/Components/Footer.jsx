import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-2">M-Mart</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. Quality products, fast delivery, and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 ">
              <li className="hover:text-blue-500">
                  Home
              </li>
              <li className="hover:text-blue-500">
             
                  Shop
         
              </li>
              <li className="hover:text-blue-500">
              
                  About Us
        
              </li>
              <li className="hover:text-blue-500">
   
                  Contact Us
           
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-500">
                  FAQ
              </li>
              <li className="hover:text-blue-500">
              
                  Returns
      
              </li>
              <li className="hover:text-blue-500">
               
                  Shipping Info
           
              </li>
              <li className="hover:text-blue-500">
              
                  Privacy Policy
             
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} M-Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
