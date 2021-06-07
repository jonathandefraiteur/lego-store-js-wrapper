import { WorldRegion } from './world-region';
import { CountryCode } from './country-code';
import { LanguageCode } from './language-code';

export interface StoreCountry {
  worldRegion: WorldRegion;
  countryName?: string;
  countryCode: CountryCode;
  languages: LanguageCode[];

  /**
   * @param {LanguageCode} [language] target language
   * @return {string} as "ll-cc" for language-country
   */
  getStorePath(language?: LanguageCode): string;
}
