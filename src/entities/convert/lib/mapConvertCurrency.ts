import { ConvertCurrencyDto } from '../api/types';
import { ConvertCurrencyResult } from '../model/types';

export const mapConvertCurrency = (dto: ConvertCurrencyDto): ConvertCurrencyResult => String(dto.result);
