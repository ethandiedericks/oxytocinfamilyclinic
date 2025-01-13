'use client';

import { useState, FC } from 'react';
import Button from '@/components/ui/button';
import { Phone, Copy, Check, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';

interface ContactButtonsProps {
  email: string;
  phoneNumber: string;
}

const ContactButtons: FC<ContactButtonsProps> = ({ email, phoneNumber }) => {
  const [copied, setCopied] = useState(false);
  const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-4 w-3/4">
        <div>
          <Button
            onClick={copyEmail}
            variant="default"
            size="default"
            className="w-full"
            icon={
              copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )
            }
          >
            {copied ? 'Copied!' : 'Copy Email'}
          </Button>
        </div>
        <div>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="default" className="w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </Link>
        </div>
        <div>
          <Link href={`tel:${phoneNumber}`}>
            <Button variant="default" size="default" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <p>{CONTACT_INFO.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;
