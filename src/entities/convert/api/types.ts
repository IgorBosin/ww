export interface ConvertCurrencyParams {
  from: string;
  to: string;
  amount: string;
}

export interface ConvertCurrencyDto {
  date: string;
  historical: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
}
