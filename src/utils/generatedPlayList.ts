import mime from 'mime';

import { ALBUM_PATH, IMAGE_EXPANSION, MUSIC_DIRECTORY, MUSIC_EXPANSION } from '../constants';

import { checkDirectory } from './checkDirectory';
import { getNameFromPath } from './getNameFromPath';
import { getTracks } from './getTracks';
import { stringToHash } from './stringToHash';

export const generatedPlayList = async () => {
  const albumsPath = await checkDirectory(MUSIC_DIRECTORY);
  const allAudio = await Promise.all(albumsPath.map((path) => checkDirectory(path)));

  const playList = await Promise.all(
    allAudio.map(async (album, idx) => {
      const validTrack = album.filter((data) => mime.getType(data).indexOf(MUSIC_EXPANSION) > -1);
      const image = album.find((data) => mime.getType(data).indexOf(IMAGE_EXPANSION) > -1);

      const tracks = await getTracks(validTrack);

      return {
        id: stringToHash(albumsPath[idx]),
        namePlaylist: getNameFromPath(albumsPath[idx], ALBUM_PATH),
        tracksName: validTrack.map((data) => getNameFromPath(data, albumsPath[idx])),
        image,
        tracks,
      };
    }),
  );

  return playList;
};
