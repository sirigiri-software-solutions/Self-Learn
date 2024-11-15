
// import React, { useEffect, useState } from 'react';
// import { FaHome, FaFileAlt, FaTasks, FaBookOpen, FaUser, FaCog, FaBell, FaArrowRight, FaSignOutAlt } from 'react-icons/fa';

// import './Homepage.css';
// import { getDatabase, ref, get } from 'firebase/database'; // Correct Firebase imports
// import { database } from '../Firebase';
// import TempLogo from '../Images/TempLogo.png';
// import Subjectdropdowns from './Subjectdropdowns';



// const Homepage = () => {
//     const [showDropdown, setShowDropdown] = useState(false);
//     // Define the sidebar items in an array
//     const sidebarItems = [

//         { id: 1, icon: <FaFileAlt />, label: 'Test Score' },
//         { id: 2, icon: <FaTasks />, label: 'To-Do List' },
//         { id: 3, icon: <FaFileAlt />, label: 'Essay Upload' },
//         { id: 4, icon: <FaUser />, label: 'Profile' },
//         { id: 5, icon: <FaCog />, label: 'Settings' },
//     ];
//     const [firstName, setFirstName] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             const email = localStorage.getItem("email");
//             if (email) {
//                 const userRef = ref(database, "signupdata");
//                 const snapshot = await get(userRef);
//                 const userData = snapshot.val();

//                 if (userData) {
//                     const user = Object.values(userData).find(
//                         (user) => user.signupData && user.signupData.email === email
//                     );
//                     if (user) {
//                         setFirstName(user.signupData.firstName); // Set the first name in state
//                     }
//                 }
//             }
//         };

//         fetchData();
//     }, []);
//     const handleDropdownToggle = () => {
//         setShowDropdown(prevState => !prevState);
//     };

//     return (
//         <div className="container">
//             <div className="left-sidebar">
//                 <div className='icon-home'><FaHome /> Home</div>
//                 <ul>
//                     {sidebarItems.map(item => (
//                         <li key={item.id} className="">
//                             {item.icon} {item.label}
//                         </li>
//                     ))}
//                 </ul>
//                 <div className='line-line'><hr></hr></div>
//                 <div className='icon-button'> <button className="logout-button">
//                     <FaSignOutAlt /> Logout
//                 </button></div>
//             </div>

//             <div className="right-content">
//                 <div className="welcome-section">
//                     <img src={TempLogo} alt="Profile" className="profile-photo" />
//                     <h2>Welcome, {firstName}!</h2>
//                     <FaBell className="bell-icon" /> {/* Add the bell icon directly here */}
//                 </div>
//                 <div>
//                     <button className="question-button" onClick={handleDropdownToggle}>
//                         Questions and Answers <FaArrowRight className="arrow-icon" />
//                     </button>

//                     {/* Conditionally render the Subjectdropdowns component when the button is clicked */}
//                     {showDropdown && <Subjectdropdowns />}
//                 </div>
//                 <div className="learning-class">
//                     <h>Learning in Progress: Every Step Counts!</h>
//                     <h2 className="see-more">See more <FaArrowRight className="arrow-icon" /></h2>
//                 </div>
//                 <div className="box-container">
//                     <div className="box">
//                         <p>Resume Reading</p>
//                         <h3>Mathematics - Algebra - Chapter 01</h3>

//                     </div>
//                     <div className="box">
//                         <p>Resume Reading</p>
//                         <h3>Biology - Animal Kingdom - Chapter 08</h3>

//                     </div>

                   


//                 </div>
//                 <div className="learning-class">
//                         <h>Not Quite There Yet! Ready for a Retest?</h>
//                         <h2 className="see-more">See more <FaArrowRight className="arrow-icon" /></h2>
//                     </div>
//                 <div class="content-box">

//                     <div class="text-content">
//                         <div>
//                             <h3>Lorem ipsum dolor sit?</h3>
//                             <p>Lorem ipsum dolor sit amet, consectetur adi</p></div>

//                         <div>
//                             <button class="action-button">Take Retest</button></div></div>

//                     <div class="text-content"><div>
//                         <h3>Lorem ipsum dolor sit?</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adi</p></div>
//                         <div>
//                             <button class="action-button">Take Retest</button></div></div>
//                 </div>






//             </div>
//         </div>
//     );
// };

// export default Homepage;



import React, { useEffect, useState } from 'react';
import { FaBell, FaArrowRight } from 'react-icons/fa';
import './Homepage.css';
import { getDatabase, ref, get } from 'firebase/database'; // Firebase imports
import { database } from '../Firebase';
import TempLogo from '../Images/TempLogo.png';
import Subjectdropdowns from './Subjectdropdowns';
import { useNavigate, useNavigation } from 'react-router-dom';

const Homepage = () => {
   
    const [showDropdown, setShowDropdown] = useState(false);
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem("email");
            if (email) {
                const userRef = ref(database, "signupdata");
                const snapshot = await get(userRef);
                const userData = snapshot.val();

                if (userData) {
                    const user = Object.values(userData).find(
                        (user) => user.signupData && user.signupData.email === email
                    );
                    if (user) {
                        setFirstName(user.signupData.firstName); // Set the first name in state
                    }
                }
            }
        };

        fetchData();
    }, []);

    const handleDropdownToggle = () => {
        navigate("./quizpage")
    };

    return (
        <div className="right-content">
            <div className="welcome-section">
                <img src={TempLogo} alt="Profile" className="profile-photo" />
                <h2>Welcome, {firstName}!</h2>
                <FaBell className="bell-icon" />
            </div>
            <div>
                <button className="question-button" onClick={handleDropdownToggle}>
                    Questions and Answers <FaArrowRight className="arrow-icon" />
                </button>
                {showDropdown && <Subjectdropdowns />}
            </div>
            <div className="learning-class">
                <h>Learning in Progress: Every Step Counts!</h>
                <h2 className="see-more">
                    See more <FaArrowRight className="arrow-icon" />
                </h2>
            </div>
            <div className="box-container">
                <div className="box">
                    <p>Resume Reading</p>
                    <h3>Mathematics - Algebra - Chapter 01</h3>
                </div>
                <div className="box">
                    <p>Resume Reading</p>
                    <h3>Biology - Animal Kingdom - Chapter 08</h3>
                </div>
            </div>
            <div className="learning-class">
                <h>Not Quite There Yet! Ready for a Retest?</h>
                <h2 className="see-more">
                    See more <FaArrowRight className="arrow-icon" />
                </h2>
            </div>
            <div className="content-box">
                <div className="text-content">
                    <div>
                        <h3>Lorem ipsum dolor sit?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                    </div>
                    <div>
                        <button className="action-button">Take Retest</button>
                    </div>
                </div>
                <div className="text-content">
                    <div>
                        <h3>Lorem ipsum dolor sit?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                    </div>
                    <div>
                        <button className="action-button">Take Retest</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
