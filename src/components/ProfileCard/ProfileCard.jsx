import "./styles.css";
import { userData } from "./data";

function ProfileCard() {
    return (
<div className="profile-card">
    <img src="./user.PNG"  alt="user-avatar" className="user-img"/>
    <h3>Name: {userData.name}</h3>
    <p>Occupation: {userData.occupation}</p>
    <p>Hobbies: {userData.hobbies}</p>
</div>
    );
};

export default ProfileCard;