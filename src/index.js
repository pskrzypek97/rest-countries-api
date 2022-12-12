import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss';
import App from './App';
import { ThemeProvider } from './store/ThemeProvider';
import { CountryProvider } from './store/CountryProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider>
		<CountryProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CountryProvider>
	</ThemeProvider>
);
