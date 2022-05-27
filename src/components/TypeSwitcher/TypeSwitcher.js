import './TypeSwitcher.css';

const TypeSwitcher = ({status, changeStatus}) => {
	const handleChangeStatus = () => {
		changeStatus(status);
	};

	return (
		<div className='type-switcher'>
			<button
				className={`type-switcher__button ${
					status ? 'type-switcher__button_active' : ''
				}`}
				onClick={handleChangeStatus}
			>
				CURRENT
			</button>
			<button
				className={`type-switcher__button ${
					status ? '' : 'type-switcher__button_active'
				}`}
				onClick={handleChangeStatus}
			>
				7 DAY FORECAST
			</button>
		</div>
	);
};

export default TypeSwitcher;
