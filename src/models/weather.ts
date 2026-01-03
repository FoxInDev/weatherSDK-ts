export interface City {
    readonly id: number;
    name: string;
}

export interface CurrentWeather {
    temp: number;
    isRaining?: boolean;
}

export interface ForecastWeather {
    day: string;
    temp: number;
}

export interface WeatherResponse {
    city: City;
    current: CurrentWeather;
    forecast: ForecastWeather[];
}

export type Status = 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
    data: T | null;
    status: Status;
    error?: string;
}
