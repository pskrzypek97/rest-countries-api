import { useContext } from 'react';

import CountryContext from '../store/CountryProvider';
import { motion } from 'framer-motion';

const Link = () => {
	const { goBackHandler } = useContext(CountryContext);

	const buttonVariants = {
		hover: {
			scale: 1.1,
		},
	};

	const svgVariants = {
		hover: {
			x: '-.5rem',
		},
	};

	return (
		<motion.button
			whileHover="hover"
			variants={buttonVariants}
			onClick={goBackHandler}
			className="link link--back"
		>
			<motion.svg variants={svgVariants} className="link__icon">
				<use href="/sprite.svg#arrow-left" />
			</motion.svg>
			Back
		</motion.button>
	);
};

export default Link;
