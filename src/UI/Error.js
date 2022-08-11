import { useContext } from 'react';

import ThemeContext from '../store/ThemeProvider';
import { motion } from 'framer-motion';

const Error = ({ error }) => {
	const { darkTheme } = useContext(ThemeContext);

	const errorVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				opacity: {
					duration: 0.5,
				},
			},
		},
	};

	return (
		<motion.div
			variants={errorVariants}
			initial="hidden"
			animate="visible"
			className={`error ${darkTheme && 'dark-mode'}`}
		>
			<svg>
				<use href="/sprite.svg#warning"></use>
			</svg>
			<p>{error}</p>
		</motion.div>
	);
};

export default Error;
