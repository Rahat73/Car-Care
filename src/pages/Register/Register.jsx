import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      return toast.error("Password must be 6 characters");
    }

    if (password !== confirm) {
      return toast.error("Passwords don't match");
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/;

    if (!passwordPattern.test(password)) {
      return toast.error(
        "Password should contain atleast an uppercase letter, a lowercase letter & a digit"
      );
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        updateUser(name)
          .then(() => {
            toast.success(
              <p>
                <span className="font-bold pr-2">{name}</span> Welcome to Car
                Care
              </p>
            );
          })
          .catch((error) => toast.error(error.message));
        form.reset();
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-10/12 lg:justify-evenly">
        <div className="text-center lg:text-left">
          <img className="w-11/12" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-lime-700 text-center pt-4">
            Register
          </h1>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-accent"
                />
              </div>
            </form>
            <div className="text-center py-3">
              <span className="">Already have an account?</span>
              <Link
                to={"/login"}
                className=" link link-hover px-2 text-lime-700 font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
