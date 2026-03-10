import "../css/landingpage.css";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center" /* horizontal */,
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="landing-page-container">
        <h3>Welcome to PopX</h3>
        <p>
          Welcome to PopX! Create your profile to connect, share, and express
          yourself.
        </p>
        <div className="signup-login-btn">
          <button className="signup" onClick={handleSignUp}>
            Create Account
          </button>
          <button className="login" onClick={handleLogin}>
            {" "}
            Already Registered? Login
          </button>
        </div>
      </div>{" "}
    </div>
  );
};
export default LandingPage;
