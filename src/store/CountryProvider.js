import { createContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [countriesArray, setCountriesArray] = useState([]);
	const [countryDetail, setCountryDetail] = useState({});
	const [countryPage, setCountryPage] = useState(false);
	const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);
	const [filter, setFilter] = useState(false);

	// creates an array containing all country objects
	const createCountriesArray = (data) => {
		setCountriesArray(data);
	};

	// creates an object containing data about particular country
	// and opens country detail page
	const countryDetailHandler = (countryName) => {
		const filteredCountry = countriesArray.filter((country) => {
			return countryName.length === 3
				? country.alpha3Code === countryName
				: country.name === countryName;
		});

		setCountryDetail(filteredCountry[0]);
		setCountryPage(true);
	};

	// gets user back to the homepage
	const goBackHandler = () => {
		setCountryPage(false);
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
				countryDetail,
				countryDetailHandler,
				countryPage,
				goBackHandler,
				filterByRegionHandler,
				filteredCountriesArray,
				filter,
				searchCountryHandler,
			}}
		>
			{children}
		</CountryContext.Provider>
	);
};

export default CountryContext;
