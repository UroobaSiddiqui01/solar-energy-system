import Image from 'next/image';
import { FaHandshake, FaCogs, FaDollarSign, FaTools } from 'react-icons/fa';

const HomeInstallationSection: React.FC = () => {
  return (
    <section id="home" className="py-10 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Images and Stats */}
        <div className="lg:w-1/2 grid gap-4">
          {/* Top Section: One Horizontal Image */}
          <div className="relative w-full h-48 sm:h-52 md:h-60 lg:h-64">
            <Image 
              src="/depositphotos_651912482-stock-photo-technician-holding-collector-solar-farm.jpg" 
              alt="Project Image" 
              layout="responsive"
              width={500} 
              height={300}
              className="rounded-lg shadow-lg object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-2 sm:p-4 rounded-lg">
              <h4 className="text-base sm:text-lg md:text-xl font-bold">560+</h4>
              <p className="text-xs sm:text-sm">Projects Done</p>
            </div>
          </div>
          
          {/* Bottom Section: Two Vertical Stacked Images */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative w-full h-36 sm:h-40 md:h-48">
              <Image 
                src="/images.jpeg" 
                alt="Technician Image 1" 
                layout="responsive"
                width={300} 
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-1 sm:p-2 rounded-lg">
                <h4 className="text-sm sm:text-base md:text-lg font-bold">180+</h4>
                <p className="text-xs">Technicians</p>
              </div>
            </div>
            <div className="relative w-full h-36 sm:h-40 md:h-48">
              <Image 
                src="/images (1).jpeg" 
                alt="Technician Image 2" 
                layout="responsive"
                width={300} 
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-1 sm:p-2 rounded-lg">
                <h4 className="text-sm sm:text-base md:text-lg font-bold">180+</h4>
                <p className="text-xs">Technicians</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Information */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Home And Businesses Installation Services</h3>
          <p className="text-sm sm:text-base mb-4 sm:mb-6">
            We provide hassle-free installation services for homes and businesses. Our skilled technicians ensure top-notch solutions tailored to your needs.
          </p>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col items-center lg:flex-row lg:items-start space-x-0 lg:space-x-2 sm:space-x-3">
              <FaHandshake className="text-yellow-500 text-lg sm:text-xl md:text-2xl" />
              <div className="text-center lg:text-left">
                <h4 className="text-sm sm:text-md md:text-lg font-semibold">Earliest Consultation</h4>
                <p className="text-xs sm:text-sm">Get an early consultation to discuss your project needs and requirements.</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:items-start space-x-0 lg:space-x-2 sm:space-x-3">
              <FaCogs className="text-yellow-500 text-lg sm:text-xl md:text-2xl" />
              <div className="text-center lg:text-left">
                <h4 className="text-sm sm:text-md md:text-lg font-semibold">Customized Solution</h4>
                <p className="text-xs sm:text-sm">Our solutions are tailored to meet specific client requirements for optimal results.</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:items-start space-x-0 lg:space-x-2 sm:space-x-3">
              <FaDollarSign className="text-yellow-500 text-lg sm:text-xl md:text-2xl" />
              <div className="text-center lg:text-left">
                <h4 className="text-sm sm:text-md md:text-lg font-semibold">Affordable Pricing</h4>
                <p className="text-xs sm:text-sm">We offer competitive pricing without compromising on quality and service.</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:items-start space-x-0 lg:space-x-2 sm:space-x-3">
              <FaTools className="text-yellow-500 text-lg sm:text-xl md:text-2xl" />
              <div className="text-center lg:text-left">
                <h4 className="text-sm sm:text-md md:text-lg font-semibold">All-In-One Service</h4>
                <p className="text-xs sm:text-sm">From consultation to installation, we provide comprehensive solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInstallationSection;






