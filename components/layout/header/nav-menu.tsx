"use client";

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '@/components/layout/header/mobile-menu';
import { navLinks } from '@/lib/constants';
import Image from 'next/image';
import logo from "@/public/images/logo.png"
import Button from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <Link
              href={"#"}
            >
              <Image
                  src={logo}
                  width={70}
                  height={70}
                  alt='logo'
                  className='hover:cursor-pointer'
              />
            </Link>
            
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-custom-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className='hidden md:flex'>
            <Button>Contact</Button>
          </div>


          <MobileMenu 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navLinks={navLinks}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;