import type { WeatherResponse, ApiResponse } from '../models/weather';

export default function fetchWeather(cityId: number): Promise<ApiResponse<WeatherResponse>> {
        return new Promise((res, rej) => {
            if(cityId <= 0) {
                rej({
                    'data': null,
                    'status': 'error',
                    'error': 'Неверные входные данные'
                })
            }
            res({
                'data': {
                    'city': {
                        'id': cityId,
                        'name': 'Moscow'
                    },
                    'current': {
                        'temp': 10,
                        'isRaining': false
                    },
                    'forecast': [
                        { 'day': 'Monday', 'temp': 10 },
                        { 'day': 'Tuesday', 'temp': 12}
                    ]
                },
                'status': 'success'
            })
        })
}
