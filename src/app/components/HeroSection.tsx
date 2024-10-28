const HeroSection: React.FC = () => {
  return (
    <section 
      className="bg-gray-900 text-white py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-ima.jpeg')" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-black bg-opacity-50 p-10 rounded-lg">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Honest, Trustworthy, And Does Good Work</h2>
          <p className="mb-6">Providing professional handyman services to solve your problems efficiently.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Get a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

