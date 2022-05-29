import './CurrentDayWeatherCard.css';

const CurrentDayWeatherCard = ({data}) => {
	return (
		<div className='currentDayWeatherCard'>
			<img
				src={`https://openweathermap.org/img/wn/${
					data.weather ? data.weather[0].icon : ''
				}.png`}
				alt={data.weather ? data.weather[0].description : ''}
				className='currentDayWeatherCard__image'
			/>
			<p className='currentDayWeatherCard__text'>
				{data.main ? data.main.temp : ''}
			</p>
			<p className='currentDayWeatherCard__text'>
				{data.weather ? data.weather[0].description : ''}
			</p>
		</div>
	);
};

export default CurrentDayWeatherCard;

/*

<img
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].description}
			/>
			<p>Avg Temp</p>
			<p>{data.main.temp}</p>
			<p>{data.weather[0].description}</p>
			<p>{data.dt_txt}</p>

*/
