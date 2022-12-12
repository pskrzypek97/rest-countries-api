import { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import CountryContext from '../store/CountryProvider';

export const useCountryDetail = () => {
	const { countriesArray, createCountriesArray } = useContext(CountryContext);

	const [countryDetail, setCountryDetail] = useState({});

	const params = useParams();

	// creates an object containing data about particular country
	const countryDetailHandler = (countryName) => {
		const filteredCountry = countriesArray.filter((country) => {
			return country.slug === countryName;
		});

		setCountryDetail(filteredCountry[0]);
	};

	useEffect(() => {
		if (!countriesArray.length) {
			const countryArr = JSON.parse(window.localStorage.getItem('countries'));
			createCountriesArray(countryArr);
		}

		if (countriesArray.length) countryDetailHandler(params.countryCode);
	}, [countriesArray, countryDetail, params]);

	return countryDetail;
};
