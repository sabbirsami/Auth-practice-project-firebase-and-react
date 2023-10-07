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
        <div className="container mx-auto md:py-32 py-6 ">
            <h2 className="text-5xl heading-font md:pb-10 text-center">
                Our Services
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-10 items-end">
                {services.slice(0, 4).map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
