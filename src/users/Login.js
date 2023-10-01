import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userLoginForm, setUserLoginForm] = useState({
        username: "",
        id: ""
    });
    const navigate = useNavigate();

    const onInputChange = (e) => {
        setUserLoginForm({ ...userLoginForm, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(
                "http://localhost:8081/login",
                userLoginForm
            );
    
            if (response.data === "Success") {
                navigate("/user");
            } else {
                console.log("Login failed");
            }
        } catch (error) {
            if (error.response) {
                // The server returned an error response
                console.error("Server error:", error.response.data);
                // You can set an error message state and display it to the user
            } else {
                // Network error or other issues
                console.error("Error during login:", error);
            }
        }
    };
    return (
        <div>
            <div>
                <h1 className="text-center">Login</h1><br />
                <form onSubmit={onSubmit}>
                  Username  <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={onInputChange}
                        // value={userLoginForm.username}
                    /><br /><br />
                    id<input
                        type="text"
                        name="id"
                        placeholder="Password"
                        onChange={onInputChange}
                        // value={userLoginForm.id}
                    /><br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
