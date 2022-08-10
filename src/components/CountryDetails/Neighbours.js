import { useContext } from 'react';

import CountryContext from '../../store/CountryProvider';

const Neighbours = ({ bordersArray }) => {
	const { countryDetailHandler } = useContext(CountryContext);

	return (
		<div className="country__neighbours">
			<span>Border Countries:</span>
			<div>
				{bordersArray.map((border) => (
					<button
						onClick={() => countryDetailHandler(border)}
						key={border}
						className="link link--neighbour"
					>
						{border}
					</button>
				))}
			</div>
		</div>
	);
};

export default Neighbours;
