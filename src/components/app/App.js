import {useState, useEffect} from 'react';

import './App.css';

import * as Api from '../../utils/weatherAPI';

import Search from '../Search/Search';
import TypeSwitcher from '../TypeSwitcher/TypeSwitcher';
import City from '../City/City';
import Weather from '../Weather/Weather';

function App() {
	useEffect(() => {
		Api.getCurrentWeather('London').then((weather) => {
			console.log(weather);
		});
		Api.getWeatherForWeek('London').then((weekWaether) => {
			console.log(weekWaether);
		});
	}, []);

	return (
		<div className='App'>
			<Search />
			<TypeSwitcher />
			<City />
			<Weather />
		</div>
	);
}

export default App;
