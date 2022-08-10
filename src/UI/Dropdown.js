import { useState, useContext } from 'react';

import CountryContext from '../store/CountryProvider';

const Dropdown = () => {
	const [displayedMenu, setDisplayedMenu] = useState(false);
	const { filterByRegionHandler } = useContext(CountryContext);

	const displayMenuHandler = () => {
		setDisplayedMenu((prevMenu) => !prevMenu);
	};

	const filterCountriesHandler = (region) => {
		filterByRegionHandler(region);
		setDisplayedMenu(false);
	};

	return (
		<div className="dropdown">
			<button className="dropdown__button" onClick={displayMenuHandler}>
				Filter by Region
				<svg className="dropdown__icon">
					<use href="/sprite.svg#chevron-down"></use>
				</svg>
			</button>

			{displayedMenu && (
				<div className="dropdown__menu">
					{['Africa', 'America', 'Asia', 'Europe', 'Oceania'].map((region) => (
						<button
							onClick={() => filterCountriesHandler(region)}
							key={region}
							className="dropdown__region"
						>
							{region}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
