import { LanguageCode } from '../model/store/language-code';
import { CountryCode } from '../model/store/country-code';
import { ErrorResult, SuccessResult } from 'open-graph-scraper';

export interface LegoStoreOg {
  /**
   * @param {string} productId
   * @param {LanguageCode} [language]
   * @param {CountryCode} [country]
   * @return {Promise<SuccessResult | ErrorResult>}
   */
  search(
    productId: string,
    language?: LanguageCode | null,
    country?: CountryCode | null
  ): Promise<SuccessResult | ErrorResult>;
}
