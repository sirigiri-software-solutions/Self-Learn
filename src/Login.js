import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ref, get } from "firebase/database";
import { database } from "./Firebase"; // Import your Firebase configuration
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Redirect to Dashboard if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/Dashboardpage");
    }
  }, [navigate]);

  const handleLogin = async () => {
    const { email, password } = loginData;
    let formErrors = {};

    // Validation
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const userRef = ref(database, "signupdata");

    try {
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      const user = Object.values(userData || {}).find(
        (user) => user.signupData && user.signupData.email === email
      );

      if (user) {
        const singleUserData = user.signupData;

        if (singleUserData.password === password) {
          // Successful login
          localStorage.setItem("email", singleUserData.email);
          localStorage.setItem("firstName", singleUserData.firstName);
          localStorage.setItem("isLoggedIn", "true"); // Set login status to true
          navigate("/Dashboardpage"); // Redirect after successful login
        } else {
          setErrors({ password: "Incorrect password" });
        }
      } else {
        setErrors({ email: "User does not exist" });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setErrors({ general: "Error fetching user data" });
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className="background">
      <div className="login-container">
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          {errors.email && <div className="error-text">{errors.email}</div>}

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input"
            name="password"
            autoComplete="current-password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          {errors.password && <div className="error-text">{errors.password}</div>}

          <div className="show-password-container">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label>Show Password</label>
          </div>

          {errors.general && <div className="error-text">{errors.general}</div>}

          <button className="button" onClick={handleLogin}>
            Login
          </button>

          {/* Signup link */}
          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign up now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;