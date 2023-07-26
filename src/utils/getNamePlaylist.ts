export function getNamePlaylist(path: string): string {
  const indexName = path.lastIndexOf('audio/');
  const indexExpansion = path.lastIndexOf('/');
  return path.slice(indexName + 6, indexExpansion);
}
