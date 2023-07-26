import mp3Duration from 'mp3-duration';

import type { TrackDuration } from '../types';

export const getDuration = (file: string): void | TrackDuration =>
  mp3Duration(file, (err, duration: TrackDuration) => {
    if (err) return console.log(err.message);
    return duration;
  });
