import fs from 'fs';

import audioMetaData from 'audio-metadata';

import type { Track } from '../types';

import { getDuration } from './getDuration';

export const getTracks = async (trackPaths: string[]): Promise<Track[]> => {
  const list = await Promise.all(
    trackPaths.map(async (track) => ({
      track,
      meta: audioMetaData.id3v2(await fs.readFileSync(track)),
      duration: getDuration(track),
    })),
  );

  return list;
};
