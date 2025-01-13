import React from 'react';
import Button from '../ui/button';
import Image from 'next/image';
import hero from '@/public/images/hero/hero.jpg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            A Better Way&nbsp;
            <span className="text-pink-600">To Birth.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience the journey of motherhood with confidence and comfort.
            Our expert team provides personalized maternity care that respects
            your choices, beliefs, and natural birthing preferences.
          </p>
          <div className="flex gap-4">
            <Link href="#contact" aria-label="Book Consultation">
              <Button>Book Consultation</Button>
            </Link>
            <Link href="#services" aria-label="View Services">
              <Button variant="secondary">View Services</Button>
            </Link>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={hero}
            alt="Maternity Care"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
