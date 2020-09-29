import { format, parse, isValid, parseISO } from 'date-fns';

const DATE_VALUE_FORMAT = 'yyyy-MM-dd';

const baseFormater = (date: Date, formatTemplate: string): string | null => {
  if (!date) return null;

  if (!isValid(date)) {
    return null;
  }

  try {
    return format(date, formatTemplate);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to format date', error);
    return null;
  }
};

const formatToStringFromDate = (date: Date): string | null =>
  baseFormater(date, DATE_VALUE_FORMAT);

const formatToHumenStringFromDate = (date: Date): string | null =>
  baseFormater(date, 'MMMM dd, yyyy');

const parseDateFromDateValue = (dateStr: string): Date | null => {
  if (!dateStr) return null;

  try {
    const d = parse(dateStr, DATE_VALUE_FORMAT, new Date());

    if (isValid(d)) {
      return d;
    }
    throw Error('Invalid date');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to parse date string', error);
    return null;
  }
};

const formateToTimeStringFromDate = (date: Date): string | null =>
  baseFormater(date, 'h:mmaa')?.toLocaleLowerCase();

const baseParser = (
  dateStr: string,
  formatTemplate: string,
  date = new Date()
): Date | null => {
  try {
    return parse(dateStr, formatTemplate, date);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('baseParser: Failed to parse date', error);
    return null;
  }
};

export {
  parse,
  format,
  formatToStringFromDate,
  formatToHumenStringFromDate,
  formateToTimeStringFromDate,
  parseDateFromDateValue,
  parseISO,
  baseParser,
  baseFormater,
};
