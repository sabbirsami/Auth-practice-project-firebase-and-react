import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FnQ = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="container mx-auto py-32 ">
            <h2
                className="text-5xl heading-font md:pb-10 text-center"
                data-aos="fade-up"
            >
                Frequently Asked Questions
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>
            <div className="join join-vertical w-full">
                <div
                    className="collapse collapse-arrow join-item border border-base-300"
                    data-aos="fade-up"
                >
                    <input
                        type="radio"
                        name="my-accordion-4"
                        checked="checked"
                    />
                    <div className="collapse-title text-xl font-medium">
                        What’s the difference between event design and event
                        planning?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Event design and event planning work hand in hand to
                            deliver a successful event.Events by Knight offer
                            tailor made events. This means we incorporate both
                            event design and event planning to create that
                            perfect event. Event design and event planning work
                            hand in hand to deliver a successful event.Events by
                            Knight offer tailor made events. This means we
                            incorporate both event design and event planning to
                            create that perfect event.
                        </p>
                    </div>
                </div>
                <div
                    className="collapse collapse-arrow join-item border border-base-300"
                    data-aos="fade-up"
                >
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How early do we need to start planning an event
                    </div>
                    <div className="collapse-content">
                        <p>
                            Event design and event planning work hand in hand to
                            deliver a successful event.Events by Knight offer
                            tailor made events. This means we incorporate both
                            event design and event planning to create that
                            perfect event. Event design and event planning work
                            hand in hand to deliver a successful event.Events by
                            Knight offer tailor made events. This means we
                            incorporate both event design and event planning to
                            create that perfect event.
                        </p>
                    </div>
                </div>
                <div
                    className="collapse collapse-arrow join-item border border-base-300"
                    data-aos="fade-up"
                >
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is your refund and cancellation policy?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Event design and event planning work hand in hand to
                            deliver a successful event.Events by Knight offer
                            tailor made events. This means we incorporate both
                            event design and event planning to create that
                            perfect event. Event design and event planning work
                            hand in hand to deliver a successful event.Events by
                            Knight offer tailor made events. This means we
                            incorporate both event design and event planning to
                            create that perfect event.
                        </p>
                    </div>
                </div>
                <div
                    className="collapse collapse-arrow join-item border border-base-300"
                    data-aos="fade-up"
                >
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How do you keep budgets on track?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Event design and event planning work hand in hand to
                            deliver a successful event.Events by Knight offer
                            tailor made events. This means we incorporate both
                            event design and event planning to create that
                            perfect event. Event design and event planning work
                            hand in hand to deliver a successful event.Events by
                            Knight offer tailor made events. This means we
                            incorporate both event design and event planning to
                            create that perfect event.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FnQ;
