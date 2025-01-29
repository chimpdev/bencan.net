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

export type BaseUserType = {
  metadata: {
    id: string;
    username: string;
    discriminator: string;
    global_name: string | null;
    avatar: string | null;
    avatar_url: string | null;
    display_avatar_url: string;
    bot: boolean;
    flags: {
      human_readable: string[];
      bitfield: number | null | undefined;
    };
    monitoring_since: {
      unix: number | null;
      raw: Date | null;
    };
  };
  active_platforms: ClientPresenceStatusData;
  activities: (CustomStatusActivity | OtherActivity)[];
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  storage: Map<string, string> | {};
};

export type LanternUserResponse =
  | (BaseUserType & { status: 'offline'; last_seen_at: { unix: number; raw: Date } })
  | (BaseUserType & { status: Exclude<string, 'offline'>; last_seen_at: { unix: number; raw: Date } });