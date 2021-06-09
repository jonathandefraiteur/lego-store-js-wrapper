import run, { ErrorResult, SuccessResult } from 'open-graph-scraper';
import { Options } from '../model/open-graph/options';
import { LEGO_CUSTOM_TAGS } from '../model/open-graph/lego-custom-tags';
import { StoreCountry } from '../model/store/store-country';
import { LanguageCode } from '../model/store/language-code';
import { CountryCode } from '../model/store/country-code';
import { LEGO_STORES } from '../model/store/lego-stores';
import { LegoStoreOg } from './lego-store-og';

/**
 * Wrapper of the LEGO Store by Open Graph
 */
export class LegoStoreOgImpl implements LegoStoreOg {
  _storeCountry: StoreCountry;
  _language: LanguageCode;

  /**
   * Constructor of LegoStoreOgImpl
   * @param {CountryCode|null} [country]
   * @param {LanguageCode|null} [language]
   */
  constructor(country?: CountryCode | null, language?: LanguageCode | null) {
    this._storeCountry = LEGO_STORES[country ?? CountryCode.DK];
    this._language = language ?? LanguageCode.EN;
  }

  /**
   * @param {string} productId
   * @param {LanguageCode} [language]
   * @param {CountryCode} [country]
   * @protected
   * @return {Options}
   */
  getOptions(
    productId: string,
    language?: LanguageCode | null,
    country?: CountryCode | null
  ): Options {
    const store = country ? LEGO_STORES[country] : this._storeCountry;
    const langCountry = store.getStorePath(language ?? this._language);
    return {
      url: `https://www.lego.com/${langCountry}/product/${productId}`,
      customMetaTags: LEGO_CUSTOM_TAGS
    };
  }

  /**
   * @param {string} productId
   * @param {LanguageCode} [language]
   * @param {CountryCode} [country]
   * @return {Promise<SuccessResult | ErrorResult>}
   */
  async search(
    productId: string,
    language?: LanguageCode,
    country?: CountryCode
  ): Promise<SuccessResult | ErrorResult> {
    return await run(this.getOptions(productId, language, country));
  }
}
