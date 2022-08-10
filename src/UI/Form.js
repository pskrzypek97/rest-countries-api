import { useContext } from 'react';

import ThemeContext from '../store/ThemeProvider';
import CountryContext from '../store/CountryProvider';

const Form = () => {
	const { darkTheme } = useContext(ThemeContext);
	const { searchCountryHandler } = useContext(CountryContext);

	return (
		<form className={`text ${!darkTheme && 'light-mode--input'}`}>
			<input
				type="text"
				className="text__input"
				placeholder="Search for a country..."
				onChange={(e) => searchCountryHandler(e.target.value)}
			/>
			<svg className="text__icon">
				<use href="/sprite.svg#search"></use>
			</svg>
		</form>
	);
};

export default Form;
