import { createContext, useState, useMemo, useCallback } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [countriesArray, setCountriesArray] = useState([]);

	const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);
	const [filter, setFilter] = useState(false);

	// creates an array containing all country objects
	const createCountriesArray = useCallback(
		(data) => {
			setCountriesArray(data);
		},
		[setCountriesArray]
	);

	// gets user back to the homepage
	const goBackHandler = useCallback(() => {
		setFilteredCountriesArray(countriesArray);
	}, [setFilteredCountriesArray, countriesArray]);

	// creates new array of country objects filtered by region
	const filterByRegionHandler = useCallback(
		(region) => {
			if (region === 'America') region = 'Americas';

			const filteredCountries = countriesArray.filter(
				(country) => country.region === region
			);

			setFilteredCountriesArray(filteredCountries);
			setFilter(true);
		},
		[countriesArray, setFilter]
	);

	// creates new array of country objects filtered by search result
	const searchCountryHandler = useCallback(
		(search) => {
			if (search === '') setFilteredCountriesArray(countriesArray);

			const searchedCountries = countriesArray.filter((country) =>
				country.name.toLowerCase().includes(search.toLowerCase())
			);

			setFilteredCountriesArray(searchedCountries);
			setFilter(true);
		},
		[setFilteredCountriesArray, countriesArray, setFilter]
	);

	const memoizedValues = useMemo(
		() => ({
			countriesArray,
			createCountriesArray,
			goBackHandler,
			filterByRegionHandler,
			filteredCountriesArray,
			filter,
			setFilter,
			searchCountryHandler,
		}),
		[
			countriesArray,
			createCountriesArray,
			goBackHandler,
			filterByRegionHandler,
			filteredCountriesArray,
			filter,
			setFilter,
			searchCountryHandler,
		]
	);

	return (
		<CountryContext.Provider value={memoizedValues}>
			{children}
		</CountryContext.Provider>
	);
};

export default CountryContext;
