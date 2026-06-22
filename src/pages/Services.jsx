const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <h2 className="section-title">Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="shadow-lg p-6 rounded-lg text-center">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" className="h-40 w-full object-cover mb-4"/>
          <h3 className="font-bold mb-2">Web Development</h3>
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a" className="h-40 w-full object-cover mb-4"/>
          <h3 className="font-bold mb-2">UI/UX Design</h3>
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center">
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" className="h-40 w-full object-cover mb-4"/>
          <h3 className="font-bold mb-2">Responsive Design</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;