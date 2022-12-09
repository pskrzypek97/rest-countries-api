import { useCountryDetail } from '../hooks/useCountryDetail';

import LinkBack from '../UI/LinkBack';
import CountryDetails from '../components/CountryDetails/CountryDetails';
import Error from '../UI/Error';

const CoutryPage = () => {
	const countryDetail = useCountryDetail();

	console.log(countryDetail);

	return (
		<main className="main">
			{countryDetail && (
				<>
					<LinkBack />
					<CountryDetails countryDetail={countryDetail} />
				</>
			)}
			{!countryDetail && <Error />}
		</main>
	);
};

export default CoutryPage;
