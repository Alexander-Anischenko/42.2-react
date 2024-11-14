import "./styles.css";
import { userData } from "./data";
import userAvatar from '../../asserts/user.PNG'

function ProfileCard() {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-card-title">Name: {userData.name}</div>
            {/* <img src={userAvatar} alt="" /> */}
            <img src={userData.avatar} alt="Avatar" className="user-img" />
            <div>Occupation: {userData.occupation}</div>
            <div>Hobbies: {userData.hobbies}</div>
        </div>
    );
}

export default ProfileCard;