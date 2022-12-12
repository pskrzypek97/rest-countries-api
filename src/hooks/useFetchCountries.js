import { useState, useEffect, useContext, useCallback } from 'react';

import CountryContext from '../store/CountryProvider';

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

export const useFetchCountries = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const { createCountriesArray } = useContext(CountryContext);

	const fetchCountries = useCallback(async () => {
		setLoading(true);
		setError(null);

		const localStorageCountries = JSON.parse(
			window.localStorage.getItem('countries')
		);

		if (localStorageCountries) createCountriesArray(localStorageCountries);

		if (!localStorageCountries) {
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
	}, [createCountriesArray]);

	useEffect(() => {
		fetchCountries();
	}, [fetchCountries]);

	return { loading, error };
};
