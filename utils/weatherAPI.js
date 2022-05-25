import {BASE_URL, API_KEY} from './constants';

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

export const getCurrentWeather = (city) => {
	return fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'text/plain',
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((data) => data);
};

export const getWeatherForWeek = (city) => {
	return fetch(`${BASE_URL}forecast/daily?q=${city}&cnt=7&appid=${API_KEY}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'text/plain',
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((data) => data);
};
