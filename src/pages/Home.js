import { useContext } from 'react';

import Form from '../UI/Form';
import Dropdown from '../UI/Dropdown';
import CountryCard from '../components/CountryCard/CountryCard';
import CountryContext from '../store/CountryProvider';

const Home = () => {
	const { countriesArray, filteredCountriesArray, filter } =
		useContext(CountryContext);

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
