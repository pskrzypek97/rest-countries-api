import { useMemo, useEffect, useContext } from 'react';

import { useLocation } from 'react-router-dom';

import CountryContext from '../store/CountryProvider';

const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
};

export const useFilter = () => {
	const {
		countriesArray,
		filteredCountriesArray,
		filterByRegionHandler,
		filter,
		setFilter,
	} = useContext(CountryContext);

	const query = useQuery();

	useEffect(() => {
		const queryResult = query.get('region');

		if (!queryResult) setFilter(false);
		if (queryResult) {
			setFilter(true);
			filterByRegionHandler(queryResult);
		}
	}, [query]);

	return { countriesArray, filteredCountriesArray, filter };
};
