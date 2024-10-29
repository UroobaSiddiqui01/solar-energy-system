import { FaUser, FaEnvelope, FaHammer, FaClock, FaStar, FaUserShield } from 'react-icons/fa';

const RequestQuoteSection: React.FC = () => {
  return (
    <section id='contact' className="bg-gray-200 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 px-4 sm:px-6">
        
        {/* Left Section: Request a Quote Form */}
        <div className="md:w-1/2 bg-white p-6 sm:p-8 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Request A Quote</h3>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center w-full">
                <FaUser className="text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded text-gray-800"
                />
              </div>
              <div className="flex items-center w-full">
                <FaEnvelope className="text-gray-600 mr-2" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border rounded text-gray-800"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center w-full">
                <FaHammer className="text-gray-600 mr-2" />
                <select className="w-full px-4 py-2 border rounded text-gray-800">
                  <option>Select Your Work Type</option>
                  <option>Installation</option>
                  <option>Maintenance</option>
                  <option>Repair</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full px-4 py-2 border rounded text-gray-800"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-600 text-base sm:text-lg"
            >
              Get Instant Quote
            </button>
          </form>
        </div>

        {/* Right Section: Why We Are Best */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-yellow-500 p-6 rounded shadow-md text-center">
            <h4 className="text-xl font-bold text-white mb-2">Why We Are Best</h4>
            <p className="text-white text-sm sm:text-base">
              Committed to excellence in our services. We offer value, reliability, and quality for all your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center">
              <FaUserShield className="text-yellow-500 text-3xl mb-2" />
              <h5 className="font-semibold text-gray-900">Licensed Technicians</h5>
              <p className="text-xs sm:text-sm text-gray-700">Certified professionals ready to serve.</p>
            </div>
            <div className="text-center">
              <FaStar className="text-yellow-500 text-3xl mb-2" />
              <h5 className="font-semibold text-gray-900">Top Rated Service</h5>
              <p className="text-xs sm:text-sm text-gray-700">Rated highly by our valued clients.</p>
            </div>
            <div className="text-center">
              <FaClock className="text-yellow-500 text-3xl mb-2" />
              <h5 className="font-semibold text-gray-900">Timely Services</h5>
              <p className="text-xs sm:text-sm text-gray-700">We respect your time with punctual services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;

