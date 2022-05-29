import {useState} from 'react';

import './App.css';

import * as Api from '../../utils/weatherAPI';

import Search from '../Search/Search';
import TypeSwitcher from '../TypeSwitcher/TypeSwitcher';
import City from '../City/City';
import WeatherList from '../WeatherList/WeatherList';
import Preloader from '../Preloader/Preloader';

function App() {
	const [currentCity, setCurrentCity] = useState('');
	const [isCurrent, setIsCurrent] = useState(true);

	const [isNoResult, setIsNoResult] = useState(true);

	const [isLoading, setIsLoading] = useState(false);

	const [currentWeather, setCurrentWeather] = useState({});
	const [weatherForWeek, setWeatherForWeek] = useState({});

	const searchCity = (query) => {
		setIsLoading(true);
		setCurrentCity(query);
		if (isCurrent) {
			Api.getCurrentWeather(query)
				.then((weather) => {
					console.log(weather);
					setCurrentWeather(weather);
					if (weather) {
						setIsNoResult(false);
					} else {
						setIsNoResult(true);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			Api.getWeatherForWeek(query)
				.then((weekWaether) => {
					console.log(weekWaether);
					setWeatherForWeek(weekWaether);
					if (weekWaether) {
						setIsNoResult(false);
					} else {
						setIsNoResult(true);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	const changeStatus = (status) => {
		setIsCurrent(!status);
		if (currentCity) {
			setIsLoading(true);
			if (status) {
				Api.getWeatherForWeek(currentCity)
					.then((weekWaether) => {
						console.log(weekWaether);
						setWeatherForWeek(weekWaether);
						if (weekWaether) {
							setIsNoResult(false);
						} else {
							setIsNoResult(true);
						}
					})
					.finally(() => {
						setIsLoading(false);
					});
			} else {
				Api.getCurrentWeather(currentCity)
					.then((weather) => {
						console.log(weather);
						setCurrentWeather(weather);
						if (weather) {
							setIsNoResult(false);
						} else {
							setIsNoResult(true);
						}
					})
					.finally(() => {
						setIsLoading(false);
					});
			}
		}
	};

	return (
		<div className='App'>
			<Search searchCity={searchCity} />
			<TypeSwitcher status={isCurrent} changeStatus={changeStatus} />
			<>
				{isLoading ? (
					<Preloader />
				) : (
					<>
						<City
							currentCityValue={
								isNoResult
									? 'No data'
									: isCurrent
									? currentWeather.name
									: weatherForWeek.city.name
							}
							country={
								isNoResult
									? 'No data'
									: isCurrent
									? currentWeather.sys.country
									: weatherForWeek.city.country
							}
						/>
						<WeatherList
							isNoResult={isNoResult}
							isCurrent={isCurrent}
							currentWeather={currentWeather}
							weatherForWeek={weatherForWeek}
						/>
					</>
				)}
			</>
		</div>
	);
}

export default App;
