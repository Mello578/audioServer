export interface PlayListFolder {
  id: string;
  namePlaylist: string;
  tracksPlaylist: string[];
  image: string;
  tracks: Track[];
}

export interface Track {
  meta: TrackMeta;
  track: string;
  duration: TrackDuration | void;
}
export interface TrackMeta {
  TALB: string;
  TCON: string;
  TIT2: string;
  TRCK: string;
  TYER: string;
  album: string;
  genre: string;
  title: string;
  track: string;
}

export interface TrackDuration {
  fulfillmentValue: number;
  isFulfilled: boolean;
  isRejected: boolean;
}
