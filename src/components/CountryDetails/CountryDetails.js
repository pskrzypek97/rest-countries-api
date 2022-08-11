import { useContext } from 'react';

import Neighbours from './Neighbours';
import ThemeContext from '../../store/ThemeProvider';
import CountryContext from '../../store/CountryProvider';
import { motion } from 'framer-motion';

const CountryDetails = () => {
	const { darkTheme } = useContext(ThemeContext);
	const { countryDetail } = useContext(CountryContext);

	const flagVariants = {
		hidden: {
			x: '-50vw',
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				type: 'spring',
			},
		},
	};

	const dataVariants = {
		hidden: {
			x: '50vw',
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				type: 'spring',
			},
		},
	};

	const language =
		countryDetail.languages.length === 1
			? countryDetail.languages[0]
			: countryDetail.languages.join(', ');

	return (
		<div className="country">
			<motion.div
				variants={flagVariants}
				initial="hidden"
				animate="visible"
				className="country__flag"
			>
				<img src={countryDetail.flags} alt={`Flag of ${countryDetail.name}`} />
			</motion.div>

			<motion.div
				variants={dataVariants}
				initial="hidden"
				animate="visible"
				className="country__data"
			>
				<h1 className={`heading-1 ${!darkTheme && 'light-mode--heading'}`}>
					{countryDetail.name}
				</h1>
				<div className="country__details">
					<div>
						<p className="paragraph">
							<span>Native Name:</span> {countryDetail.nativeName}
						</p>
						<p className="paragraph">
							<span>Population:</span> {countryDetail.population}
						</p>
						<p className="paragraph">
							<span>Region:</span> {countryDetail.region}
						</p>
						<p className="paragraph">
							<span>Sub Region:</span> {countryDetail.subregion}
						</p>
						<p className="paragraph">
							<span>Capital:</span> {countryDetail.capital}
						</p>
					</div>
					<div>
						<p className="paragraph">
							<span>Top Level Domain:</span> {countryDetail.topLevelDomain}
						</p>
						<p className="paragraph">
							<span>Currencies:</span> {countryDetail.currencies}
						</p>
						<p className="paragraph">
							<span>Languages:</span> {language}
						</p>
					</div>
				</div>
				{countryDetail.borders && (
					<Neighbours bordersArray={countryDetail.borders} />
				)}
			</motion.div>
		</div>
	);
};

export default CountryDetails;
