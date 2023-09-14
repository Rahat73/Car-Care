import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredentials) => {
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.meassage));
  };
  return (
    <div>
      <div className="divider">OR</div>

      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-block"
      >
        <FaGoogle size={"1.5em"} /> Sign In with Google
      </button>
    </div>
  );
};

export default SocialSignIn;
