/**
 * резервное название на случай отсутствия метаданных
 * @param path
 */
export function getName(path: string): string {
  const indexName = path.lastIndexOf('/');
  const indexExpansion = path.lastIndexOf('.');
  return path.slice(indexName + 1, indexExpansion);
}
