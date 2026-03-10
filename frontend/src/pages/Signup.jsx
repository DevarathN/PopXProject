import { useState } from "react";
import { signup } from "../api/auth";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [registrationsuccessful, setRegistrationsuccessful] = useState(false);
  const [registrationunsuccessful, setRegistrationunsuccessful] =
    useState(false);
  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setRegistrationsuccessful(false);
    setRegistrationunsuccessful(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(name, phoneNumber, email, password, companyName);
      setRegistrationsuccessful(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setRegistrationunsuccessful(true);
    }
  };
  const handlePhoneNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 10);
    setPhoneNumber(value);
  };
  return (
    <>
      <div className="signup-container">
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
        <h3>Create your PopX account</h3>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className="signup-form"
        >
          <TextField
            type="text"
            placeholder="Enter name"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                "&.Mui-focused": { color: "#6C25FF" },

                px: 0.5,
              },
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6C25FF", // default border
                },
                borderRadius: "10px",
              },
            }}
          />
          <TextField
            type="text"
            slotProps={{
              htmlInput: {
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 10,
              },
            }}
            placeholder="Enter phone number"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e)}
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
          <TextField
            type="text"
            label="Company Name"
            value={companyName}
            placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)}
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

          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{
                color: "black",
                fontWeight: "600",
                "&.Mui-focused": {
                  color: "#6C25FF",
                },
              }}
            >
              Are you an Agency?*
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: "#6C25FF", // unchecked color
                      "&.Mui-checked": {
                        color: "#6C25FF", // checked color
                      },
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "#6C25FF", // unchecked color
                      "&.Mui-checked": {
                        color: "#6C25FF", // checked color
                      },
                    }}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            sx={{
              backgroundColor: "#6C25FF",
              color: "white",
              padding: "10px",
              textTransform: "none",
              fontWeight: "600",
            }}
            onClick={signup}
            className="create-account-btn"
          >
            Create Account
          </Button>
        </Box>
      </div>
      <Snackbar
        open={registrationsuccessful}
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
          Registration successful
        </Alert>
      </Snackbar>
      <Snackbar
        open={registrationunsuccessful}
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
          Registration failed. Please try again with different details.
        </Alert>
      </Snackbar>
    </>
  );
}
