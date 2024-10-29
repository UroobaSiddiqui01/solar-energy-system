const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="bg-yellow-500 py-16 sm:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6">
        
        {/* Text Section */}
        <div className="md:w-1/2 p-4 sm:p-6 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About Us</h3>
          <p className="text-gray-800 text-base sm:text-lg font-normal leading-relaxed">
            We are dedicated to providing the best handyman services to meet your needs. Our skilled technicians are here to help you.
          </p>
        </div>
        
        {/* Image Section with Overlay Effect */}
        <div className="md:w-1/2 h-48 sm:h-64 md:h-80 relative rounded-lg overflow-hidden shadow-lg mt-6 md:mt-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('/installer-1.webp')` }}
          ></div>
          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUsSection;



  