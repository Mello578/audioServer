import fs from 'fs';
import * as os from 'os';

import audioMetaData from 'audio-metadata';
import mp3Duration from 'mp3-duration';

export const getTracks = async (trackPaths: string[]) => {
  const list = await Promise.all(
    trackPaths.map(async (track) => ({
      track,
      meta: audioMetaData.id3v2(await fs.readFileSync(track)),
      duration: os.platform() === 'linux' ? mp3Duration(track)._settledValue : mp3Duration(track)._settledValue(),
    })),
  );

  return list;
};
