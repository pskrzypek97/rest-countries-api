import { useContext } from 'react';

import { Link } from 'react-router-dom';

import CountryContext from '../store/CountryProvider';

const LinkBack = () => {
	const { goBackHandler } = useContext(CountryContext);

	return (
		<Link to={'/'}>
			<button onClick={goBackHandler} className="link link--back">
				<svg className="link__icon">
					<use href="/sprite.svg#arrow-left" />
				</svg>
				Back
			</button>
		</Link>
	);
};

export default LinkBack;
