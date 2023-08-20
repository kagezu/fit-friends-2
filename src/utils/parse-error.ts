import { AxiosError } from 'axios';

const MESSAGE_FIELD = 'message';

export type ErrorList = {
  [key: string]: string;
}

export const parseError = (err: AxiosError) => {
  if (err.response?.data) {
    const { message } = err.response.data as ErrorList;
    const errors: ErrorList = { error: 'error' };
    const parseMessageString = (error: string) => {
      const splits: string[] = error.split(' ');
      errors[splits.shift() as string] = splits.join(' ');
    };
    if (Array.isArray(message)) {
      message.forEach(parseMessageString);
    } else {
      parseMessageString(message);
      errors[MESSAGE_FIELD] = message;
    }
    return errors;
  }
};
