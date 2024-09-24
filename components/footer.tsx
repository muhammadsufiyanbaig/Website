import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent rounded-lg shadow dark:bg-transparent m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src="/pic.jpg" className="h-8 w-8 rounded-lg" height={100} width={100} alt="TG Appliances" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TG Appliances</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="#product" className="hover:underline me-4 md:me-6">Products</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} <Link href="https://muhammadsufiyanbaig.vercel.app/" target='_blank' className="hover:underline">Muhammad Sufiyan Baig</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
