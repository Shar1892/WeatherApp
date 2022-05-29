import DayWeatherCard from '../DayWeatherCard/DayWeatherCard';
import CurrentDayWeatherCard from '../CurrentDayWeatherCard/CurrentDayWeatherCard';

import './WeatherList.css';

const WeatherList = ({
	isCurrent,
	currentWeather,
	weatherForWeek,
	isNoResult,
}) => {
	return (
		<>
			{isNoResult ? (
				<div className='weatherList__warning-container'>
					<p className='weatherList__warning-text'>No data</p>
				</div>
			) : (
				<div className={`weatherList ${isCurrent ? 'weatherList_single' : ''}`}>
					{isCurrent ? (
						<CurrentDayWeatherCard data={currentWeather} />
					) : (
						weatherForWeek.list.map((item, i) => (
							<DayWeatherCard key={item.dt} data={item} />
						))
					)}
				</div>
			)}
		</>
	);
};

export default WeatherList;
