const BookingsTableRow = ({
  booking,
  handleDeleteBooking,
  handleUpdateBooking,
}) => {
  const {
    _id,
    img,
    service,
    customerName,
    customerEmail,
    price,
    date,
    status,
  } = booking;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squire rounded-md w-24 h24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>
        {customerName}
        <br />
        <span className="badge badge-ghost badge-sm">{customerEmail}</span>
      </td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        {status ? (
          <button className="btn btn-success btn-xs">Confirmed</button>
        ) : (
          <button
            onClick={() => handleUpdateBooking(_id)}
            className="btn btn-error btn-xs"
          >
            Please confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsTableRow;
