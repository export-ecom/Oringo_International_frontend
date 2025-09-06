import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../store/slices/userSlice';

export default function ChangePasswordForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.newPassword !== form.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        dispatch(changePassword(form.newPassword));
        alert('Password updated successfully!');
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded mt-4">
            <div className="mb-3">
                <label>Current Password</label>
                <input type="password" name="oldPassword" onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label>New Password</label>
                <input type="password" name="newPassword" onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label>Confirm New Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-warning">Change Password</button>
        </form>
    );
}
