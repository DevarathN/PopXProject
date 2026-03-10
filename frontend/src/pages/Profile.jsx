import { useEffect, useState } from "react";
import { getProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "../css/profile.css";
import avatar from "../assets/images/avatar.jpg";
export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (err) {
        console.error("Profile error:", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile">
      <a
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#6C25FF",
          backgroundColor: "white",
          borderRadius: "20px 20px 0px 0px",
          padding: "20px",
        }}
        className="homepage-btn"
        onClick={() => navigate("/")}
      >
        <WestIcon />
        <span>Home</span>
      </a>
      <h2>Account Settings</h2>
      <div className="profile-details">
        <div className="image-container">
          <img src={avatar} alt="Avatar" srcSet="" />
        </div>
        <div className="text-container">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>{" "}
      </div>{" "}
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}
