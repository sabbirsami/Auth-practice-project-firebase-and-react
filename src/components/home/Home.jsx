import Services from "../services/Services";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Banner />
            <Services />
        </div>
    );
};

export default Home;
