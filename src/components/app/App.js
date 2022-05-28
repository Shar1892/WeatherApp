import {useState, useEffect} from 'react';

import './App.css';

import * as Api from '../../utils/weatherAPI';

import Search from '../Search/Search';
import TypeSwitcher from '../TypeSwitcher/TypeSwitcher';
import City from '../City/City';
import Weather from '../Weather/Weather';

function App() {
	const [currentCity, setCurrentCity] = useState('London');
	const [isCurrent, setIsCurrent] = useState(true);

	const [currentWeather, setCurrentWeather] = useState({});
	const [weatherForWeek, setWeatherForWeek] = useState({});

	useEffect(() => {
		Api.getCurrentWeather('London').then((weather) => {
			console.log(weather);
			setCurrentWeather(weather);
		});
		Api.getWeatherForWeek('London').then((weekWaether) => {
			console.log(weekWaether);
			setWeatherForWeek(weekWaether);
		});
	}, []);

	const searchCity = (query) => {
		setCurrentCity(query);
		if (isCurrent) {
			Api.getCurrentWeather(query).then((weather) => {
				console.log(weather);
				setCurrentWeather(weather);
			});
		} else {
			Api.getWeatherForWeek(query).then((weekWaether) => {
				console.log(weekWaether);
				setWeatherForWeek(weekWaether);
			});
		}
	};

	const changeStatus = (status) => {
		setIsCurrent(!status);
		console.log(status);
		if (status) {
			Api.getWeatherForWeek(currentCity).then((weekWaether) => {
				console.log(weekWaether);
				setWeatherForWeek(weekWaether);
			});
		} else {
			Api.getCurrentWeather(currentCity).then((weather) => {
				console.log(weather);
				setCurrentWeather(weather);
			});
		}
	};

	return (
		<div className='App'>
			<Search searchCity={searchCity} />
			<TypeSwitcher status={isCurrent} changeStatus={changeStatus} />
			<City
				currentCityValue={
					isCurrent ? currentWeather.name : weatherForWeek.city.name
				}
				country={
					isCurrent
						? currentWeather.sys
							? currentWeather.sys.country
							: ''
						: weatherForWeek.city.country
				}
			/>
			<Weather isCurrent={isCurrent} />
		</div>
	);
}

export default App;

/*

currentCityValue={
					isCurrent ? currentWeather.name : weatherForWeek.city.name
				}


country={
					isCurrent ? currentWeather.sys.country : weatherForWeek.city.country
				}


				country={isCurrent ? currentWeather.sys : weatherForWeek.city}
				*/
