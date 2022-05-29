import {BASE_URL, API_KEY} from './constants';

export const getCurrentWeather = (city) => {
	return fetch(`${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`, {
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
	return fetch(
		`${BASE_URL}forecast?q=${city}&units=metric&cnt=7&appid=${API_KEY}`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'text/plain',
			},
		}
	)
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((data) => data);
};
