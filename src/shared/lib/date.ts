import dayjs from 'dayjs';

export const getCurrentDate = () => {
  const now = dayjs();

  return dayjs(now).format('YYYY-MM-DD');
};
