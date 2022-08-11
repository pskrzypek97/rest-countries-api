import { useContext } from 'react';

import ThemeContext from '../store/ThemeProvider';
import { motion } from 'framer-motion';

const Loading = () => {
	const { darkTheme } = useContext(ThemeContext);

	const loadingVariants = {
		initial: {
			rotate: '0deg',
		},
		animation: {
			rotate: '360deg',
			transition: {
				rotate: {
					yoyo: Infinity,
					duration: 0.5,
					ease: 'easeOut',
				},
			},
		},
	};

	return (
		<motion.div
			variants={loadingVariants}
			initial="initial"
			animate="animation"
			className={`loading ${darkTheme && 'dark-mode'}`}
		>
			<svg>
				<use href="/sprite.svg#spinner"></use>
			</svg>
		</motion.div>
	);
};

export default Loading;
