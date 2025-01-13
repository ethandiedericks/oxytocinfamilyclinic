'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '@/components/layout/header/mobile-menu';
import { navLinks } from '@/lib/constants';
import Image from 'next/image';
import blurred_logo from '@/public/images/blurred_logo.png';
import Button from '@/components/ui/button';

const DesktopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white relative border border-b ">
      <div className="w-full mx-auto py-2 px-4 lg:px-20  ">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:inline-flex items-center">
            <Link href={'#'}>
              <Image
                src={blurred_logo}
                width={60}
                height={60}
                alt="logo"
                className="hover:cursor-pointer"
              />
            </Link>
            <span className="text-md font-medium text-gray-700">
              Oxytocin Family Clinic
            </span>
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

          <div className="hidden md:flex">
            <Link href={'#contact'}>
              <Button>Contact</Button>
            </Link>
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

export default DesktopMenu;
