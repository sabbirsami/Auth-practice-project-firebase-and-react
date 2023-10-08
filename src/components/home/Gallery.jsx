import img1 from "../../assets/bday.jpg";
import img2 from "../../assets/bday2.jpg";
import img3 from "../../assets/eventimg18.jpg";
import img4 from "../../assets/eventimg.jpg";
import img5 from "../../assets/eventimg3.jpg";
import img6 from "../../assets/event4.jpg";
const Gallery = () => {
    const images = [
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        },
        {
            id: 5,
            img: img5,
        },
        {
            id: 6,
            img: img6,
        },
    ];
    return (
        <div className="">
            <h2 className="text-5xl heading-font md:pb-10 text-center">
                Photo Gallery
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {images.map((img, idx) => (
                    <div key={idx} className="">
                        <img
                            className="w-full object-cover h-80"
                            src={img.img}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
