import {useState} from 'react';

import './App.css';

import * as Api from '../../utils/weatherAPI';

import Search from '../Search/Search';
import TypeSwitcher from '../TypeSwitcher/TypeSwitcher';
import City from '../City/City';
import WeatherList from '../WeatherList/WeatherList';
import Preloader from '../Preloader/Preloader';

import {getFullCountryName} from '../../utils/utils';

function App() {
	const [currentCity, setCurrentCity] = useState('');
	const [isCurrent, setIsCurrent] = useState(true);

	const [isNoResult, setIsNoResult] = useState(true);

	const [isLoading, setIsLoading] = useState(false);

	const [currentWeather, setCurrentWeather] = useState({});
	const [weatherForHours, setWeatherForHours] = useState({});

	const changeCurrentWeather = (city) => {
		Api.getCurrentWeather(city)
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
	};

	const changeHoursWeather = (city) => {
		Api.getWeatherForHours(city)
			.then((weekWaether) => {
				console.log(weekWaether);
				setWeatherForHours(weekWaether);
				if (weekWaether) {
					setIsNoResult(false);
				} else {
					setIsNoResult(true);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const searchCity = (query) => {
		setIsLoading(true);
		setCurrentCity(query);
		if (isCurrent) {
			changeCurrentWeather(query);
		} else {
			changeHoursWeather(query);
		}
	};

	const changeStatus = (status) => {
		setIsCurrent(!status);
		if (currentCity) {
			setIsLoading(true);
			if (status) {
				changeHoursWeather(currentCity);
			} else {
				changeCurrentWeather(currentCity);
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
									: weatherForHours.city.name
							}
							country={
								isNoResult
									? 'No data'
									: isCurrent
									? getFullCountryName(currentWeather.sys.country)
									: getFullCountryName(weatherForHours.city.country)
							}
						/>
						<WeatherList
							isNoResult={isNoResult}
							isCurrent={isCurrent}
							currentWeather={currentWeather}
							weatherForHours={weatherForHours}
						/>
					</>
				)}
			</>
		</div>
	);
}

export default App;
