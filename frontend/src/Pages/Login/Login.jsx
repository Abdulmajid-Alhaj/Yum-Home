import React from "react";
import { useState } from "react";
import './Login.css';
import { Link , useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            console.log('aaaa');
            const res = await fetch('http://localhost:5000/api/yum/users/login' , {
                method : 'POST',
                credentials : 'include',
                headers : {'Content-Type':'application/json'},
                body : JSON.stringify({
                    email,
                    password,
                })
                
            })
            
            const data = await res.json();

            if(!res.ok){
                alert(data.msg)
            }else{
                alert(data.msg)
                navigate('/');
            }
                
            

        } catch (error) {;
            alert(error.message);
        }
    };

    return (
        <div className=" formaya bg-[#15192a] h-[100vh]">
            <div className="containerform w-[95%] lg:w-3/5 md:w-[70%] sm:w-[80%] h-[95%] lg:h-[90%] md:h-[95%] sm:h-[97%] flex flex-col justify-center items-center">
            <div className="overlay">
            <h1 className="title-register">Login</h1>
                <form onSubmit={handleSubmit} className="w-[90%] lg:w-[70%] md:w-[72%] sm:w-[75%]">
                    <div className="p-2">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-[100%]" />
                    </div>
                    <div className="p-2">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-[100%]" />

                    </div>
                <button type="submit" className="btn"> Login </button>
                </form>
                <Link to='/signup'><p className="pt-5 text-[#FFAB2D] hover:text-[#F1543F] cursor-pointer text-[12px] lg:text-[15px] md:text-[14px] sm:text-[13px] "> I don’t have an account → </p></Link>
            </div>
        </div>
        </div>
    )
}
export default Login