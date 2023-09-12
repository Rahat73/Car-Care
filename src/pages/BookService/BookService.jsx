import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;

    const booking = {
      customerName: name,
      customerEmail: email,
      date,
      service: title,
      service_id: _id,
      price,
      img,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Booked!", "Your booking has been confirmed!", "success");
        }
      });
  };
  return (
    <div className=" w-10/12 py-8 bg-base-200 mx-auto">
      <h1 className=" text-2xl text-center mt-8 mb-4">
        Booking Service: <span className=" font-semibold">{title}</span>
      </h1>
      <div className=" w-10/12 mx-auto bg-base-300 p-6 rounded-md">
        <form onSubmit={handleOrder}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="due-amount"
                defaultValue={"$" + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <input
            className="btn btn-accent my-5 w-2/4 block mx-auto"
            type="submit"
            value="Confirm Order"
          />
        </form>
      </div>
    </div>
  );
};

export default BookService;
