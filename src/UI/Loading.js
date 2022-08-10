import { useContext } from 'react';

import ThemeContext from '../store/ThemeProvider';

const Loading = () => {
	const { darkTheme } = useContext(ThemeContext);

	return (
		<div className={`loading ${darkTheme && 'dark-mode'}`}>
			<svg>
				<use href="/sprite.svg#spinner"></use>
			</svg>
		</div>
	);
};

export default Loading;
