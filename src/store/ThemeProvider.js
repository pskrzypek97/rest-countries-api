import { createContext, useState, useMemo, useCallback } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	const changeTheme = useCallback(() => {
		setDarkTheme((prevTheme) => !prevTheme);
	}, [setDarkTheme]);

	const memoizedValues = useMemo(
		() => ({ darkTheme, changeTheme }),
		[darkTheme, changeTheme]
	);

	return (
		<ThemeContext.Provider value={memoizedValues}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
