import {COUNTRIES} from './constants';

export const formatTemp = (temp) => {
	return temp.toFixed(1);
};

export const formatWeatherDiscription = (discription) => {
	let formatedDiscription = discription[0].toUpperCase() + discription.slice(1);
	return formatedDiscription;
};

export const getFullCountryName = (shortName) => {
	return COUNTRIES[shortName];
};
