import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={img1} className="max-w-md rounded-lg shadow-2xl" />
          <img
            src={img2}
            className="max-w-sm rounded-lg shadow-2xl absolute right-5 top-1/2 border-8"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-lime-700 font-bold text-3xl py-3">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in thhis field
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="pb-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
