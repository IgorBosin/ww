import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface FetchErrorData {
  message: string;
}

export const rtkErrorToMessage = (err: FetchBaseQueryError | SerializedError) => {
  if ('data' in err) {
    const data = err.data as FetchErrorData;

    return data?.message;
  }

  if ('message' in err) {
    return err.message;
  }

  return 'Something Went Wrong';
};
