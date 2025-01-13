'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '@/components/layout/header/mobile-menu';
import { navLinks } from '@/lib/constants';
import Image from 'next/image';
import logo_no_words from '@/public/images/logo_no_words.png';
import Button from '@/components/ui/button';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/lib/constants';

const DesktopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Social Banner */}
      <div className="bg-[#D3EFFB] py-2 border-b border-b-[#D3EFFB] flex justify-center items-center">
        <div className="flex space-x-6">
          <Link
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebook size={20} />
          </Link>
          <Link
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200"
          >
            <FaTiktok size={20} />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white relative border border-b">
        <div className="w-full mx-auto py-2 px-4 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:inline-flex items-center">
              <Link href={'#'}>
                <Image
                  src={logo_no_words}
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
    </div>
  );
};

export default DesktopMenu;
