import { useFilter } from '../hooks/useFilter';

import Form from '../UI/Form';
import Dropdown from '../UI/Dropdown';
import CountryCard from '../components/CountryCard/CountryCard';

const Home = () => {
	const { filter, countriesArray, filteredCountriesArray } = useFilter();

	return (
		<main className="main">
			<div className="inputs">
				<Form />
				<Dropdown />
			</div>
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
