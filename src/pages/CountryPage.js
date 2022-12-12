import { useMemo } from 'react';

import { useCountryDetail } from '../hooks/useCountryDetail';

import LinkBack from '../UI/LinkBack';
import CountryDetails from '../components/CountryDetails/CountryDetails';
import Error from '../UI/Error';

const CoutryPage = () => {
	const countryDetail = useCountryDetail();

	// memoized LinkBack so it doesn't re-render when countryDetails is updated
	const linkBack = useMemo(() => <LinkBack />, []);

	return (
		<main className="main">
			{countryDetail && (
				<>
					{linkBack}
					<CountryDetails countryDetail={countryDetail} />
				</>
			)}
			{!countryDetail && <Error />}
		</main>
	);
};

export default CoutryPage;
