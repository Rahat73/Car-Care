import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((result) => result.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-5 bg-base-200 text-center">
      <h1 className="text-3xl font-bold text-lime-700 pt-6">Our Services</h1>
      <h1 className="text-5xl py-3">Our Sevice Area</h1>
      <p className="pb-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias impedit
        explicabo officia <br />
        veritatis dicta vero repudiandae laudantium labore veniam, iusto fugiat
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
