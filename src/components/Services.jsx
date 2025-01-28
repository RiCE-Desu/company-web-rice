import { CardServices } from "./CardServices";

const ServicesData = [
  {
    text: "Planning",
    icon: "PenTool"
  },
  {
    text: "Exterior",
    icon: "House"
  },
  {
    text: "Interior",
    icon: "BedSingle"
  }
]

const Services = () => {
  return (
    <section className="py-16 bg-[#254D4D]/20">
      <div className="px-5 mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <CardServices text="Planning" icon="Armchair" /> */}
          {ServicesData.map((service, index) => (
            <CardServices key={index} text={service.text} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
