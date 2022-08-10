import { useContext } from 'react';

import ThemeContext from '../../store/ThemeProvider';

const ThemeChange = () => {
	const { changeTheme, darkTheme } = useContext(ThemeContext);

	return (
		<button className="theme-change" onClick={changeTheme}>
			<svg className="theme-change__icon">
				<use href={`sprite.svg#moon${!darkTheme ? '-o' : ''}`} />
			</svg>
			Dark Mode
		</button>
	);
};

export default ThemeChange;
