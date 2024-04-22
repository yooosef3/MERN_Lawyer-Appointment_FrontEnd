import ServiceCard from "./ServiceCard";
import { getServices } from "@/lib/data";

const ServicesCards = () => {
  const services = getServices();
  return (
    <div>
      <div className="lg:h-36 w-full bg-lime-100" />
      <div className="grid md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] gap-8 lg:-mt-16 py-8 lg:py-0 px-8 bg-lemon lg:bg-transparent">
        {services.map((service) => (
          <ServiceCard {...service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
