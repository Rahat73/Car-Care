import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsTableRow from "./BookingsTableRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const url = `https://car-care-server-rahat73.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "car-care-access-token"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-care-server-rahat73.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((result) => result.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
              });
            }
          });
      }
    });
  };

  const handleUpdateBooking = (id) => {
    Swal.fire({
      title: "Are you sure to confirm?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-care-server-rahat73.vercel.app/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirmed" }),
        })
          .then((result) => result.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Confirmed!",
                "Your booking has been confirmed.",
                "success"
              );
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "confirmed";
              const newbookings = [updated, ...remaining];
              setBookings(newbookings);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto py-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Service</th>
            <th>Customer Details</th>
            <th>Price</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingsTableRow
              key={booking._id}
              booking={booking}
              handleDeleteBooking={handleDeleteBooking}
              handleUpdateBooking={handleUpdateBooking}
            ></BookingsTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
