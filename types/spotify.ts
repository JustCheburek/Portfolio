import { PlayerContext, Track } from "spotify-types";

/**
 * The currently playing object of the player api.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingobject
 */
export interface CurrentlyPlaying {
  /** The context. */
  context: PlayerContext;
  /** The object type of the currently playing item. */
  currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown';
  /** If something is currently playing, return true. */
  is_playing: true;
  /** Progress into the currently playing track or episode. */
  progress_ms: number;
  /** The item of the context. */
  item: Track;
  /** Unix Millisecond Timestamp when data was fetched. */
  timestamp: number;
}

export interface CurrentlyNotPlaying {
  /** The context. */
  context: null;
  /** The object type of the currently playing item. */
  currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown';
  /** If something is currently playing, return true. */
  is_playing: false;
  /** Progress into the currently playing track or episode. */
  progress_ms: null;
  /** The item of the context. */
  item: null;
  /** Unix Millisecond Timestamp when data was fetched. */
  timestamp: number;
}