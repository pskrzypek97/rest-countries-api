import { useState, useEffect, useContext } from 'react';

import { Routes, Route } from 'react-router-dom';

import ThemeContext from './store/ThemeProvider';
import CountryContext from './store/CountryProvider';

import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Header from './components/Header/Header';
import Loading from './UI/Loading';
import Error from './UI/Error';

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
			slug: country.alpha3Code.toLowerCase(),
			shortName:
				country.name.length <= 10
					? country.name
					: `${country.name.slice(0, 10)}...`,
		};
	});
	return countries;
};

const App = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { darkTheme } = useContext(ThemeContext);
	const { createCountriesArray } = useContext(CountryContext);

	const fetchCountries = async () => {
		setLoading(true);
		setError(null);

		const countriesArr = JSON.parse(window.localStorage.getItem('countries'));

		if (countriesArr) createCountriesArray(countriesArr);

		if (!countriesArr) {
			try {
				const res = await fetch('https://restcountries.com/v2/all');
				const data = await res.json();

				const transformedCountries = transformData(data);

				createCountriesArray(transformedCountries);

				localStorage.setItem('countries', JSON.stringify(transformedCountries));
			} catch (err) {
				setError("Couldn't find countries, please reload the page!");
			}
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	const containerClass = `container container--home ${
		!darkTheme && 'light-mode'
	}`;

	let content;
	if (error) content = <Error error={error} />;
	if (!error && loading) content = <Loading />;
	if (!error && !loading) content = <Home />;

	return (
		<div className={containerClass}>
			<Header />

			<Routes>
				<Route path="/" element={content} />

				<Route path="/:countryCode" element={<CountryPage />} />

				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
