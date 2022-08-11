import { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(false);

	const changeTheme = () => {
		setDarkTheme((prevTheme) => !prevTheme);
	};

	return (
		<ThemeContext.Provider value={{ darkTheme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
