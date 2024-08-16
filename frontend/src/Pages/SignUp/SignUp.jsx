import React, { useState } from "react";
import './SingUp.css';
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    
    const handleSubmit = async () => {
        try {
            console.log('aaaa');
            const res = await fetch('http://localhost:5000/api/yum/users/register' , {
                method : 'POST',
                headers : {'Content-Type':'application/json'},
                body : JSON.stringify({
                    username,
                    email,
                    password,
                    confirmPassword,
                    phoneNumber,
                    address
                })
                
            })
            
            const data = await res.json();
            console.log(data);
            if(!res.ok){
                alert(data.msg)
            }else{
                alert(data.msg)
                navigate('/verify');
            }
                
            

        } catch (error) {;
            alert(error.message);
        }
    };

    return (
        <div className="formaya bg-[#15192A] h-[100vh]">
            <div className="containerform w-[95%] lg:w-3/5 md:w-[70%] sm:w-[80%] h-[95%] lg:h-[90%] md:h-[95%] sm:h-[97%] flex flex-col md:flex-row justify-center items-center">
                <div className="overlay">
                    <h1 className="title-register">Register</h1>
                    <div   className="w-[90%] lg:w-[70%] md:w-[72%] sm:w-[75%]">
                        <div className="flex flex-col lg:flex-row justify-between w-[100%]">
                            <div className="w-[100%] md:w-[100%] sm:w-[100%] p-2">
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required className="w-[100%]" />
                            </div>
                            <div className="w-[100%] md:w-[100%] sm:w-[100%] p-2">
                                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="+963" required className="w-[100%]" />
                            </div>
                        </div>
                        <div className="p-2">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-[100%]" />
                        </div>
                        <div className="p-2">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-[100%]" />
                        </div>
                        <div className="p-2">
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="ConfirmPassword" required className="w-[100%]" />
                        </div>
                        <div className="p-2">
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required className="w-[100%]" />
                        </div>
                        <button onClick= {handleSubmit} className="btn">SignUp</button>
                    </div>
                    <Link to='/login'>
                        <p className="pt-5 text-[#FFAB2D] hover:text-[#F1543F] cursor-pointer text-[12px] lg:text-[15px] md:text-[14px] sm:text-[13px]">I already have an account →</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
