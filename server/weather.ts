import {unstable_cache as cache} from "next/cache"
import OpenWeatherMap from 'openweathermap-ts';

export const Weather = cache(
		async () => {
			const openWeather = new OpenWeatherMap({
				apiKey: process.env.OPEN_WEATHER_KEY!,
				units: "metric",
				language: "ru"
			});

			return await openWeather.getCurrentWeatherByCityId(2019528)
		},
		["weather"],
		{
			revalidate: 60,
			tags: ["weather"]
		}
)