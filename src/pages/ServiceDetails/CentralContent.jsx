const CentralContent = ({ serviceDetails }) => {
  const { img, title, description, facility } = serviceDetails;
  //   console.log(img, title, description, facility);
  return (
    <div className="w-full col-span-2">
      <img className="w-full h-72 object-cover rounded-lg" src={img} alt="" />
      <h1 className="text-4xl font-semibold pt-8 pb-3">{title}</h1>
      <p>{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
        {facility.map((f, index) => (
          <div
            key={index}
            className="bg-base-300 p-5 rounded-md border-t-4 border-lime-700"
          >
            <h1 className="text-lg font-semibold">{f.name}</h1>
            <p>{f.details}</p>
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-semibold mt-10 mb-3">
        3 Simple Steps to Process
      </h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which {"don't"} look even slightly believable. If you
        are going to use a passage of Lorem Ipsum, you need to be sure there
        {"isn't"} anything embarrassing hidden in the middle of text.
      </p>
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className=" border border-green-400 rounded-md p-8 text-center space-y-3">
          <button className=" btn btn-circle btn-lg bg-lime-700 border-8 text-slate-200">
            01
          </button>
          <h1 className="text-md font-semibold">STEP ONE</h1>
          <p>Login to the website</p>
        </div>
        <div className=" border border-green-400 rounded-md p-8 text-center space-y-3">
          <button className=" btn btn-circle btn-lg bg-lime-700 border-8 text-slate-200">
            02
          </button>
          <h1 className="text-md font-semibold">STEP TWO</h1>
          <p>Choose the required service</p>
        </div>
        <div className=" border border-green-400 rounded-md p-8 text-center space-y-3">
          <button className=" btn btn-circle btn-lg bg-lime-700 border-8 text-slate-200">
            03
          </button>
          <h1 className="text-md font-semibold">STEP THREE</h1>
          <p>Fill the form & Book the service</p>
        </div>
      </div>
    </div>
  );
};

export default CentralContent;
