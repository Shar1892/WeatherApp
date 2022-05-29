import DayWeatherCard from '../DayWeatherCard/DayWeatherCard';
import CurrentDayWeatherCard from '../CurrentDayWeatherCard/CurrentDayWeatherCard';

import './WeatherList.css';

const WeatherList = ({isCurrent, currentWeather, weatherForWeek}) => {
	/*const filterWeatherDataByDays = (weatherDataByHours) => {
		let weatherDataByDays = weatherDataByHours.filter((item, index) => {
			if (index === 0 || !(index % 5)) {
				return item;
			}
		});
		return weatherDataByDays;
	};*/

	return (
		<div className={`weatherList ${isCurrent ? 'weatherList_single' : ''}`}>
			{isCurrent ? (
				<CurrentDayWeatherCard data={currentWeather} />
			) : (
				weatherForWeek.list.map((item, i) => (
					<DayWeatherCard key={item.dt} data={item} />
				))
			)}
		</div>
	);
};

export default WeatherList;

//weatherForWeek.list.map((item, i) => (
