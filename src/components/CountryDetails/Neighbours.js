import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import CountryContext from '../../store/CountryProvider';

const Neighbours = ({ bordersArray }) => {
	const { countriesArray } = useContext(CountryContext);
	const [neighbours, setNeighbours] = useState([]);

	useEffect(() => {
		const filteredBorders = bordersArray
			.map((border) =>
				countriesArray.find((country) => country.alpha3Code === border)
			)
			.map((border) => {
				const { slug, shortName } = border;

				return {
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
				{neighbours.length &&
					neighbours.map(({ slug, shortName }) => (
						<Link to={`/${slug}`}>
							<button key={shortName} className="link link--neighbour">
								{shortName}
							</button>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Neighbours;
