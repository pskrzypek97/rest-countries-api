import { useState, useContext } from 'react';

import CountryContext from '../store/CountryProvider';
import { motion } from 'framer-motion';

const Dropdown = () => {
	const [displayedMenu, setDisplayedMenu] = useState(false);
	const { filterByRegionHandler } = useContext(CountryContext);

	const displayMenuOnClickHandler = () => {
		setDisplayedMenu((prevMenu) => !prevMenu);
	};

	const filterCountriesHandler = (region) => {
		filterByRegionHandler(region);
		setDisplayedMenu((prevMenu) => !prevMenu);
	};

	const menuVariants = {
		hidden: {
			opacity: 0,
			y: '-2rem',
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const buttonVariants = {
		hover: {
			x: '0.5rem',
		},
	};

	return (
		<div className="dropdown">
			<button className="dropdown__button" onClick={displayMenuOnClickHandler}>
				Filter by Region
				<svg className="dropdown__icon">
					<use href="/sprite.svg#chevron-down"></use>
				</svg>
			</button>

			{displayedMenu && (
				<motion.div
					variants={menuVariants}
					initial="hidden"
					animate="visible"
					className="dropdown__menu"
				>
					{['Africa', 'America', 'Asia', 'Europe', 'Oceania'].map((region) => (
						<button
							onClick={() => filterCountriesHandler(region)}
							key={region}
							className="dropdown__region"
						>
							<motion.p variants={buttonVariants} whileHover="hover">
								{region}
							</motion.p>
						</button>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default Dropdown;
