export function getNameFromPath(path: string, excessPrefix: string): string {
  return path.replace(excessPrefix, '');
}
