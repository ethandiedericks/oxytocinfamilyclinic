import Image from 'next/image';
import { FC } from 'react';

interface StaffCardProps {
  name: string;
  role: string;
  shortDescription: string;
  image: string;
}

const StaffCard: FC<StaffCardProps> = ({
  name,
  role,
  shortDescription,
  image,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
    <Image
      src={image}
      alt={name}
      width={300}
      height={300}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-primary font-medium mb-3">{role}</p>
      <p className="text-gray-600">{shortDescription}</p>
    </div>
  </div>
);

export default StaffCard;
