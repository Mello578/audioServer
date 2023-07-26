import crypto from 'crypto';

export const stringToHash = (str: string): string => crypto.createHash('md5').update(str).digest('hex');
