import Info from "./Info";
import ServicesCards from "./ServicesCards";

const Services = () => {
    return (
        <div className="padding grid lg:grid-cols-[1fr_3fr]">
            <Info />
            <ServicesCards />
        </div>
    );
};

export default Services;