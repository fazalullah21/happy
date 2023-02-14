
import { event } from "jquery";
import React ,{useState}from "react";
import './style.css';
const Register=()=>
{
	const[state,setstate]=useState({
		username:"",
		Email:"",
		password:"",
	})
	const handleChange=(event,id)=>{
		setstate({
			...state,
				[id]:event.target.value,
			})

		}
		const handleSubmit=()=>{
			const{username,Email,password}=state;
			console.log("username",username);
			console.log("email,Email");
			console.log("password",password);

		}
		const{username,Email,password}=state;
		return(
			<div className="Reg">
				<h2>Sign up</h2>
				<input type="text" value={username} onChange={(event)=>{handleChange(event,"username")}} placeholder="username"/><br></br><br></br>
				<input type="Email" value={Email} onChange={(event)=>{handleChange(event,"Email")}} placeholder="mail id"/><br></br><br></br>
				<input type="password" value={password} onChange={(event)=>{handleChange(event,"password")}} placeholder="password"/><br></br><br></br>
				<button onClick={()=>handleSubmit()}>submit</button>
			</div>
		);
	}
export default Register;
