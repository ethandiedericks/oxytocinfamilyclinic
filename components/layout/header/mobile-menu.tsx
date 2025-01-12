import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import logo_no_words from '@/public/images/logo_no_words.png';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: Array<{ href: string; label: string }>;
}

const MobileMenu = ({ isOpen, setIsOpen, navLinks }: MobileMenuProps) => {
  return (
    <>
      <div className="w-full md:hidden flex items-center justify-between">
        <div className="inline-flex items-center">
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

        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-custom-blue-hover hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-blue"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-20 left-0 right-0 z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-custom-blue-hover hover:cursor-pointer block px-3 py-2 rounded-md text-sm font-normal transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
