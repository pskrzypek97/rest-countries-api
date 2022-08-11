import { useContext } from 'react';

import CountryContext from '../../store/CountryProvider';
import { motion } from 'framer-motion';

const Neighbours = ({ bordersArray }) => {
	const { countryDetailHandler } = useContext(CountryContext);

	const buttonVariants = {
		hover: {
			scale: 1.1,
		},
	};

	return (
		<div className="country__neighbours">
			<span>Border Countries:</span>
			<div>
				{bordersArray.map((border) => (
					<motion.button
						variants={buttonVariants}
						whileHover="hover"
						onClick={() => countryDetailHandler(border)}
						key={border}
						className="link link--neighbour"
					>
						{border}
					</motion.button>
				))}
			</div>
		</div>
	);
};

export default Neighbours;
