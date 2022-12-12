import { useContext } from 'react';

import ThemeContext from '../store/ThemeProvider';

import LinkBack from './LinkBack';

const Error = () => {
	const { darkTheme } = useContext(ThemeContext);

	return (
		<main className="main main--error">
			<LinkBack />
			<div className={`error ${darkTheme && 'dark-mode'}`}>
				<svg>
					<use href="/sprite.svg#warning"></use>
				</svg>
				<h1>Page not found!</h1>
			</div>
		</main>
	);
};

export default Error;
