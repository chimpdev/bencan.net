export type ClassValue = ClassArray | ClassDictionary | string | number | bigint | null | boolean | undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

declare module 'next' {
  export interface Metadata {
    date?: string;
  }
}

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
};

export type LanternSpotify = {
  track_id: string;
  song: string;
  artist: string | string[];
  album: string;
  album_cover: string;
  start_time: {
    unix: number;
    raw: string;
  },
  end_time: {
    unix: number;
    raw: string;
  },
  time: {
    current_human_readable: string;
    total_human_readable: string;
  }
}