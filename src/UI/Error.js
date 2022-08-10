import { useContext } from 'react';

import ThemeContext from '../store/ThemeProvider';

const Error = ({ error }) => {
	const { darkTheme } = useContext(ThemeContext);

	return (
		<div class={`error ${darkTheme && 'dark-mode'}`}>
			<svg>
				<use href="/sprite.svg#warning"></use>
			</svg>
			<p>{error}</p>
		</div>
	);
};

export default Error;
