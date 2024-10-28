
import { FaUser, FaEnvelope, FaHammer, FaClock, FaStar, FaUserShield } from 'react-icons/fa';

const RequestQuoteSection: React.FC = () => {
  return (
    <section id='contact' className="bg-gray-200 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8">
        
        {/* Left Section: Request a Quote Form */}
        <div className="md:w-1/2 bg-white p-8 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-4">Request A Quote</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="flex items-center w-full">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded" />
              </div>
              <div className="flex items-center w-full">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center w-full">
                <FaHammer className="text-gray-500 mr-2" />
                <select className="w-full px-4 py-2 border rounded">
                  <option>Select Your Work Type</option>
                  <option>Installation</option>
                  <option>Maintenance</option>
                  <option>Repair</option>
                </select>
              </div>
              <input type="text" placeholder="Contact Number" className="w-full px-4 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-600">
              Get Instant Quote
            </button>
          </form>
        </div>

        {/* Right Section: Why We Are Best */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-yellow-500 p-6 rounded shadow-md text-center">
            <h4 className="text-xl font-bold text-white mb-2">Why We Are Best</h4>
            <p className="text-white">Committed to excellence in our services. We offer value, reliability, and quality for all your needs.</p>
          </div>
          <div className="flex justify-between items-start gap-4">
            <div className="text-center">
              <FaUserShield className="text-yellow-500 text-3xl mb-2" />
              <h5 className="font-semibold">Licensed Technicians</h5>
              <p className="text-sm">Certified professionals ready to serve.</p>
            </div>
            <div className="text-center">
              <FaStar className="text-yellow-500 text-3xl mb-2" />
              <h5 className="font-semibold">Top Rated Service</h5>
              <p className="text-sm">Rated highly by our valued clients.</p>
            </div>
            <div className="text-center">
              <FaClock className="text-yellow-500 text-3xl mb-2" />
              <h5 className="font-semibold">Timely Services</h5>
              <p className="text-sm">We respect your time with punctual services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;
