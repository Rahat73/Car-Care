import img from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-10/12 lg:justify-evenly">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold pb-10">Login now!</h1>
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn btn-accent" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
