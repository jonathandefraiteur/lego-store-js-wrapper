import { StoreCountry } from './store-country';
import { WorldRegion } from './world-region';
import { CountryCode } from './country-code';
import { LanguageCode } from './language-code';

/**
 * Represent LEGO Store Country
 */
export class StoreCountryImpl implements StoreCountry {
  worldRegion: WorldRegion;
  countryName?: string;
  countryCode: CountryCode;
  languages: LanguageCode[];

  /**
   * @param {WorldRegion} worldRegion
   * @param {CountryCode} countryCode
   * @param {LanguageCode[]} languages
   * @param {string} countryName
   */
  constructor(
    worldRegion: WorldRegion,
    countryCode: CountryCode,
    languages: LanguageCode[],
    countryName?: string
  ) {
    this.worldRegion = worldRegion;
    this.countryName = countryName;
    this.countryCode = countryCode;
    this.languages = languages;
  }

  /**
   * @param {LanguageCode} [language] target language
   * @return {string} as "ll-cc" for language-country
   */
  getStorePath(language?: LanguageCode): string {
    if (!language || !this.languages.includes(language))
      language = this.languages.length ? this.languages[0] : LanguageCode.EN;
    return `${language}-${this.countryCode}`;
  }
}
