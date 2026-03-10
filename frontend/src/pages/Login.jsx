import { useState } from "react";
import { login } from "../api/auth";
import "../css/login.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successopen, setSuccessOpen] = useState(false);
  const [failopen, setFailOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessOpen(false);
    setFailOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);

    if (res.token) {
      localStorage.setItem("token", res.token);
      setSuccessOpen(true);
      setTimeout(() => {
        navigate("/me");
      }, 2000);
    } else {
      setFailOpen(true);
    }
  };

  return (
    <>
      {" "}
      <div className="login-page-container">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#6C25FF",
          }}
          className="homepage-btn"
          onClick={() => navigate("/")}
        >
          <KeyboardBackspaceIcon />
          <span>Go Back to Home Page</span>
        </a>

        <h3>Sign in to your PopX account</h3>

        <p>Access your PopX profile</p>
        <Box
          component="form"
          sx={{
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="login-form"
        >
          <TextField
            type="email"
            label="Email"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                "&.Mui-focused": { color: "#6C25FF" },

                px: 0.5,
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6C25FF", // default border
                },
              },
            }}
          />

          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                "&.Mui-focused": { color: "#6C25FF" },

                px: 0.5,
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6C25FF", // default border
                },
              },
            }}
          />

          <Button
            type="submit"
            sx={{
              backgroundColor: "#cbcbcb",
              color: "white",
              padding: "10px",
              textTransform: "none",
              fontWeight: "600",
            }}
            fullWidth
            variant="contained"
          >
            Log in
          </Button>
        </Box>
      </div>
      <Snackbar
        open={successopen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor: "#6C25FF",
            border: "1px solid",
          }}
        >
          Login Successful
        </Alert>
      </Snackbar>
      <Snackbar
        open={failopen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{
            width: "100%",

            fontWeight: "600",
          }}
        >
          Login Credentials Invalid
        </Alert>
      </Snackbar>
    </>
  );
}
