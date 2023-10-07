const Gallery = () => {
    return (
        <div className="">
            <h2 className="text-5xl heading-font md:pb-10 text-center">
                Photo Gallery
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="">
                    <img
                        className="w-full object-cover h-80"
                        src="https://i.ibb.co/sCtGFJv/nathan-dumlao-As8zq82-LBpw-unsplash.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="w-full object-cover h-80"
                        src="https://i.ibb.co/yp6ykXh/jon-tyson-CP68p1f-ZS8k-unsplash.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="w-full object-cover h-80"
                        src="https://i.ibb.co/Tgsk3Hf/andrea-mininni-VLlk-OJdz-LG0-unsplash.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="w-full object-cover h-80"
                        src="https://i.ibb.co/WP2mQnt/annie-spratt-t-Kp-A64-Qrcc-M-unsplash.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="w-full object-cover h-80"
                        src="https://i.ibb.co/zQnBVHX/al-elmes-ULHx-Wq8reao-unsplash.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="w-full object-cover h-80"
                        src="https://i.ibb.co/LRgcWMP/event4.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
