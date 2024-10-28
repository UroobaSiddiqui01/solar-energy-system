const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="bg-yellow-500 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="md:w-1/2 p-6 ">
          <h3 className="text-3xl font-extrabold mb-4">About Us</h3>
          <p className="font-extralight">We are dedicated to providing the best handyman services to meet your needs. Our skilled technicians are here to help you.</p>
        </div>
        
        {/* Image Section with Overlay Effect */}
        <div className="md:w-1/2 h-64 md:h-80 relative rounded-lg overflow-hidden shadow-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('/installer-1.webp')` }}
          ></div>
          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUsSection;


  