import { useContext } from 'react';

import { Link } from 'react-router-dom';

import ThemeContext from '../../store/ThemeProvider';
import CountryContext from '../../store/CountryProvider';
import { motion } from 'framer-motion';

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

const CountryCard = (props) => {
	const { darkTheme } = useContext(ThemeContext);
	const { countryDetailHandler } = useContext(CountryContext);

	const { name, flags, population, region, capital, slug } = props;

	return (
		<Link to={`/${slug}`}>
			<motion.div
				className={`country-card ${!darkTheme && 'light-mode--element'}`}
				id={name}
				variants={countryCardVariants}
				initial="hidden"
				animate="visible"
				whileHover="hover"
			>
				<div>
					<img
						className="country-card__image"
						src={flags}
						alt={`Flag of ${name}`}
					/>
				</div>
				<h3 className="heading-3">{name}</h3>
				<div className="country-card__details">
					<p className="paragraph">
						<span>Population:</span> {population}
					</p>
					<p className="paragraph">
						<span>Region:</span> {region}
					</p>
					<p className="paragraph">
						<span>Capital:</span> {capital}
					</p>
				</div>
			</motion.div>
		</Link>
	);
};

export default CountryCard;
