import event1 from "../../assets/event0.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event02.jpg";
import event4 from "../../assets/event3.jpg";
import event5 from "../../assets/event4.jpg";

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="md:flex  block justify-between gap-10">
                <div className="md:py-16 py-4">
                    <h1 className="md:text-8xl text-4xl font-semibold heading-font md:py-32 py-4 px-1">
                        Best Event Management Team in Dhaka City
                    </h1>
                </div>
                <div className="md:pt-32 bottom-0">
                    <h2 className="text-sm pb-2">Some of our events photo*</h2>
                    <div className="carousel w-full">
                        <div
                            id="slide1"
                            className="carousel-item relative w-full"
                        >
                            <img src={event1} className="w-full" />
                            <div className="absolute flex bottom-1 gap-4  transform -translate-y-1/2 left-5 right-5">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide2"
                            className="carousel-item relative w-full"
                        >
                            <img src={event2} className="w-full" />
                            <div className="absolute flex bottom-1 gap-4 transform -translate-y-1/2 left-5 right-5 ">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide3"
                            className="carousel-item relative w-full"
                        >
                            <img src={event3} className="w-full" />
                            <div className="absolute flex bottom-1 gap-4 transform -translate-y-1/2 left-5 right-5 ">
                                <a href="#slide2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide4"
                            className="carousel-item relative w-full"
                        >
                            <img src={event4} className="w-full" />
                            <div className="absolute flex bottom-1 gap-4 transform -translate-y-1/2 left-5 right-5 ">
                                <a href="#slide3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide5" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide5"
                            className="carousel-item relative w-full"
                        >
                            <img src={event5} className="w-full" />
                            <div className="absolute flex bottom-1 gap-4 transform -translate-y-1/2 left-5 right-5 ">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
