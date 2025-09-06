import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/authSlice";

const ProfileSettings = () => {
    const dispatch = useDispatch();

    const handleProfileUpdate = (data) => {
        // send to backend via API
        // update Redux store after success
        dispatch(setUser(data));
    };

    return (
        <div className="container mt-4">
            <h2>My Profile</h2>
            <ProfileForm onSubmit={handleProfileUpdate} />
        </div>
    );
};

export default ProfileSettings;
