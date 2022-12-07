import { useContext } from 'react';

import ThemeContext from '../store/ThemeProvider';

const Loading = () => {
	const { darkTheme } = useContext(ThemeContext);

	return (
		<div className={`loading ${darkTheme && 'dark-mode'}`}>
			<div class="spinner">Loading...</div>
		</div>
	);
};

export default Loading;
