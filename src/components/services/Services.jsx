import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    console.log(services);
    return (
        <div className="container mx-auto py-32 ">
            <h2 className="text-5xl heading-font pb-10 text-center">
                Our Services
            </h2>
            <div className="grid grid-cols-4 gap-8 pt-10 items-end">
                {services.slice(0, 4).map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
