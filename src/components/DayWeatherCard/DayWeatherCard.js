import './DayWeatherCard.css';

const DayWeatherCard = ({data}) => {
	return (
		<div className='dayWeatherCard'>
			<img
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].description}
				className='dayWeatherCard__image'
			/>
			<div className='dayWeatherCard__container'>
				<p className='dayWeatherCard__text'>Avg Temp</p>
				<p className='dayWeatherCard__text'>{data.main.temp}</p>
			</div>
			<div className='dayWeatherCard__container'>
				<p className='dayWeatherCard__text'>{data.weather[0].description}</p>
			</div>
			<p className='dayWeatherCard__text'>{data.dt_txt}</p>
		</div>
	);
};

export default DayWeatherCard;
