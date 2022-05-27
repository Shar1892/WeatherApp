const Weather = ({isCurrent}) => {
	return <div>{isCurrent ? 'CURRENT' : '7 DAY FORECAST'}</div>;
};

export default Weather;
