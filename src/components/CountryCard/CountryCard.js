import { useContext } from 'react';

import ThemeContext from '../../store/ThemeProvider';
import CountryContext from '../../store/CountryProvider';

const CountryCard = (props) => {
	const { darkTheme } = useContext(ThemeContext);
	const { countryDetailHandler } = useContext(CountryContext);

	return (
		<div
			className={`country-card ${!darkTheme && 'light-mode--element'}`}
			id={props.name}
			onClick={() => countryDetailHandler(props.name)}
		>
			<div>
				<img
					className="country-card__image"
					src={props.flags}
					alt={`Flag of ${props.name}`}
				/>
			</div>
			<h3 className="heading-3">{props.name}</h3>
			<div className="country-card__details">
				<p className="paragraph">
					<span>Population:</span> {props.population}
				</p>
				<p className="paragraph">
					<span>Region:</span> {props.region}
				</p>
				<p className="paragraph">
					<span>Capital:</span> {props.capital}
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
