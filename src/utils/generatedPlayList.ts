import { MUSIC_DIRECTORY } from '../constants';

import { checkDirectory } from './checkDirectory';

export const generatedPlayList = async () => {
  const albumsPath = await checkDirectory(MUSIC_DIRECTORY);
  const allAudio = await Promise.all(albumsPath.map((path) => checkDirectory(path)));

  console.log(allAudio);
  return [];
};
