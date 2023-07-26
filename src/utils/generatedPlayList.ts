import mime from 'mime';

import { ALBUM_PATH, IMAGE_EXPANSION, MUSIC_DIRECTORY, MUSIC_EXPANSION } from '../constants';
import type { PlayListFolder } from '../types';

import { checkDirectory } from './checkDirectory';
import { getNameFromPath } from './getNameFromPath';
import { getTracks } from './getTracks';
import { stringToHash } from './stringToHash';

export const generatedPlayList = async (): Promise<PlayListFolder[]> => {
  const albumsPath = await checkDirectory(MUSIC_DIRECTORY);
  const allAudio = await Promise.all(albumsPath.map((path) => checkDirectory(path)));

  const playList: PlayListFolder[] = await Promise.all(
    allAudio.map(async (album, idx) => {
      const validTrack = album.filter((data) => mime.getType(data).indexOf(MUSIC_EXPANSION) > -1);

      const image = album.find((data) => mime.getType(data).indexOf(IMAGE_EXPANSION) > -1);
      const tracks = await getTracks(validTrack);

      const playListFolder: PlayListFolder = {
        id: stringToHash(albumsPath[idx]),
        namePlaylist: getNameFromPath(albumsPath[idx], ALBUM_PATH),
        tracksPlaylist: validTrack.map((data) => getNameFromPath(data, albumsPath[idx])),
        image,
        tracks,
      };

      return playListFolder;
    }),
  );

  return playList;
};
