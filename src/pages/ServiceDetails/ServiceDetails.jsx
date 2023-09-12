import { useLoaderData } from "react-router-dom";
import image from "../../assets/images/checkout/checkout.png";
import CentralContent from "./CentralContent";
import RightNav from "./RightNav";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();

  return (
    <div className=" w-10/12 mb-10 mx-auto">
      <div
        className="hero rounded-lg h-52 mb-10"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content w-full text-neutral-content justify-start">
          <h1 className="text-5xl font-bold">Service Details</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <CentralContent serviceDetails={serviceDetails}></CentralContent>
        <RightNav serviceDetails={serviceDetails}></RightNav>
      </div>
    </div>
  );
};

export default ServiceDetails;
