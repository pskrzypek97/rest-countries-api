import { useState } from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Dropdown = () => {
	const [displayedMenu, setDisplayedMenu] = useState(false);

	const displayMenuOnClickHandler = () => {
		setDisplayedMenu((prevMenu) => !prevMenu);
	};

	const filterCountriesHandler = () => {
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

	const linkVariants = {
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
						<Link
							to={`/?region=${region}`}
							className="dropdown__region"
							key={region}
							onClick={filterCountriesHandler}
						>
							<motion.p variants={linkVariants} whileHover="hover">
								{region}
							</motion.p>
						</Link>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default Dropdown;
