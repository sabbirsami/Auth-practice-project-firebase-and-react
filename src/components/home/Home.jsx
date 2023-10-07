import Services from "../services/Services";
import Banner from "./Banner";
import FnQ from "./FnQ";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <Services />
            <Gallery />
            <Testimonials />
            <FnQ />
        </div>
    );
};

export default Home;
