import fetchWeather from "../api/weatherApi";
import { WeatherResponse } from "../models/weather";

export default function getWeather(cityId: number): Promise<WeatherResponse> {
    return fetchWeather(cityId)
        .then(res => {
            if(res.status === 'error') {
                throw new Error(res.error || 'Произошла неизвестная ошибка.');
            }
            if (!res.data) {
                throw new Error('Данные не были получены.');
            }
            return res.data;
        })
}
