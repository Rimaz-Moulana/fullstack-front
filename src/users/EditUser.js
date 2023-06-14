import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EditUser(){
    let navigate=useNavigate()

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email} = user;

   const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
   }

   const onSubmit=async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");

   }
    return(
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3 rounded shadow border p-4 mt-2">
                <h2 className="text-center md-4">Edit User</h2>
                <form>
                <div className="mb-3">
               
                <label htmlFor="Name" className="form-label">Name</label>
                    <input
                        className={"form-control"}
                        placeholder={"Enter your name"}
                        type={"text"}
                        name={"name"}
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        
                    />
                    <label htmlFor="Name" className="form-label mt-3">User Name</label>
                    <input
                        className={"form-control"}
                        placeholder={"Enter your user name"}
                        type={"text"}
                        name={"username"}
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                        
                    />
                    <label htmlFor="Name" className="form-label mt-3">Email</label>
                    <input
                        className={"form-control"}
                        placeholder={"Enter your email"}
                        type={"text"}
                        name={"email"}
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to={"/"}>Cancel</Link>
                </form>
                </div>
                
            </div>
        </div>
    )
}