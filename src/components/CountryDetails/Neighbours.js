import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import CountryContext from '../../store/CountryProvider';

const Neighbours = ({ bordersArray }) => {
	const { countryDetailHandler, countriesArray } = useContext(CountryContext);
	const [neighbours, setNeighbours] = useState([]);

	useEffect(() => {
		const filteredBorders = bordersArray
			.map((border) =>
				countriesArray.find((country) => country.alpha3Code === border)
			)
			.map((border) => {
				const { name, slug, shortName } = border;

				return {
					name,
					slug,
					shortName,
				};
			});

		setNeighbours(filteredBorders);
	}, [bordersArray, countriesArray]);

	return (
		<div className="country__neighbours">
			<span>Border Countries:</span>
			<div>
				{neighbours.map(({ name, slug, shortName }) => (
					<Link to={`/${slug}`}>
						<button
							onClick={() => countryDetailHandler(name)}
							key={shortName}
							className="link link--neighbour"
						>
							{shortName}
						</button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Neighbours;
