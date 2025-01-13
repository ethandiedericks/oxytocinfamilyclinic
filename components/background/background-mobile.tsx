import Image from 'next/image';
import background from '@/public/images/background/background.jpg';

const BackgroundMobile = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nurturing New Beginnings
            </h2>
            <p className="text-lg text-gray-600">
              Oxytocin family clinic was started in the pandemic 2020 where
              women were fearful of going to hospital due to possibly
              contracting Covid 19 and partners not allowed with the mother.
              Homebirths increased rapidly and the center was born.
            </p>
            <p className="text-lg text-gray-600">
              All couples are prepared for labour and fear is eradicated prior
              to birth. Most couples choose waterbirths because water is a
              natural pain reliever and thus so many women can experience a calm
              easier birth. Freedom of movement allows women to be in control
              and manage labour better. We promote everything natural, hugs
              before drugs, skin to skin, delayed cord clamping
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comprehensive prenatal care</li>
              <li>Natural and medicated birth options</li>
              <li>State-of-the-art delivery suites</li>
              <li>Postpartum support and education</li>
              <li>Breastfeeding assistance</li>
            </ul>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src={background}
              alt="Maternity clinic interior"
              width={1080}
              height={720}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundMobile;
