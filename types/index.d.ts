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