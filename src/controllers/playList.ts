import watch from 'watch';

import { MUSIC_DIRECTORY } from '../constants';
import type { PlayListFolder } from '../types';
import { generatedPlayList } from '../utils/generatedPlayList';

let playList: PlayListFolder[] = [];

/**
 * просматриваем за состоянием директории audio, при любом изменении запускаем парсинг внутри директории
 */
(() => {
  watch.watchTree(MUSIC_DIRECTORY, async () => {
    playList = await generatedPlayList();
  });
})();

export const getPlayList = (_, res) => res.send(playList);
