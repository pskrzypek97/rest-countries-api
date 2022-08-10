import { useContext } from 'react';

import CountryContext from '../store/CountryProvider';

const Link = () => {
	const { goBackHandler } = useContext(CountryContext);

	return (
		<button onClick={goBackHandler} className="link link--back">
			<svg className="link__icon">
				<use href="/sprite.svg#arrow-left" />
			</svg>
			Back
		</button>
	);
};

export default Link;
