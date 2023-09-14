import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaDownload } from "react-icons/fa";
import ourBrochure from "../../assets/pdfs/OurBrochure.pdf";
import companyDetails from "../../assets/pdfs/CompanyDetails.pdf";
import logo from "../../assets/logo.png";
import ActiveLink from "../../components/ActiveLink/ActiveLink";

const RightNav = ({ serviceDetails }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-care-server-rahat73.vercel.app/services")
      .then((result) => result.json())
      .then((data) => setServices(data));
  }, []);

  const handleDownloadFile1 = () => {
    const anchor = document.createElement("a");
    anchor.href = ourBrochure;
    anchor.target = "_blank";
    anchor.download = "OurBrochure.pdf";
    anchor.click();
  };

  const handleDownloadFile2 = () => {
    const anchor = document.createElement("a");
    anchor.href = companyDetails;
    anchor.target = "_blank";
    anchor.download = "CompanyDetails.pdf";
    anchor.click();
  };

  return (
    <div>
      <div className="p-5 bg-base-200 rounded-lg">
        <h1 className="text-2xl font-bold my-3">Services</h1>
        {services.map((service) => (
          <ActiveLink to={`/services/${service._id}`} key={service._id}>
            <div>{service.title}</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </ActiveLink>
        ))}
      </div>
      <div className="p-8 bg-neutral my-8 rounded-lg text-white">
        <h1 className="text-2xl font-bold mb-3">Downloads</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaFileAlt size={"1.8em"} />
            <div className="px-3">
              <h1 className="text-lg font-semibold">Our Brochure</h1>
              <p>Download</p>
            </div>
          </div>
          <FaDownload
            className="hover:text-lime-500 cursor-pointer"
            size={"1.5em"}
            onClick={handleDownloadFile1}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaFileAlt size={"1.8em"} />
            <div className="px-3">
              <h1 className="text-lg font-semibold">Company Details</h1>
              <p>Download</p>
            </div>
          </div>
          <FaDownload
            className="hover:text-lime-500 cursor-pointer"
            size={"1.5em"}
            onClick={handleDownloadFile2}
          />
        </div>
      </div>
      <div className="p-8 bg-neutral my-8 rounded-lg text-white">
        <img src={logo} alt="" />
        <p className="font-semibold w-8/12 mx-auto text-center">
          Need Help? We Are Here To Help You
        </p>
        <div className="bg-white p-6 rounded-lg my-5 text-center relative">
          <p className="text-black text-lg font-bold">
            <span className="text-lime-700 pr-2">Car Care</span>
            Special
          </p>
          <p className="text-slate-500 text-sm font-semibold mb-3">
            Save up to
            <span className="text-lime-700 pl-1">60% off</span>
          </p>
          <div className="px-8 py-3 font-semibold rounded-md bg-lime-700 text-white absolute -bottom-6 right-16">
            Get A Quote
          </div>
        </div>
      </div>
      <h1 className=" text-4xl font-bold">Price: ${serviceDetails?.price}</h1>
      <Link to={`/serviceBooking/${serviceDetails?._id}`}>
        <button className=" animate-pulse btn btn-block my-5 bg-lime-700 text-white">
          Proceed Booking
        </button>
      </Link>
    </div>
  );
};

export default RightNav;
