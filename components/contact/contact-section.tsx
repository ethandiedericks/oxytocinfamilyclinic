import React from 'react';
import ContactButtons from './contact-buttons';
import { CONTACT_INFO } from '@/lib/constants';

const Contact = () => {
  const email = CONTACT_INFO.email;
  const phoneNumber = CONTACT_INFO.phone;

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactButtons email={email} phoneNumber={phoneNumber} />
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8053919552335!2d25.530879499999998!3d-33.92040790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad12d34d08c59%3A0xed1367a23bf6586c!2s240%20Haworthia%20Dr%2C%20Malabar%2C%20Gqeberha%2C%206020!5e0!3m2!1sen!2sza!4v1736691886405!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
