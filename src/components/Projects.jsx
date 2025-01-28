const ProjectsSection = () => {
  return (
    <div className="py-12 bg-white">
      {/* Projects Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <div className="flex justify-center space-x-4">
          <button className="text-gray-800 hover:text-gray-500">All</button>
          <button className="text-gray-800 hover:text-gray-500">Furniture</button>
          <button className="text-gray-800 hover:text-gray-500">Design</button>
          <button className="text-gray-800 hover:text-gray-500">House</button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-gray-50"
            >
              <img
                src={`/public/project1.jpeg`}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">
                  Our Services Line One
                </h3>
                <p className="text-gray-600">Service line two</p>
              </div>
            </div>
          ))}
      </div>

      {/* Testimonial Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonial</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
          {/* Testimonial 1 */}
          <div className="flex items-center space-x-4">
            <img
              src="/public/billgates.jpeg"
              alt="James Passaquindici Arcand"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold">James Passaquindici Arcand</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </p>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="flex items-center space-x-4">
            <img
              src="/public/elonmusk.jpeg"
              alt="Abram Schleifer"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold">Abram Schleifer</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
