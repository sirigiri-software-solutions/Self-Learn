// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ref, get, set, push } from "firebase/database";
// import { database } from "../Firebase";
// import './Registration.css';
// import TempLogo from '../Images/TempLogo.png'; // Adjust the image path accordingly

// const Registration = () => {
//   const [formType, setFormType] = useState("login"); // Track whether the form is login or signup
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [signupData, setSignupData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     if (isLoggedIn === "true") {
//       navigate("/Dashboardpage");
//     }
//   }, [navigate]);

//   const handleLogin = async () => {
//     const { email, password } = loginData;
//     let formErrors = {};
//     if (!email) formErrors.email = "Email is required";
//     if (!password) formErrors.password = "Password is required";
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     const userRef = ref(database, "signupdata");
//     try {
//       const snapshot = await get(userRef);
//       const userData = snapshot.val();
//       const user = Object.values(userData || {}).find(
//         (user) => user.signupData && user.signupData.email === email
//       );
//       if (user) {
//         const singleUserData = user.signupData;
//         if (singleUserData.password === password) {
//           localStorage.setItem("email", singleUserData.email);
//           localStorage.setItem("firstName", singleUserData.firstName);
//           localStorage.setItem("isLoggedIn", "true");
//           navigate("/Dashboardpage");
//         } else {
//           setErrors({ password: "Incorrect password" });
//         }
//       } else {
//         setErrors({ email: "User does not exist" });
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setErrors({ general: "Error fetching user data" });
//     }
//   };

//   const handleSignup = async () => {
//     const { firstName, lastName, email, password, confirmpassword } = signupData;
//     let formErrors = {};
//     if (!firstName) formErrors.firstName = "First Name is required";
//     if (!lastName) formErrors.lastName = "Last Name is required";
//     if (!email) formErrors.email = "Email is required";
//     if (!password) formErrors.password = "Password is required";
//     if (!confirmpassword) formErrors.confirmpassword = "Confirm Password is required";
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email && !emailRegex.test(email)) formErrors.email = "Invalid email format";
//     if (password && password.length < 6) formErrors.password = "Password must be at least 6 characters";
//     if (password !== confirmpassword) formErrors.confirmpassword = "Passwords do not match";
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     const userRef = ref(database, "signupdata");
//     try {
//       const snapshot = await get(userRef);
//       const userData = snapshot.val();
//       const userExists = Object.values(userData || {}).some(
//         (user) => user.signupData && user.signupData.email === email
//       );
//       if (userExists) {
//         setErrors({ email: "User already exists" });
//       } else {
//         const newUserRef = push(userRef);
//         await set(newUserRef, {
//           signupData: {
//             firstName,
//             lastName,
//             email,
//             password,
//           }
//         });
//         localStorage.setItem("firstName", firstName);
//         setSignupData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//           confirmpassword: "",
//         });
//         setErrors({});
//         navigate("/Dashboardpage");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setErrors({ general: "An error occurred. Please try again." });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (formType === "login") {
//       setLoginData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     } else {
//       setSignupData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   return (
//     <div className="all-container">
//       {/* Logo Section */}
//       <div className="container">
//         <div className="logo-container">
//           <img src={TempLogo} alt="School Logo" />
//         </div>

//         {/* Form Section */}
//         <div className="form-container">
//           {/* Button to switch between login and register */}
//           <div className="button-container">
//             <button 
//               className={formType === "login" ? "active" : ""} 
//               onClick={() => setFormType("login")}>
//               Login
//             </button>
//             <button 
//               className={formType === "signup" ? "active" : ""} 
//               onClick={() => setFormType("signup")}>
//               Register
//             </button>
//           </div>

//           <div className="input-container">
//             {/* Conditionally render Welcome and ParaTag based on formType */}
//             <h1 className="welcometag">
//               {formType === "login" ? "Welcome Back" : "Welcome"}
//             </h1>
//             <p className="paratag">
//               {formType === "login" 
//                 ? "Please log in to your Account" 
//                 : "Please register to your Account"}
//             </p>

//             {/* Render different input fields based on formType */}
//             {formType === "signup" && (
//               <>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   name="firstName"
//                   value={signupData.firstName}
//                   onChange={handleChange}
//                 />
//                 {errors.firstName && <div className="error-text">{errors.firstName}</div>}
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   name="lastName"
//                   value={signupData.lastName}
//                   onChange={handleChange}
//                 />
//                 {errors.lastName && <div className="error-text">{errors.lastName}</div>}
//               </>
//             )}

//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={formType === "login" ? loginData.email : signupData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <div className="error-text">{errors.email}</div>}

//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               name="password"
//               value={formType === "login" ? loginData.password : signupData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <div className="error-text">{errors.password}</div>}

//             {formType === "signup" && (
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 name="confirmpassword"
//                 value={signupData.confirmpassword}
//                 onChange={handleChange}
//               />
//             )}
//             {/* {errors.confirmpassword && <div className="error-text">{errors.confirmpassword}</div>} */}
//             {errors.general && <div className="error-text">{errors.general}</div>}

//             {/* Conditional rendering for buttons */}
//             <div className="form-buttons">
//               {formType === "login" ? (
//                 <div className="ending-ok">
//                 <span className="forgot-password"><a href="/forgot-password">Forgot Password?</a></span>
//                   <button className="login-btn" onClick={handleLogin}>Ok</button>

//                 </div>
//               ) : (
//                 <button className="next-btn-register" onClick={handleSignup}>Next</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get, set, push } from "firebase/database";
import { database } from "../Firebase";
import './Registration.css';
import TempLogo from '../Images/TempLogo.png';

const Registration = () => {
  const [formType, setFormType] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/Dashboardpage");
    }
  }, [navigate]);

  const handleLogin = async () => {
    const { email, password } = loginData;
    let formErrors = {};
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
          localStorage.setItem("email", singleUserData.email);
          localStorage.setItem("firstName", singleUserData.firstName);
          localStorage.setItem("isLoggedIn", "true");
          navigate("/Dashboardpage");
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

  const handleSignup = async () => {
    const { firstName, lastName, email, password, confirmpassword } = signupData;
    let formErrors = {};
    if (!firstName) formErrors.firstName = "First Name is required";
    if (!lastName) formErrors.lastName = "Last Name is required";
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";
    if (!confirmpassword) formErrors.confirmpassword = "Confirm Password is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) formErrors.email = "Invalid email format";
    if (password && password.length < 6) formErrors.password = "Password must be at least 6 characters";
    if (password !== confirmpassword) formErrors.confirmpassword = "Passwords do not match";
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    const userRef = ref(database, "signupdata");
    try {
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      const userExists = Object.values(userData || {}).some(
        (user) => user.signupData && user.signupData.email === email
      );
      if (userExists) {
        setErrors({ email: "User already exists" });
      } else {
        const newUserRef = push(userRef);
        await set(newUserRef, {
          signupData: {
            firstName,
            lastName,
            email,
            password,
          }
        });
        localStorage.setItem("firstName", firstName);
        setSignupData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        setErrors({});
        navigate("/Dashboardpage");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "An error occurred. Please try again." });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (formType === "login") {
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setSignupData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="all-container">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={TempLogo} alt="School Logo" />
        </div>
  
        <div className="form-container">
          {/* Toggle buttons for Login and Register */}
          <div className="button-container">
            <button
              className={formType === "login" ? "active" : ""}
              onClick={() => setFormType("login")}>
              Login
            </button>
            <button
              className={formType === "signup" ? "active" : ""}
              onClick={() => setFormType("signup")}>
              Register
            </button>
          </div>
  
          <div className="input-container">
            <h1 className="welcometag">
              {formType === "login" ? "Welcome Back" : "Welcome"}
            </h1>
            <p className="paratag">
              {formType === "login"
                ? "Please log in to your Account"
                : "Please register to your Account"}
            </p>
  
            {/* Signup fields for first and last name */}
            {formType === "signup" && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <div className="error-text">{errors.firstName}</div>}
  
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <div className="error-text">{errors.lastName}</div>}
              </>
            )}
  
            {/* Email input for both login and signup */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formType === "login" ? loginData.email : signupData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
  
            {/* Password input with eye icon */}
            <div className="input-container-icon">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formType === "login" ? loginData.password : signupData.password}
                  onChange={handleChange}
                />
                <div className="icon-style">
                  <i
                    className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                    onClick={toggleShowPassword}
                  ></i>
                </div>
              </div>
            </div>
            {errors.password && <div className="error-text">{errors.password}</div>}
  
            {/* Confirm password input for signup */}
            {formType === "signup" && (
              <>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  value={signupData.confirmpassword}
                  onChange={handleChange}
                />
                {errors.confirmpassword && <div className="error-text">{errors.confirmpassword}</div>}
              </>
            )}
  
            {/* General error message for any other error */}
            {errors.general && <div className="error-text">{errors.general}</div>}
  
            <div className="form-buttons">
              {formType === "login" ? (
                <div className="ending-ok">
                  <span className="forgot-password"><a href="/forgot-password">Forgot Password?</a></span>
                  <button className="login-btn" onClick={handleLogin}>Ok</button>
                </div>
              ) : (
                <button className="next-btn-register" onClick={handleSignup}>Next</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;  