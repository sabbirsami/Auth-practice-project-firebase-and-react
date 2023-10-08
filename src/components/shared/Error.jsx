import Navbar from "../home/Navbar";

const Error = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto h-[80vh] flex heading-font justify-center items-center">
                <h2 className="text-6xl pb-16">404 | Page not found</h2>
            </div>
        </div>
    );
};

export default Error;
