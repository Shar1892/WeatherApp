import './City.css';

const City = ({currentCityValue, country}) => {
	return (
		<div className='city'>
			<p className='city__name'>{currentCityValue}</p>
			<p className='city__country-name'>{country}</p>
		</div>
	);
};

export default City;
