import { useContext, useMemo } from 'react';

import { Routes, Route } from 'react-router-dom';

import ThemeContext from './store/ThemeProvider';

import { useFetchCountries } from './hooks/useFetchCountries';

import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Header from './components/Header/Header';
import Loading from './UI/Loading';
import Error from './UI/Error';

const App = () => {
	const { darkTheme } = useContext(ThemeContext);

	const { error, loading } = useFetchCountries();

	// memoized Header so it doesn't re-render when new page is rendered
	const header = useMemo(() => <Header />, []);

	const containerClass = `container container--home ${
		!darkTheme && 'light-mode'
	}`;

	let content;
	if (error) content = <Error error={error} />;
	if (!error && loading) content = <Loading />;
	if (!error && !loading) content = <Home />;

	return (
		<div className={containerClass}>
			{header}

			<Routes>
				<Route path="/" element={content} />

				<Route path="/:countryCode" element={<CountryPage />} />

				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
