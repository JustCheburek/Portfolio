import {unstable_cache as cache} from "next/cache"
import {AsyncWeather} from "@cicciosgamino/openweather-apis"
import type {Weather} from "@types/weather";

export const Weather = cache(
		async (): Promise<Weather> => {
			const weather = await new AsyncWeather()

			weather.setLang("ru")
			weather.setCity("Nakhodka")
			weather.setUnits("metric")
			weather.setApiKey(process.env.OPEN_WEATHER_KEY)

			return await weather.getSmartJSON() as Weather
		},
		["weather"],
		{
			revalidate: 60,
			tags: ["weather"]
		}
)