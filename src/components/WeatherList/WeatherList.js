import HoursWeatherCard from '../HoursWeatherCard/HoursWeatherCard';
import CurrentDayWeatherCard from '../CurrentDayWeatherCard/CurrentDayWeatherCard';

import './WeatherList.css';

const WeatherList = ({
	isCurrent,
	currentWeather,
	weatherForHours,
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
						weatherForHours.list.map((item, i) => (
							<HoursWeatherCard key={item.dt} data={item} />
						))
					)}
				</div>
			)}
		</>
	);
};

export default WeatherList;
