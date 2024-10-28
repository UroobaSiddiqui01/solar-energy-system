const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Solar Panel Installation", img: "/services1.png" },
            { name: "Electrical Wiring", img: "/wiring-installation-service-500x500.webp" },
            { name: "Battery Storage Solutions", img: "/Batts.jpg" },
            { name: "System Maintenance", img: "/software-maintenance-management.png" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow-md text-center"
            >
              <div
                className="w-full h-32 bg-cover bg-center rounded mb-4"
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>
              <h4 className="text-lg font-semibold">{service.name}</h4>
              <p>Professional {service.name.toLowerCase()} services to meet your needs.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

