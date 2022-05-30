# Приложение Погода

В приложении доступен просмотр текущей погоды для нужного города и прогноз погоды на 48 часов с шагом 3 часа.
Поиск осуществляется по названию города на английском.
Данные получены с источника https://openweathermap.org/
Адаптивная верстка под экраны устройств разных размеров.

Реализовано на React.js.

Приложение доступно на https://shar1892.github.io/WeatherApp/ через vpn.

# Инструкция для локального разворота приложения:

1. Клонируем репозиторий git clone https://github.com/Shar1892/WeatherApp
2. Устанавливаем зависимости npm install
3. Запускаем приложение npm start


# ToDo
1. Доработать обработку ошибок с API;
2. Убрать запросы на сервер, если поисковый запрос не меняется и данные уже загружены;
3. В стилях убрать дублирование;
4. Реализовать поиск по краткому названию города;
5. Сделать кастомный инпут поля поиска;
6. Придумать стартовую страницу;
