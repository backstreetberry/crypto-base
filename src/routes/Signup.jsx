import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { signUp } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(email, password);
			navigate("/account");
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<div>
			<div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
				<h1 className="text-3xl font-bold">Sign Up</h1>
				{error ? <p className="text-red-300 my-2 py-2 mx-auto">{error}</p> : null}
				<form onSubmit={handleSubmit}>
					<div className="my-4">
						<label>Email</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								onChange={(e) => setEmail(e.target.value)}
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="email"
							/>
							<AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<div className="my-4">
						<label>Password</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								onChange={(e) => setPassword(e.target.value)}
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="password"
							/>
							<AiFillLock className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
						Sign Up
					</button>
				</form>
				<p className="my-3">
					Already have an account?{" "}
					<Link className="text-accent" to="/signin">
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;