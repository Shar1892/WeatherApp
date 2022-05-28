import DayWeatherCard from '../DayWeatherCard/DayWeatherCard';

import './WeatherList.css';

const WeatherList = ({isCurrent, currentWeather, weatherForWeek}) => {
	return (
		<div className={`weatherList ${isCurrent ? 'weatherList_single' : ''}`}>
			{isCurrent ? (
				<DayWeatherCard data={currentWeather} />
			) : (
				weatherForWeek.list.map((item, i) => (
					<DayWeatherCard key={item.dt} data={item} />
				))
			)}
		</div>
	);
};

export default WeatherList;
