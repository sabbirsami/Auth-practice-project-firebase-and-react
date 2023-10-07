import Services from "../services/Services";
import Banner from "./Banner";
import FnQ from "./FnQ";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <Services />
            <Gallery />
            <FnQ />
        </div>
    );
};

export default Home;
