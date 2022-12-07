import { useContext } from 'react';

import ThemeChange from './ThemeChange';
import ThemeContext from '../../store/ThemeProvider';

const Header = () => {
	const { darkTheme } = useContext(ThemeContext);

	return (
		<header className={`header ${!darkTheme && 'light-mode--element'}`}>
			<h2 className="heading-2">Where in the world?</h2>
			<ThemeChange />
		</header>
	);
};

export default Header;
