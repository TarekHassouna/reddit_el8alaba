import { useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profilePic.png"

function ProfileMenu(){
    const username= "KareemAdel4805"
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <button 
            onClick={()=> setIsOpen((prev) => !prev)}
            style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            }}>
                <img src={profilePic} 
                alt= "ProfilePic" 
                style={{
                width:'32px',
                height: '32px',
                borderRadius:'16px',
                transform: 'scaleX(-1)'
                }}></img>
            </button>
            
            {isOpen && (
                <div
                    style={{
                    position: 'absolute',
                    right: 0,
                    top: '48px',
                    width: '250px',
                    backgroundColor: '#212121',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    padding: '6px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    }}
                >

                <Link to="/usr">
                    <div style={{...menuItemStyle, display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <img src={profilePic}
                        alt= "ProfilePic" 
                        style={{
                        width:'32px',
                        height: '32px',
                        borderRadius:'16px'
                        }}></img>
                        <div>
                        View Profile
                        u/{username}
                        </div>
                    </div>
                </Link>

                <Link to="/">
                    <div style={menuItemStyle}>Settings</div>
                </Link>

                <Link to="/">
                    <div style={menuItemStyle}>Display Mode</div>
                </Link>

                <Link to="/">
                    <div style={menuItemStyle}>Log Out</div>
                </Link>

                </div>
            )}
        </div>
    );
}

const menuItemStyle = {
  padding: '8px 16px',
  textDecoration: 'none',
  color: '#e1e1e1cf',
  fontSize: '14px',
};

export default ProfileMenu