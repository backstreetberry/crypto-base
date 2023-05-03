import React from "react";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Account = () => {
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	if (user) {
		return (
			<div className="max-w-[1200px] mx-auto">
				<div className="flex items-center justify-around my-12 py-4 rounded-div">
					<div>
						<h1 className="text-2xl ml-4 font-bold">Account</h1>
					</div>
					<div>
						<p>Welcome, {user?.email}</p>
					</div>
					{/* <div>
					<button
						onClick={handleSignOut}
						className="border mr-4 px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
					>
						Sign Out
					</button>
				</div> */}
				</div>
				<div className="flex justify-between items-center my-12 py-4 rounded-div">
					<div className="w-full ml-4 min-h-[300px]">
						<h1 className="text-2xl font-bold py-4">Watch List</h1>
						<SavedCoin />
					</div>
				</div>
			</div>
		);
	} else {
		return <Navigate to="/signin" />;
	}
};

export default Account;
