const HeroSection: React.FC = () => {
  return (
    <section 
      className="bg-gray-900 text-white py-10 sm:py-16 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-ima.jpeg')" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 sm:p-8 md:p-10 rounded-lg text-center">
        
        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Honest, Trustworthy, And Does Good Work
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            Providing professional handyman services to solve your problems efficiently.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 text-sm sm:text-base rounded">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



