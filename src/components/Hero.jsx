const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[700px]" style={{ backgroundImage: "url('/download (7).jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold">Best Solution For Your Home</h1>
          <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
