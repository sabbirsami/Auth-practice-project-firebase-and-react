import PropTypes from "prop-types";
import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

function Service({ service }) {
    return (
        <div className="rounded-lg">
            <div
                className={`p-8 rounded-lg ${
                    service.hot ? "bg-emerald-600 text-white pt-16" : ""
                }`}
            >
                <p className="text-5xl font-semibold pb-8">${service.price}</p>
                <p className="text-3xl font-semibold pb-3">{service.name}</p>
                <p className="text-base  pb-3">{service.short_detail}</p>
                <div className="py-2">
                    {service.features.map((feature, idx) => (
                        <p
                            className={`${
                                service.hot ? "text-white" : "text-[#416446]"
                            } flex items-center gap-4`}
                            key={idx}
                        >
                            <span
                                className={`bg-green-100 rounded-full p-1 mb-1`}
                            >
                                {" "}
                                <LuCheck className=" text-[#416446] text-lg font-bold" />
                            </span>
                            {feature}
                        </p>
                    ))}
                </div>
                <div className=" pt-6">
                    <button className="w-full  rounded-full bg-green-100 text-[#416446]">
                        <Link
                            className="w-full block py-3"
                            to={`/service/${service.id}`}
                        >
                            {" "}
                            Show details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Service;
Service.propTypes = {
    service: PropTypes.object,
};
