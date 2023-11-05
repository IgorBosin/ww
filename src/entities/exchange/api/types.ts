type Rate = Record<string, number>;

export interface ExchangeRatesParams {
  date: string;
  base: string;
  symbols?: string;
}

export interface ExchangeRatesDto {
  base: string;
  date: string;
  historical: boolean;
  rates: Rate;
  success: boolean;
  timestamp: number;
}
