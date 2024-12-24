import { format, parse } from 'date-fns';

export const yyyyMMddAddDash = (date: string): string => {
  const parsedDate = parse(date, 'yyyyMMdd', new Date());
  return format(parsedDate, 'yyyy-MM-dd');
};

export const formatYyyyMMddE = (value?: Date) => {
  if (!value) return '';

  const date = new Date(value);

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];

  return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
};
