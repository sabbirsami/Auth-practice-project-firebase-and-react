import { useLoaderData, useParams } from "react-router-dom";
import { LuCheck } from "react-icons/lu";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const services = useLoaderData();
    const selectedService = services.find((service) => service.id == serviceId);
    console.log(selectedService);
    return (
        <div className="container mx-auto py-16">
            <div className="flex justify-between items-center lg:px-0 px-2">
                <h2 className="text-4xl font-semibold pb-6 heading-font">
                    {selectedService.name}
                </h2>
                <p className="text-3xl">+</p>
            </div>
            <img
                className="h-[28rem] w-full object-cover"
                src={selectedService.image[1]}
                alt=""
            />
            <div className="md:px-32 px-3 py-16">
                <p className=""> {selectedService.details}</p>
                <div className="py-16 grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <h2 className="text-4xl heading-font">
                        Our services vary depending on the event, but heres a
                        general idea of what we offer
                    </h2>
                    <div className=" px-6">
                        <p>
                            <LuCheck className="inline me-3" />
                            Venue Selection and Layout
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            All Appointment Scheduling
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Planning Schedule and Timeline
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Vendor Recommendation, Negotiation, and Coordination
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Design and Decor
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Lighting, Staging, and Sound
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Selection and Coordination of Invitations and All
                            Printed Materials
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            RSVP Coordination
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Planning and Coordination of All Auxiliary Wedding
                            Events
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Guest Concierge Services
                        </p>
                    </div>
                    <div className=" px-6">
                        <p>
                            <LuCheck className="inline me-3" />
                            Ceremony Planning
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Event Run of Show
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            On-Site Event Supervision
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Gifting for Guests
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Including Welcome Gifts, Evening Turndown Surprises,
                            and Favors
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Food and Beverage
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Service Staff Training
                        </p>

                        <p>
                            <LuCheck className="inline me-3" />
                            Coordination of NDAs, and if Applicable, Press
                            Liason
                        </p>
                        <p>
                            <LuCheck className="inline me-3" />
                            Entertainment
                        </p>
                    </div>
                </div>

                <div className=" pt-6">
                    <h2 className="text-3xl pb-4">Photos:</h2>
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div className="row-span-2">
                            <img
                                className="object-cover h-full"
                                src={selectedService.image[0]}
                                alt=""
                            />
                        </div>
                        <div className="">
                            <img
                                className="object-cover h-full"
                                src={selectedService.image[1]}
                                alt=""
                            />
                        </div>
                        <div className="">
                            <img
                                className="object-cover h-full"
                                src={selectedService.image[2]}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
