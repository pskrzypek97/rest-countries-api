import { useContext } from 'react';

import ThemeContext from '../../store/ThemeProvider';
import CountryContext from '../../store/CountryProvider';
import { motion } from 'framer-motion';

const CountryCard = (props) => {
	const { darkTheme } = useContext(ThemeContext);
	const { countryDetailHandler } = useContext(CountryContext);

	const countryCardVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		hover: {
			scale: 1.1,
		},
	};

	return (
		<motion.div
			className={`country-card ${!darkTheme && 'light-mode--element'}`}
			id={props.name}
			onClick={() => countryDetailHandler(props.name)}
			variants={countryCardVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
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
		</motion.div>
	);
};

export default CountryCard;
