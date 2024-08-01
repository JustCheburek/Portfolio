import {unstable_cache as cache} from "next/cache"
import {AsyncWeather} from "@cicciosgamino/openweather-apis"
import type {WeatherApi} from "@/types/weather";

export const Weather = cache(
		async (): Promise<WeatherApi> => {
			const weather = await new AsyncWeather()

			weather.setLang("ru")
			weather.setCity("Nakhodka")
			weather.setUnits("metric")
			weather.setApiKey(process.env.OPEN_WEATHER_KEY)

			return await weather.getSmartJSON() as WeatherApi
		},
		["weather"],
		{
			revalidate: 60,
			tags: ["weather"]
		}
)