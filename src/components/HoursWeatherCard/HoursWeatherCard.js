import './HoursWeatherCard.css';

import {formatTemp, formatWeatherDiscription} from '../../utils/utils';

const HoursWeatherCard = ({data}) => {
	return (
		<div className='hoursWeatherCard'>
			<img
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].description}
				className='hoursWeatherCard__image'
			/>
			<div className='hoursWeatherCard__container'>
				<p className='hoursWeatherCard__text'>Avg Temp</p>
				<p className='hoursWeatherCard__text'>{`${formatTemp(
					data.main.temp
				)}°С`}</p>
			</div>
			<div className='hoursWeatherCard__container'>
				<p className='hoursWeatherCard__text'>
					{formatWeatherDiscription(data.weather[0].description)}
				</p>
			</div>
			<p className='hoursWeatherCard__text'>{data.dt_txt}</p>
		</div>
	);
};

export default HoursWeatherCard;
