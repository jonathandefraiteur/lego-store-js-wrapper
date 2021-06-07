import run, { ErrorResult, SuccessResult } from 'open-graph-scraper';
import { Options } from '../model/open-graph/options';
import { LEGO_CUSTOM_TAGS } from '../model/open-graph/lego-custom-tags';
import { StoreCountry } from '../model/store/store-country';

/**
 * Wrapper of the LEGO Store by Open Graph
 */
export class LegoStoreOgImpl {
  protected _storeCountry: StoreCountry | string;

  /**
   * Constructor of LegoStoreOgImpl
   * @param {StoreCountry | string} [storeCountry]
   */
  constructor(storeCountry?: StoreCountry | string) {
    this._storeCountry = storeCountry ?? 'en-dk';
  }

  /**
   * @param {StoreCountry | string} storeCountry
   * @param {string} productId
   * @protected
   * @return {Options}
   */
  protected getOptions(
    storeCountry: StoreCountry | string,
    productId: string
  ): Options {
    if (typeof storeCountry !== 'string') {
      storeCountry = storeCountry.getStorePath();
    }
    return {
      url: `https://www.lego.com/${storeCountry}/product/${productId}`,
      customMetaTags: LEGO_CUSTOM_TAGS
    };
  }

  /**
   * @param {string} productId
   * @return {Promise<SuccessResult | ErrorResult>}
   */
  public async search(productId: string): Promise<SuccessResult | ErrorResult> {
    return await run(this.getOptions('en-fr', productId));
  }
}
