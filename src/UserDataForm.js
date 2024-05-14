import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { users } from './data';

export default function UserDataForm() {
    const { userid } = useParams();
    const [user, setUser] = useState(getUserById(userid));

    // Function to get user by id
    function getUserById(id) {
        return users.find(user => user.id === parseInt(id));
    }

    // Function to handle form input change
    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Here you can perform any action like updating the user data
        console.log('Updated user data:', user);
    }

    return (
        <div>
            <h2>User Data Form</h2>
            {user ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname">First Name:</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={user.firstname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name:</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={user.lastname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="exp">Experience:</label>
                        <input
                            type="text"
                            id="exp"
                            name="exp"
                            value={user.exp}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            name="gender"
                            value={user.gender}
                            onChange={handleInputChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={user.age}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>User not found</div>
            )}
        </div>
    );
}
