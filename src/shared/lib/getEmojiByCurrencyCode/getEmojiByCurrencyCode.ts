import { data } from './data';

export const getEmojiByCurrencyCode = (code: string) => {
  if (data.has(code)) {
    return data.get(code);
  }

  return '◻️';
};
