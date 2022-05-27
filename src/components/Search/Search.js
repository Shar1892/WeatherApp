import {useState} from 'react';

import './Search.css';

const Search = ({searchCity}) => {
	const [query, setQuery] = useState('');

	const handleChangeQuery = (evt) => {
		setQuery(evt.target.value);
	};

	const handleSearchCity = (evt) => {
		evt.preventDefault();
		console.log(query);
		searchCity(query);
	};

	return (
		<form className='search' onSubmit={handleSearchCity}>
			<input
				className='search__input'
				name='search'
				type='search'
				placeholder='Enter city name'
				minLength='2'
				value={query || ''}
				onChange={handleChangeQuery}
			/>
			<button className='search__button' type='submit'></button>
		</form>
	);
};

export default Search;
