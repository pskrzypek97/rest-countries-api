import { useContext } from 'react';

import ThemeChange from './ThemeChange';
import ThemeContext from '../../store/ThemeProvider';
import { motion } from 'framer-motion';

const Header = () => {
	const { darkTheme } = useContext(ThemeContext);

	const headingVariants = {
		hidden: {
			y: '-10vh',
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				type: 'spring',
			},
		},
	};

	return (
		<header className={`header ${!darkTheme && 'light-mode--element'}`}>
			<motion.h2
				variants={headingVariants}
				initial="hidden"
				animate="visible"
				className="heading-2"
			>
				Where in the world?
			</motion.h2>
			<ThemeChange />
		</header>
	);
};

export default Header;
