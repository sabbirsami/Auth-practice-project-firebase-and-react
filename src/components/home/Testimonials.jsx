import people1 from "../../assets/people1.png";
import people2 from "../../assets/people2.png";
import people3 from "../../assets/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "Uniquely deploy cross-unit benefits with wireless testing procedures. Build full backward compatible relationships.",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test clickthroughs from users.",
            location: "California",
            img: people2,
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "Holisticly predominate extensible testing procedures for reliable supply chains top line service cutting edge deliverables.",
            location: "California",
            img: people3,
        },
        {
            _id: 1,
            name: "Winson Herry",
            review: "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications.",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Kristin Yang",
            review: "Collaboratively administrate empowered markets via plug-and-play networks after installed base benefits.",
            location: "California",
            img: "http://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/client-03-160x160.jpg",
        },
    ];
    return (
        <div className="container mx-auto pt-32">
            <h2 className="text-5xl heading-font md:pb-10 text-center">
                Testimonial
                <span className="divider w-28 border p-0  h-1 mx-auto bg-green-700"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center lg:px-14 px-4 mx-auto justify-center">
                {reviews.map((testimonial) => (
                    <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
