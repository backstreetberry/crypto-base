import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<div className="p-2">
			{theme === "dark" ? (
				<div className="flex items-center cursor-pointer" onClick={changeTheme}>
					<HiSun className="text-primary text-2xl mr-2" /> Light Mode
				</div>
			) : (
				<div className="flex items-center cursor-pointer" onClick={changeTheme}>
					<HiMoon className="text-primary text-2xl mr-2" /> Dark Mode
				</div>
			)}
		</div>
	);
};

export default ThemeToggle;
