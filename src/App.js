import { useState, useEffect, useContext } from 'react';

import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Header from './components/Header/Header';
import Loading from './UI/Loading';
import Error from './UI/Error';
import ThemeContext from './store/ThemeProvider';
import CountryContext from './store/CountryProvider';

const transformData = (data) => {
	const countries = data.map((country) => {
		return {
			alpha3Code: country.alpha3Code,
			id: country.name,
			name: country.name,
			nativeName: country.nativeName,
			population: country.population.toLocaleString(),
			region: country.region,
			subregion: country.subregion,
			capital: !country?.capital ? 'No capital' : country.capital,
			topLevelDomain:
				country.topLevelDomain[0] === ''
					? 'No domain'
					: country.topLevelDomain[0],
			currencies: !country?.currencies
				? 'No currency'
				: country.currencies.map((currency) => currency.name),
			languages: country.languages.map((lang) => lang.name),
			borders: country.borders,
			flags: country.flags.svg,
		};
	});
	return countries;
};

const App = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { darkTheme } = useContext(ThemeContext);
	const { createCountriesArray, countryPage } = useContext(CountryContext);

	const fetchCountries = async () => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch('https://restcountries.com/v2/all');
			const data = await res.json();

			const transformedCountries = transformData(data);
			createCountriesArray(transformedCountries);
		} catch (err) {
			setError("Couldn't find countries, please reload the page!");
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	const containerClass = `container ${!countryPage && 'container--home'} ${
		!darkTheme && 'light-mode'
	}`;

	let content;

	if (error) content = <Error error={error} />;
	if (!error && loading) content = <Loading />;
	if (!error && !loading && !countryPage) content = <Home />;
	if (!error && !loading && countryPage) content = <CountryPage />;

	return (
		<div className={containerClass}>
			<Header />
			{content}
		</div>
	);
};

export default App;
