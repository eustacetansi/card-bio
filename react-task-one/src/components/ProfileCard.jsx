import React from "react";

const ProfileCard = (props) => {
    return (
        <div className="profileCard">
            <img 
                className="profile-image"
                src={props.image} 
                alt="" 
            />
            <h2 className="profile-name">{props.name}</h2>
            <p className="profile-bio">{props.bio}</p>
        </div>
    )
}

export default ProfileCard;