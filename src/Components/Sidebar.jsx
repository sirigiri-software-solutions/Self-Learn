import React from 'react';
import { FaHome, FaFileAlt, FaTasks, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for routing
import './Homepage.css'; // Style this separately

const Sidebar = () => {
    const sidebarItems = [
        { id: 1, icon: <FaFileAlt />, label: 'Test Score', path: '/testscore' },
        { id: 2, icon: <FaTasks />, label: 'To-Do List', path: '/todo' },
        { id: 3, icon: <FaFileAlt />, label: 'Essay Upload', path: '/upload' },
        { id: 4, icon: <FaUser />, label: 'Profile', path: '/profile' },
        { id: 5, icon: <FaCog />, label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="left-sidebar">
            <div className='icon-home'><FaHome /> Home</div>
            <ul>
                {sidebarItems.map(item => (
                    <li key={item.id} className="">
                        {item.icon} {item.label}
                    </li>
                ))}
            </ul>
            <div className='line-line'><hr></hr></div>
            <div className='icon-button'> <button className="logout-button">
                <FaSignOutAlt /> Logout
            </button></div>
        </div>
    );
};

export default Sidebar;
