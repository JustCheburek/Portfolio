import {unstable_cache as cache} from "next/cache"
import axios from "axios";
import type { AccessToken } from "spotify-types";
import type { CurrentlyPlaying, CurrentlyNotPlaying } from "@/types/spotify";

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (): Promise<AccessToken> => {
	return await axios.post(
			TOKEN_ENDPOINT,
			{
				grant_type: 'refresh_token',
				refresh_token,
			},
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: `Basic ${basic}`,
				},
			}
	).then(responce => responce.data);
};

export const Spotify = cache(
		async (): Promise<CurrentlyPlaying | CurrentlyNotPlaying> => {
			const {access_token} = await getAccessToken();

			const isPlaying = await axios.get<CurrentlyPlaying>(
				NOW_PLAYING_ENDPOINT,
				{
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				}
			).then(responce => responce.data);

			console.log(isPlaying)

			return isPlaying
		},
		["spotify"],
		{
			revalidate: 10,
			tags: ["spotify"]
		}
)