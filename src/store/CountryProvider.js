import { createContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [countriesArray, setCountriesArray] = useState([]);

	const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);
	const [filter, setFilter] = useState(false);

	// creates an array containing all country objects
	const createCountriesArray = (data) => {
		setCountriesArray(data);
	};

	// gets user back to the homepage
	const goBackHandler = () => {
		setFilteredCountriesArray(countriesArray);
	};

	// creates new array of country objects filtered by region
	const filterByRegionHandler = (region) => {
		if (region === 'America') region = 'Americas';

		const filteredCountries = countriesArray.filter(
			(country) => country.region === region
		);

		setFilteredCountriesArray(filteredCountries);
		setFilter(true);
	};

	// creates new array of country objects filtered by search result
	const searchCountryHandler = (search) => {
		if (search === '') setFilteredCountriesArray(countriesArray);

		const searchedCountries = countriesArray.filter((country) =>
			country.name.toLowerCase().includes(search.toLowerCase())
		);

		setFilteredCountriesArray(searchedCountries);
		setFilter(true);
	};

	return (
		<CountryContext.Provider
			value={{
				countriesArray,
				createCountriesArray,
				goBackHandler,
				filterByRegionHandler,
				filteredCountriesArray,
				filter,
				setFilter,
				searchCountryHandler,
			}}
		>
			{children}
		</CountryContext.Provider>
	);
};

export default CountryContext;
