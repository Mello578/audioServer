import fs from 'fs';

export const checkDirectory = async (directory: string): Promise<string[]> =>
  new Promise((resolve) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        // eslint-disable-next-line no-console
        return console.error(err);
      }
      resolve(files.map((file: string) => `${directory}/${file}`));
    });
  });
