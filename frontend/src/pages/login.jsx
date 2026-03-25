import { useState } from "react";
import API from "../services/api";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={(e)=>setData({...data,password:e.target.value})}/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}