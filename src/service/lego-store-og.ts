import run, { ErrorResult, SuccessResult } from 'open-graph-scraper';
import { Options } from '../model/open-graph/options';
import { LEGO_CUSTOM_TAGS } from '../model/open-graph/lego-custom-tags';
import { StoreCountry } from '../model/store/store-country';

const options: Options = {
  url: 'https://www.lego.com/fr-fr/product/31081',
  customMetaTags: LEGO_CUSTOM_TAGS
};

/**
 *
 */
export async function testOGS(): Promise<SuccessResult | ErrorResult> {
  console.log('COUCOU');
  const res = await run(options);
  console.log('RESULT', res.result);
  return res;
}

/**
 * Wrapper of the LEGO Store by Open Graph
 */
export class LegoStoreOgImpl {
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
}
