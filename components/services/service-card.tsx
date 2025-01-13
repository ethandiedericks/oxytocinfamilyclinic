import { FC } from 'react';

interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string; // Added image prop
}

const ServiceCard: FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  image,
}) => {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden group">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-center">
        <Icon className="w-12 h-12 text-white mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
