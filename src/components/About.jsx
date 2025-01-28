const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:mx-40 flex flex-col md:flex-row items-beetween md:items-center">
        <img src="/download (8).jpeg" alt="About" className="w-full h-80 object-cover md:w-1/2 rounded-md" />
        <div className="md:ml-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
