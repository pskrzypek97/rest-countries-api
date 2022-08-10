import { createContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [countriesArray, setCountriesArray] = useState([]);
	const [countryDetail, setCountryDetail] = useState({});
	const [countryPage, setCountryPage] = useState(false);
	const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);
	const [filter, setFilter] = useState(false);

	const createCountriesArray = (data) => {
		setCountriesArray(data);
	};

	const countryDetailHandler = (countryName) => {
		const filteredCountry = countriesArray.filter((country) => {
			return countryName.length === 3
				? country.alpha3Code === countryName
				: country.name === countryName;
		});

		setCountryDetail(filteredCountry[0]);
		setCountryPage(true);
	};

	const goBackHandler = () => {
		setCountryPage(false);
		setFilteredCountriesArray(countriesArray);
	};

	const filterByRegionHandler = (region) => {
		if (region === 'America') region = 'Americas';

		const filteredCountries = countriesArray.filter(
			(country) => country.region === region
		);

		setFilteredCountriesArray(filteredCountries);
		setFilter(true);
	};

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
