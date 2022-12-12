import { useMemo } from 'react';

import { useFilter } from '../hooks/useFilter';

import Form from '../UI/Form';
import Dropdown from '../UI/Dropdown';
import CountryCard from '../components/CountryCard/CountryCard';

const Home = () => {
	const { filter, countriesArray, filteredCountriesArray } = useFilter();

	// memoized inputs div so it doesn't re-render when grid is updated
	const inputs = useMemo(
		() => (
			<div className="inputs">
				<Form />
				<Dropdown />
			</div>
		),
		[]
	);

	return (
		<main className="main">
			{inputs}
			<div className="grid">
				{!filter &&
					countriesArray.map((country) => {
						return <CountryCard key={country.id} {...country} />;
					})}
				{filter &&
					filteredCountriesArray.map((country) => {
						return <CountryCard key={country.id} {...country} />;
					})}
			</div>
		</main>
	);
};

export default Home;
